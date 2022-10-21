import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const GetUsers = ({ children }) => {

    const [listUser, setListUser] = useState('Nada para mostrar ainda.')
    const [refreshList, setRefreshList] = useState('aguardando para atualizar')

    let count = 1;
    useEffect(() => {

        if (count <= 1) {
            axios.get(`${process.env.REACT_APP_BASEURL_REACTTESTE1}/list-user`)
            .then((response) => {
                    console.log(response.data)
                    console.log('Fazendo outra requisição no axios')
                    
                    setListUser(response.data) //Envia um novo objeto para ListUser, em App.js. O useEffect em ListUser está programado para renderizar a lista novamente toda vez que recebe um objeto diferente.
                    
                }).catch((err) => {
                    console.log(err)
                })
        }
        count++;

    }, [refreshList])


    return (
        <>
            {listUser === 'Nada para mostrar ainda.' ? (

                <div>Nada para mostrar ainda</div>
            )
                :
                (
                    <div>{children(listUser, setRefreshList)}</div>

                )
            }
        </>
    )


}

export default GetUsers