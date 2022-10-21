import { Component } from "react";
import MsgError from "./MsgError";

class BoundariesError extends Component {
constructor(props) {
    super(props);

    this.state = {

        hasError: false,
        msgError: '',
        msgErrorInfo: ''
    }
}


componentDidCatch(error, errorInfo) {

    this.setState = {

        hasError: true,
        msgError: error,
        msgErrorInfo: errorInfo
    }
}


    render() {

        const {hasError, msgErrorInfo, msgError} = this.state

        if (hasError) return <MsgError valorMsgError={msgError} />

        return this.props.children


    }
}

export default BoundariesError