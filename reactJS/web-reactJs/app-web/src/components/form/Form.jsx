
import PrintName from "./Printname";
import { useState } from "react";

const Form = () => {
    
    const [name, setName] = useState('Insira o nome');


    let nome;
    
    const capturarNome = (recebeValorTarget) => {
    
       nome = recebeValorTarget.value; 

       setName(nome)
       
    
    }

    
    const alertForm = () => {

    return (
       alert(nome)
    )
}


    return (
    <div>
        <form >
            <label>
                <input type="text" onChange={(e) => capturarNome(e.target)}/>
            </label>
            <input type="submit" value="Enviar" onClick={alertForm}/>

        </form>

        <PrintName dataName={name} />

    </div>

    )

    
}

export default Form