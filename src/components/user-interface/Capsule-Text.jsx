import "./Capsule-Text.css";

function CapsuleText({ icon, text, color, link, glow, override }) {
  return (
    <div className={`capsule-text ${override ? "override" : ""} ${glow ? "no-glow": ""}`}>
      {icon && (
        <span className="icon" style={{ color: color || "var(--accent)" }}>
          <i className={icon}></i>
        </span>
      )}
      {(text && link) && (
        <a href={link} target="_blank" rel="noreferrer">
          <span className="text">{text}</span>
        </a>
      )}
      {!link && text && (
        <span className="text">{text}</span>
      )}
    </div>
  );
}

export default CapsuleText;