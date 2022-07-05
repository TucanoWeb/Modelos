import React from "react";
import { Component } from "react";
import './Posts.css'


class PostAchiv extends Component {
    constructor(props) {
        super(props)


        this.state = {
            title: '',
            description: '',
            valueUpdate: 0,
            titleAfter: 'Título Inicial',
            descriptionAfter: 'Descrição inicial'

        }
    }


    updateTile = (valueTitle) => {



        this.setState({

            title: valueTitle.value

        })

    }


    updateDescription = (valueDescription) => {

        this.setState({

            description: valueDescription.value
        })

    }

    updateAll = (value1, value2, value3) => {

        this.setState({

            valueUpdate: value1,
            titleAfter: value2,
            descriptionAfter: value3

        })


    }

    componentWillUnmount() {
        console.log('Desmontado')
    }

    render() {

        const { title, description, titleAfter, descriptionAfter } = this.state

        return (
            <div className="wrapperComponent">
                <h2>COM CLASSE</h2>
            <div className="wrapperPost">
                
                <div className="columnTitle">
                    <p className="titleField"> Título: </p>
                    <p className="title">{titleAfter}</p>
                    <div className="fieldPost">
                        <form>
                            <p> Título do Post</p>
                            <input onChange={(e) => this.updateTile(e.target)} />
                        </form>
                    </div>
                </div>


                <div className="columnDescription">
                    <p className="titleDescription">Descrição: </p>
                    <p className="description">{descriptionAfter}</p>
                    <form>
                        <p> Descrição do Post</p>
                        <input onChange={(e) => this.updateDescription(e.target)} />

                    </form>

                </div>
            </div>
                <div className="refreshPosts">
                    <p className="buttonRefresh" onClick={() => this.updateAll(1, title, description)}>Enviar</p>

                </div>
            </div>
        )

    }


}


export default PostAchiv