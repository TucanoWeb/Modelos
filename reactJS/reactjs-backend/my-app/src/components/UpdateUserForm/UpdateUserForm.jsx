import { useState } from "react"
import { useForm } from "react-hook-form"
import { UpdateUser } from "../Resources"

const UpdateUserForm = (props) => {

    // Relacionado ao formulário
    const { register, handleSubmit } = useForm()

    //Responsável por chamar o componente UpdateUser quando o formulário é submetido
    const [submitTrigger, setSubmitTrigger] = useState(false)

    //Repassa o objeto criado ao submeter o formulário para o UpdateUser
    const [valueForm, setValueForm] = useState({})


    function onSubmit(data) {
        setSubmitTrigger(true) //Renderiza UpdateUser
        setValueForm(data) //Seta o objeto criado pelo formulário em valueForm
    }

    return (
        <>
            <h4>Insira os novos dados para o usuário {props.valorNomeUser}:</h4>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={props.valorNomeUser} {...register('name', { required: true })} placeholder='Novo Nome' />
                <input defaultValue={props.valorEmailUser} {...register('email', { required: true })} placeholder='Novo email' />

                <input type='submit' />

            </form>

            {submitTrigger && (
                <UpdateUser
                    valorIdUser={props.valorIdUserD} //Encaminha o valor de id do usuário para UpdateUser para que sirva como parâmetro na requisição de atualização do axios

                    valorValueForm={valueForm} //Envia o objeto que foi criado na submissão de forma para Post, que pelo axios, fará a requisição junto ao servidor de api
                    exportSetUdateUserAction={props.exportSetUdateUserAction} //Aqui  é enviado o estado de updateUserAction, para que o componente seja desmontado quando e enviado para UpdateUser, para que, depois de 5 segundos após a atualização ter sido feita, esse componente seja desmontado
                    exportSetRefreshListData={props.exportSetRefreshListData} //Aqui simplesmente repassa o estado que foi recebido do componente pai GetUsers. Esse componente(RegisterUser) está sendo utilizando apenas como ponte para envio e recebimento do estado. Ele envia para Post, recebe de post e envia para GetUsers

                />
            )}
        </>

    )

}

export default UpdateUserForm