import React from "react";
import { useState, useEffect } from "react";

//Props, como parâmetro da arrow function, recebe o valor que veio do local onde ele foi ativado, com os parâmetros inclusos diretamente na tag do componente.
const PostWithHooks = (props) => {

    let [initialPost, setInitialPost] = useState({

        title: props.title,
        description: props.description

    });


    let [finalPost, setFinalPost] = useState({
        title: '',
        description: ''
    })


    useEffect(() => {

        console.log('Título Atualizado na tela')

    }, [initialPost.title])//Dentro do colchete, pode colocar a escuta de um elemento. Por exemplo, cep, que assim que o elemento fosse preenchido, ele chamaria um serviço para completar os dados de endereço do formulário.

    useEffect(() => {

        console.log('Descrição renderizada na tela')

    }, [initialPost.description])//Dentro do colchete, pode colocar a escuta de um elemento. Por exemplo, cep, que assim que o elemento fosse preenchido, ele chamaria um serviço para completar os dados de endereço do formulário.

    useEffect(() => {

        console.log(props.stateRender)

    }, [props.stateRender])//Dentro do colchete, pode colocar a escuta de um elemento. Por exemplo, cep, que assim que o elemento fosse preenchido, ele chamaria um serviço para completar os dados de endereço do formulário.





    const updateTitle = (e) => {

        setFinalPost({
            title: e.value,
            description: finalPost.description
        })
    }


    const updateDescription = (e) => {

        setFinalPost({
            title: finalPost.title,
            description: e.value
        })

    }


    const updateAll = (value1, value2) => {
        setInitialPost({
            title: value1,
            description: value2
        })
    }


    return (

        <div className="wrapperComponent">
            <h2>COM HOOKS</h2>
            <div className="wrapperPost">

                <div className="columnTitle">
                    <p className="titleField"> Título: </p>
                    <p className="title">{initialPost.title}</p>
                    <div className="fieldPost">
                        <form>
                            <p> Título do Post</p>
                            <input onChange={(e) => updateTitle(e.target)} required />
                        </form>
                    </div>
                </div>


                <div className="columnDescription">
                    <p className="titleDescription">Descrição: </p>
                    <p className="description">{initialPost.description}</p>
                    <form>
                        <p> Descrição do Post</p>
                        <input onChange={(e) => updateDescription(e.target)} required />

                    </form>

                </div>
            </div>
            <div className="refreshPosts">
                <p className="buttonRefresh" onClick={() => updateAll(finalPost.title, finalPost.description)}>Enviar</p>

            </div>
        </div>
    )


}


export default PostWithHooks
