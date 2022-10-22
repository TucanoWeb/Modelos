import { useState } from "react"
import { useMemo } from "react"

const HookUseMemo = () => {

    const [number1, setNumber1] = useState()
    const [number2, setNumber2] = useState()
    const [result, setResult] = useState(15)

    //O Hook UseMemo grava o estado de uma variável/constante e não a atualiza mesmo que o componente seja renderizado. Apenas se for desmontado ou se a página for atualizada.
    const calculo = useMemo(() => {

        return console.log(result)

    }, []) //Se não for repassada nenhum estado de controle ele vai manter o mesmo número em novas renderizações, o que não inclui a desmontagem do componente. Ou seja, se inserir um item para controle, ele atualiza quando houver alteração nesse item que foi repassado entre os colchetes. Por exemplo, pode ser inserido o result, de forma que, ao ser atualizado, useMemo também tenha os valores atualizados.




    function some1(value) {
        setNumber1(value)
    }


    function some2(value) {
        setNumber2(value)
    }



    return (
        <div>
        <h1>UseMemo</h1>
            <input placeholder="Insira o primeiro número da soma" onChange={(e) => some1(e.target.value)} />
            <input placeholder="Insira o segundo número da soma" onChange={(e) => some2(e.target.value)} />
            <button onClick={() => setResult(Number(number1) + Number(number2))}>Calcular</button>
            <p>Resultado: {result} </p>
        </div>
    )
}

export default HookUseMemo