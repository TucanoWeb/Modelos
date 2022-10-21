import { Component } from 'react';
import { MsgError } from './index'

class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            MsgError: '',
            MsgErrorInfo: ''
        }
    }


    componentDidCatch(error, errorInfo) {

        this.setState = {
            hasError: true,
            MsgError: error,
            MsgErrorInfo: errorInfo

        }
    }


    render() {


        const { hasError, MsgError } = this.state


        if (hasError) return <MsgError valorMsgError={MsgError} />

        return this.props.children


    }
}

export default ErrorBoundaries