import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const UpdateUser = (props) => {

    const [message, setMessage] = useState(false)

    let count = 1;
    useEffect(() => {

        if (count <= 1) {

            axios.put(`${process.env.REACT_APP_BASEURL_REACTTESTE1}/update-user/${props.valorIdUser}`, {

                name: props.valorValueForm.name, //Pega o valor atribuído ao atributo name, do objeto criado pelo formulário

                email: props.valorValueForm.email //Pega o valor atribuído ao atributo email, do objeto criado pelo formulário
            })
                .then(() => {
                    setMessage('Usuário atualizado com sucesso!')
                    props.exportSetRefreshListData(true) // Envia uma mudança de estado para GetUser, de forma que, pelo useEffects, que monitora esse estado, seja feita uma nova requisição no servidor backend
                    setTimeout(() => {
                        // Volta o estado em Getuser para false  após 5 segundos, o preparando para uma nova atualização, quando é necessário alterar para true novamente
                        props.exportSetRefreshListData(false)

                        // Desmonta o componente UpdateUserForm, passando o valor false no estado do respectivo item, após 5 segundos.
                        props.exportSetUdateUserAction(false)

                    }, 5000)
                })
                .catch(() => {
                    // Aqui colocar o que é executado ao dar erro
                })
        }

        count++;

    }, [])


    return (

        <>
            {message}
        </>
    )

}

export default UpdateUser