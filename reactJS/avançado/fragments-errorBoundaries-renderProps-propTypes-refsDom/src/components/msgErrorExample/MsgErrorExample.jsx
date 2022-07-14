const MsgErrorExample = (props) => {


    console.log(props.valorMsgErrorInfo)


    return (


        <div>

            <div>

                A mensagem de erro é: {props.valorMsgErrorInfo.componentStack}

            </div>

        </div>


    )


}


export default MsgErrorExample