import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Post = (props) => {

    // Defino o valor da constante para o axios. Poderia ser também o process.env....
    const baseURL = 'http://api.tucanocloud.com.br:8080';
    

    const [msgNotification, setMsgNotification] = useState("Cadastrando Usuário...")

    console.log(props.valorValueForm.name) 
    console.log(props.valorValueForm.email) 

    let count = 1;

    useEffect(() => {

        if (count <= 1) {
            axios.post(`${baseURL}/cadastrar`, {
                name: props.valorValueForm.name, //Recebido de RegisterUser
                email: props.valorValueForm.email //Recebido de RegisterUser
            })
                .then((response) => {
                    console.log(response)
                    setMsgNotification('Usuário cadastrado com sucesso!')
                    props.exportSetRefreshListData(true) // Envia o novo estado para RegisterUser, que por sua vez, envia para o GetUser.
                    
                    setTimeout(() => {
                        props.exportSetRefreshListData(false) // Envia um novo estado para RegisterUser, para que, dessa forma, o componente seja desmontado
                    }, 5000)

                }).catch((response) => {
                    console.log('erro', response)
                })

        }

        count++


    }, [])



    return (
        <>
            {msgNotification}
        </>

    )

}

export default Post