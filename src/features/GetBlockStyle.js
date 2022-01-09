 function GetBlockStyle(block) {
      switch (block.getType()) {
        case 'blockquote': return 'RichEditor-blockquote';
        default: return null;
      }
    }

    export default GetBlockStyle;
