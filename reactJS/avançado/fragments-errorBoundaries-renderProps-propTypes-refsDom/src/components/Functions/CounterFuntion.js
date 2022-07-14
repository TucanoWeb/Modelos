import { useState } from "react"


const CountFunction = (props) => {

    const [actualValue, setActualValue] = useState(1)


    return (

        <div>
            O valor Atual é: {actualValue}
            <button onClick={() => { setActualValue(actualValue + 1) }}>Aumentar</button>
            <button onClick={() => { setActualValue(actualValue - 1) }}>Diminuir</button>
        </div>

    )


}

export default CountFunction