import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const DeleteUser = (props) => {

    const [message, setMessage] = useState(false)

    let count = 1; // Utilizado para evitar re-render no useEffect
    useEffect(() => {

        if (count <= 1) {

            axios.delete(`${process.env.REACT_APP_BASEURL_REACTTESTE1}/delete-user/${props.valorIdUser}`)
                .then((response) => {
                    setMessage('Usuário Deletado com sucesso')
                    props.exportSetRefreshListData(true) //Altera o valor em GetUser para realizar uma nova requisição e atualizar o objeto em listUser
                    setTimeout(() => {
                        props.exportSetRefreshListData(false) //Altera o valor em GetUser para deixar em condições de uma nova requisição
                        props.exportSetDeleteUserAction(false) //Desmonta esse componente

                    }, 5000)
                })
                .catch(() => {
                    setMessage('Ação não realizada.')
                    setTimeout(() => {
                        props.exportSetDeleteUserAction(false) //Desmonta esse componente
                    }, 5000)
                })
        }

        count++;

    }, [])


    return (
        <>
            {message !== false && (
                <div>
                    {message}
                </div>
            )}
        </>

    )

}

export default DeleteUser