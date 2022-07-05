import React from "react";

function Button(props) {

    const { name, onClick } = props

    return (
    <button class="botoes" onClick={onClick}>
        {name}
    </button>
)


}


export default Button