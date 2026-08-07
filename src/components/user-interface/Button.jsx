import './Button.css'

function Button({ text, status, size, onClick}) {
    return (
        <button className={`${status} ${size}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;