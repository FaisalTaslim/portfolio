import "./Capsule-Text.css";

function CapsuleText({ icon, text, color, override }) {
  return (
    <div className={`capsule-text ${override ? "override" : ""}`}>
      {icon && (
        <span className="icon" style={{ color: color || "var(--accent)" }}>
          <i className={icon}></i>
        </span>
      )}
      <span className="text">{text}</span>
    </div>
  );
}

export default CapsuleText;
