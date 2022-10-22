import { useCallback } from "react"
import { useState } from "react"

const HookUseCallback = () => {

    const [number1, setNumber1] = useState()
    const [number2, setNumber2] = useState()
    const [result, setResult] = useState(15)

    //O Hook useCallback é muito parecido com o useMemo, mas ao invés de guardar uma variável, guarda uma função, como podemos ver abaixo. Ele grava os valores na função, evitando o reset deles ao realizar nova renderização

    const handleClickSome = useCallback(() => {

        setResult(Number(number1) + Number(number2))

    }, []) //Se não for repassada nenhum estado de controle ele vai manter o mesmo número em novas renderizações, o que não inclui a desmontagem do componente. Ou seja, se inserir um item para controle, ele atualiza quando houver alteração nesse item que foi repassado entre os colchetes. Por exemplo, pode ser inserido o result, de forma que, ao ser atualizado, useCallback também tenha os valores atualizados.


    return (
        <div>
            <h1>UseCallback</h1>
            <input placeholder="Insira o primeiro número da soma" onChange={(e) => setNumber1(e.target.value)} />
            <input placeholder="Insira o segundo número da soma" onChange={(e) => setNumber2(e.target.value)} />
            <button onClick={handleClickSome}>Calcular com useCallback</button>
            <button onClick={() => setResult(Number(number1) + Number(number2))}>Calcular</button>
            <p>Resultado: {result} </p>
        </div>
    )
}

export default HookUseCallback