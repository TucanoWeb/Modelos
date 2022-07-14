import { Component } from "react";
import MsgErrorExample from "../msgErrorExample/MsgErrorExample";

// ErrorBoundary, através do componentDidCatch captura se houve algum erro na aplicação e retorna uma mensagem amigável, tratando o erro  para o usuário. É como se fosse um bypass, de forma que ele não quebra a aplicação. O componente deve envolver o que ele deseja verificar. No caso, eu envolvi, em App.jsx, o componente ExemploFragments.

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            msgError: '',
            msgErrorInfo: ''
        };
    }



    componentDidCatch(error, errorInfo) {
        // Você também pode registrar o erro em um serviço de relatórios de erro
        
        this.setState({
            hasError: true,
            msgError: error,
            msgErrorInfo: errorInfo


        })
    }


    render() {

const {msgError, msgErrorInfo} = this.state

        if (this.state.hasError) {

            return (

                <MsgErrorExample valorMsgError={msgError} valorMsgErrorInfo={msgErrorInfo} />

            )

        }

        return this.props.children;


    }
}

export default ErrorBoundary

