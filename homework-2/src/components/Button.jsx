import './Button.css'

function Button({text}) {
    const isDelete = text.toLowerCase() === "delete"
    return (
        <button className={`btn ${isDelete ? 'delete' : ''}`}>
            {text}
        </button>
    )
}

export default Button