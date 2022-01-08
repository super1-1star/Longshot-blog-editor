import StyleButton from "./StyleButton";

var INLINE_STYLES = [
  { label: "B", style: "BOLD" ,exClass:"text-bold"},
  { label: "I", style: "ITALIC",exClass:"text-italic"},
  { label: "U", style: "UNDERLINE",exClass:"text-underline" },
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <>
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
          exClass={type.exClass}
        />
      ))}
    </>
  );
};

export default InlineStyleControls;
