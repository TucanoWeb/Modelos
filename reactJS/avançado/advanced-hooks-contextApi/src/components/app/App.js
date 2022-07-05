import React, { Component } from "react";
import PostAchiv from "../posts/Posts";
import PostWithHooks from "../posts-hook/PostsWithHooks";
import Api from "../api/Api";
import { updateToken } from "../api/token";
import { ThemeContext, themes } from "./Theme";
import './App.css'

class AppClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nome: 'Initial State',
      ativaWillUnmontNoPostAchiv: true,
      removeHookBlock: 'Component Mount',
      token: ''
    }
  }

  onRemove = () => {

    this.setState({

      ativaWillUnmontNoPostAchiv: false


    })


  }

  onRemoveHook = () => {

    this.setState({
      removeHookBlock: 'Component Unmont'
    })

  }


  render() {

    const { nome, token } = this.state

    // Aqui eu simulei uma chamada de api, onde há uma demora no retorno de 4 segundos. Setstate muda o estado de token, que inicialmente havia sido setado como ''
    setTimeout(() => {
      this.setState({
        token: updateToken
      })
    }, 4000);


    return (

      <div className="wrapper">
        <h1>{nome}</h1>

        {/* Abaixo, está sendo alterado o valor do objeto state, no atributo ativaWillUm... através de invocação da arrow function onRemove. Já na renderização, está inclusa uma verificação && do objeto, que tendo seu valor true, renderiza o componente. De outra forma, o componente é desmontado. A função componentWillUnmount está dentro do respectivo componente, ou seja, dentro do component Posts.jsx */}
        <button onClick={this.onRemove}>Desmontar Component</button>
        {this.state.ativaWillUnmontNoPostAchiv && (
          <PostAchiv />
        )}

        {/** Como parâmetro, está sendo enviado title e descripton, que recebem o valor diretamente na tag do componente abaixo, sem necessidade, nesse caso, de declarações anteriores. Ele vai ser recebido com o parâmetro props, dentro do componente. */}
        <button onClick={this.onRemoveHook}>Desmont Component Hook</button>

        {/** Criando uma condicional com operador sendo ?  para verdadeiro e : para retorno falso (similar ao else) */}
        {this.state.removeHookBlock === 'Component Mount' ? (
          <PostWithHooks title={'Initial Title'} description={'Inicital Description'} stateRender={this.state.removeHookBlock} />
        ) : console.log('Component Unmount')
        }

        {/**  Foi criado o contexto dentro de Theme.js, exportado o contexto criado dentro do arquivo Themes, que no caso foi o ThemeContext e a constante com os valores criados, que no caso é o themes. Foi insrido um spread (...) para ser possível colocar a outra constante junto (token). Veja que entre as tags abaixo, foi colocado o nome do contexto criado (ThemeContext) junto do módulo Provider, para passar os valores para os componentes chamados dentro da tag.*/}
        <ThemeContext.Provider value={{ ...themes.secondary, token }}>
          <Api />
        </ThemeContext.Provider>

      </div>


    )

  }

}

export default AppClass