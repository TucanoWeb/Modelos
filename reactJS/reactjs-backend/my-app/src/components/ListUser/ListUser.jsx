import { Fragment, useEffect, useState } from "react"
import { DeleteUser, UpdateUser } from "../Resources"
import { UpdateUserForm } from "../index"
import './listUser.css'

const ListUser = (props) => {

    //Recebe a lista de usuários como objeto de GetUsers
    const [listFinalUsers, setListFinalUsers] = useState(props.listUserData)

    //Responsável por renderizar o componente que deleta o usuário
    const [deleteUserAction, setDeleteUserAction] = useState(false)

    //Responsável por renderizar componente de atualização
    const [updateUserAction, setUdateUserAction] = useState(false)

    //Responsável por repassar o id do usuário para deletar
    const [idUser, setIdUser] = useState()
    const [nameUser, setNameUser] = useState()
    const [emailUser, setEmailUser] = useState()

    useEffect(() => {

        setListFinalUsers(props.listUserData) //Recebe o objeto de GetUser e atribui para listFinalUsers

        listFinalUsers.map(renderListUser) //Mapeia novamente o objeto recebido através da função renderListUser

    }, [props.listUserData])


    function deleteUser(value) {

        console.log('clicado para deletar no id ', value) //Imprime no console o texto e o id do respectivo usuário
        setDeleteUserAction(true) //Renderiza o componente DeleteUser
        setIdUser(value) //Atribui o id do usuário em IdUser e repassa para que seja encaminhado para o componente renderizado (DeleteUser)
    }

    function updateUser(value) {
        console.log('Clicado para atualizar no id ', value) //Imprime o objeto relacionado ao respectivo usuário
        setUdateUserAction(true) //Renderiza o componente responsável pelo formulário
        setIdUser(value['id']) //Alterado o estado de IdUser atribuindo o valor de id do objeto relacionado ao respectivo usuário
        setNameUser(value['name']) //Alterado o estado de NameUser atribuindo o valor de name do objeto relacionado ao respectivo usuário
        setEmailUser(value['email']) //Alterado o estado de EmailUser atribuindo o valor de email do objeto relacionado ao respectivo usuário
    }


    function renderListUser(index, key) {

        return (
            <Fragment key={key}>
                <tr>
                    <td>{key + 1}</td>
                    <td>{listFinalUsers[key]['name']}</td>
                    <td>{listFinalUsers[key]['email']}</td>
                    <td>{listFinalUsers[key]['createdAt']}</td>
                    <td>{listFinalUsers[key]['updatedAt']}</td>
                    <td><button onClick={() => { deleteUser(listFinalUsers[key]['id']) }}>Deletar</button>
                        <button onClick={() => { updateUser(listFinalUsers[key]) }}>Atualizar</button>
                    </td>
                </tr>
            </Fragment>
        )

    }

    return (

        <>

            <h1>Lista de usuários</h1>
            <div className="wrapper-listUser">
                <table className="wrapper-table">
                    <thead className="tableHead">
                        <tr className="tableTr">
                            <th className="indiceTable"></th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Criado em</th>
                            <th>Alterado em</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listFinalUsers.map(renderListUser)}
                    </tbody>
                </table>
            </div>

            {deleteUserAction && (
                <DeleteUser
                    valorIdUser={idUser}  //Repassa o id do usuário
                    exportSetDeleteUserAction={setDeleteUserAction} //Repassa para que esse componente possa ser desmontado posteriormente
                    exportSetRefreshListData={props.setRefreshListData} //Utilizado como ponte para poder alterar o estado em GetUser e realizar uma nova requisição via axios
                />
            )}

            {updateUserAction && (
                <UpdateUserForm
                    valorNomeUser={nameUser} //Repassa o valor de nameUser
                    valorEmailUser={emailUser} //Repasse email User
                    valorIdUserD={idUser} //Repassa idUser
                    exportSetUdateUserAction={setUdateUserAction} //Repassa para que esse componente possa ser desmontado posteriormente
                    exportSetRefreshListData={props.setRefreshListData} //Utilizado como ponte para poder alterar o estado em GetUser e realizar uma nova requisição via axios
                />
            )}

        </>
    )

}

export default ListUser