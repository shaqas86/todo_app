import "./Tag.css";

function Tag({ tagName, selectTag, selected }) {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d458" },
    JavaScript: { backgroundColor: "yellow" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
}

export default Tag;
