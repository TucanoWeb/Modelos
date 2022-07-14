import { useRef, useState } from "react"


//useRef detêm um valor que pode ser acessado por todo a aplicação. Isso é muito útil no caso de comparação de valores anteriores e atuais. Por exemplo: digamos que há um formulário e que esse formulário necessite de que todos os campos estejam preenchidos corretamente ou que tenham algum valor. É possível criar uma referência para cada elemento (sendo input, checkbox... etc, tanto faz) e ao submeter os dados, verificar se o valor está correto, através de uma condicional, por exemplo e, caso não esteja, utilizar o focus, por exemplo, para apontar até o elemento. 

// É possível, também, como informado, fazer comparações de valores anteriores. 

// O useRef não causa novas renderizações. Para renderizar ao ser alterado algum valor de useRef, é necessário criar algo para disparar, utilizando um método diferente, tipo um useState dentro de um UseEffect. Por exemplo:

{/**

useEffect(() => {

valorUseRef.current = novo valor;

} [estadoAcompanhado])


Dessa forma, ao ser alterado o valor do estadoAcompanhado, valorUseRef é rederizado novamente com o novo valor sendo mostrado no front-end

*/}


// useRef também é útil na utilização de bibliotecas de terceiros, pois ele pode possuir um valor padrão de algum elemento disponibilizado na biblioteca. Por exemplo, um datapicker para setar data. Ou seja, você define o elemento do datapicker como referência e ao clicar em um botão por exemplo, ele traz o elemento para tela ou foca ele, entre outras possibilidades.


// É possível também disparar animações, utilizando o useRef, pois como dito anteriormente, ele cria uma referência no respectivo elemento. É possível inclusive definir um Ref em uma div, fazendo com que um clique fora de um elemento dispare uma ação, como fechar um menu, por exemplo.



const ExemploUseRefs = () => {

    const [valueInput, setValueInput] = useState()

    const elementRef = useRef()


    function trackInput(value) {

        setValueInput(value)


    }



    function captureValueInput() {


        if (valueInput === '') {

            elementRef.current.focus()


        }
    }


    return (

        <>

            <label> Insira um valor abaixo, senão foca o elemento: </label>
            <input ref={elementRef} onChange={(e) => { trackInput(e.target.value) }} />

            <div>

                <button onClick={captureValueInput}> Focar input</button>

                <div> Valor inserido: {valueInput}</div>



            </div>

        </>

    )

}

export default ExemploUseRefs