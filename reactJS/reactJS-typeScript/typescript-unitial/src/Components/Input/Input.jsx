import PrintInputValues from './PrintInputValue'
import { useState } from "react";

const Input = () => {

    const [valueInput, setValueInput] = useState('default')


    function printConsole(e) {

        setValueInput(e.value)
        console.log(valueInput)
    }

    return (
        <>
            <input onChange={(e) => printConsole(e.target)} />

            <PrintInputValues valueValueInput={valueInput} />


        </>
    );

}


export default Input