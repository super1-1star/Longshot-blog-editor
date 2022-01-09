import React from "react";
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";
import "../App.css";
import BlockStyleControls from "../features/BlockStyleControls";
import InlineStyleControls from "../features/InlineStyleControls";
import StyleMap from "../features/StyleMap";
import GetBlockStyle from "../features/GetBlockStyle";
import ExtraButton from "../features/ExtraButton";
import redoImage from "../image/redoImage.svg";
import undoImage from "../image/undoImage.svg";

class EditorMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };

    this.focus = () => this.editor.focus();
    this.onChange = (editorState) => this.setState({ editorState });

    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
  }

  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4 /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }
  onUndo() {
    this.onChange(EditorState.undo(this.state.editorState));
  }

  onRedo() {
    this.onChange(EditorState.redo(this.state.editorState));
  }

  render() {
    const { editorState } = this.state;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = "RichEditor-editor";
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== "unstyled") {
        className += " RichEditor-hidePlaceholder";
      }
    }

    return (
      <div className='RichEditor-root'>
        <div className='toolbar'>
          <div className='main-toolbar'>
            <InlineStyleControls
              editorState={editorState}
              onToggle={this.toggleInlineStyle}
            />
            <BlockStyleControls
              editorState={editorState}
              onToggle={this.toggleBlockType}
            />

            <button className='style-btn' onClick={this.onUndo.bind(this)}>
              <img
                className=' change-my-color'
                src={undoImage}
                alt='undo'
                srcset=''
              />
            </button>
            <button className='style-btn' onClick={this.onRedo.bind(this)}>
              <img
                className=' change-my-color'
                src={redoImage}
                alt='redo'
                srcset=''
              />
            </button>
          </div>
          <ExtraButton />
         
        </div>
        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={GetBlockStyle}
            customStyleMap={StyleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={this.mapKeyToEditorCommand}
            onChange={this.onChange}
            placeholder='Write Here'
            spellCheck={true}
          />
        </div>
      </div>
    );
  }
}

export default EditorMain;
