const Button = (props) => {

    return (

        <>
        <h1>Component Button com children</h1>
        <button onClick={props.exportFunction}>
            {props.children}
        </button>
        <p>
            ----------------
            </p>
        </>
    )

}

export default Button