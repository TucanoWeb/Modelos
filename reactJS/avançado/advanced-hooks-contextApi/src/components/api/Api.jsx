import React, { useContext } from "react";
import { ThemeContext } from "../app/Theme";
import Form from "../form/Form";


const Api = () => {

    const theme = useContext(ThemeContext)
    console.log('API component - theme:values', theme)

    return (
        <div>
            <h1>Bloco com user Context hook</h1>
            <Form />
            <button>Button do Hook Context</button>
        </div>
    )

}

export default Api