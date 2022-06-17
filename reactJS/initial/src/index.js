import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import { Component } from "react"


//Components
import Button from "./components/Button"
import ComponenteA from "./components/ComponentA"
import ComponenteB from "./components/ComponentB"


//Para mostrar esse bloco no front-end, tem que renomear no ReactDom para AppClasse
class AppClasse extends Component {

    constructor(props) {
        super(props)


        this.state = {
            clock: 1000,
            copo: 'água'
        }
    }

    alterarCopo = () => {
        this.setState({
            copo: 'Refrigerante'
        })
    }

    render() {

        const { clock, copo } = this.state

        return (
            <div>
                <h1>{clock}</h1>
                <button onClick={() => this.alterarCopo()}>{copo}</button>
            </div>
        )
    }
}


function soma1(a, b) {
    return a + b
}

function somaBotao(a, b) {
    alert(a + b)
}

function primeiroJSX() {
    return (
        <div className="teste">
            TucanoWeb - Infraestrutura e Programação
            <h1>Soma: {soma1(2, 3)}</h1>
            <Button onClick={() => somaBotao(10, 20)} name="Clique Aqui" />
            <ComponenteA>
                <ComponenteB>
                    <Button onClick={() => somaBotao(20, 30)} name="Botão 2" />
                </ComponenteB>
            </ComponenteA>


        </div >

    )
}


const App = () => {

    return (
        <div className="App">
            {primeiroJSX()}

        </div>
    )

}


const rootElement = document.getElementById('root')
ReactDOM.render((<App />), rootElement)