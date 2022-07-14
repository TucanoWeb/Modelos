import { Component } from "react";

class ErrorBoundaries extends Component {
    constructor(props) {
        super(props)

        this.state = ({

            hasError: false,
            error: '',
            errorInfo: ''

        })

    }

    componentDidCatch(error, errorInfo) {

        this.setState = ({

            hasError: true,
            error: error,
            errorInfo: errorInfo
        })
    }



    render() {

        const {hasError, error, errorInfo} = this.state

        if (hasError) {

            <h1>Ocorreu um erro. Código {errorInfo}</h1>

        }

        return this.props.children


}

}


export default ErrorBoundaries