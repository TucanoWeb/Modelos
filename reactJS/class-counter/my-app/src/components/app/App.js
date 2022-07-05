import React, { Component } from "react";
import './App.css'


//Declaro a Classe AppClass
class AppClass extends Component {
  constructor(props) {
    super(props)

    //Seta o estado inicial do objeto, no caso o quantity, com 0
    this.state = {
      quantity: 0,
      title: 'Initial Title'
    }

  }


  // Função invocada ao clicar no elemento '-'. É possível invocar sem const ou function devido ao fato dele já estar referenciado dentro do component, conforme pode ser visto no bloco de render, através do this. O parâmetro value foi dado esse nome somente como referência. Esse parâmetro é recebido do onclick, no bloco de render.
  decrement = (value) => {

    if (value < 0) {

      this.setState({
        quantity: 0
      })

    } else {

      this.setState({
        quantity: value

      })
    }


  }



  // Função invocada ao clicar no elemento '-'. É possível invocar sem const ou function devido ao fato dele já estar referenciado dentro do component, conforme pode ser visto no bloco de render, através do this. O parâmetro value foi dado esse nome somente como referência. Esse parâmetro é recebido do onclick, no bloco de render.
  increment = (value) => {

    this.setState({
      quantity: value

    })
  }

  // Passado como parâmetro atributo target do input, conforme mais abaixo e filtro pelo item filho value, que é o valor colocado dentro do próprio input, no campo.
  changeTitle = (e) => {

    console.log(e.value)

    if (e.value === '') {
      this.setState({
        title: 'Initial title'
      })
    } else {

      this.setState({
        title: e.value
      })

    }

  }


  //Bloco necessário para renderização
  render() {

    //É definico que o objeto quantity recebe o valor do estado em this.state. Dessa forma, ele pode ser manipulado, conforme mais abaixo. Ele foi incluso entre {} devido ao fato de ser um objeto de state
    const { quantity, title } = this.state

    return (
      <div>
        <div className="wrapper">
          <h1>{title}</h1>
          <div className="wrapperCounter">
            <p onClick={() => this.decrement(quantity - 1)}>-</p>
            <p>{quantity}</p>
            <p onClick={() => this.increment(quantity + 1)}>+</p>
          </div>
          <form>
            {/* Abaixo, em input, foi buscado o target dentro do input, que é um parâmetro que pode ser visualido no console. É uma estrutura padrão do input*/}
            <input type='text' onChange={(e) => this.changeTitle(e.target)} />
          </form>
        </div>

      </div>
    )

  }

}


export default AppClass
