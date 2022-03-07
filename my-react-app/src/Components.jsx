export function Input() {
    return (
        <input
            className="input"
            type="text"
            placeholder="Enter your name"
        />
    )
}

export function Button() {
    return (
        <button
            className="btn"
            type="submit"
        >
            Click
        </button>
    )
}

export function Result(props) {
    return (
        <p className="result-window"> {props.message} </p>
    )
}