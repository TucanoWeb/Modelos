const Button = (props) => {


    return (


<button onClick={props.exportaFuncao}>
    {props.children}
</button>


    )
}

export default Button