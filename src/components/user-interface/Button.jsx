import "./Button.css";

function Button({ text, status, size, link, onClick }) {
  return (
    <>
      {!link && (
        <button className={`${status} ${size}`} onClick={onClick}>
          {text}
        </button>
      )}
      {link && (
        <a className={`${status} ${size}`} href={link} onClick={onClick}>
          {text}
        </a>
      )}
    </>
  );
}

export default Button;