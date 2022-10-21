import { Post } from '../Resources/index.js'
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'

const RegisterUser = (props) => {

    // Estados do formulário
    const { register, handleSubmit, reset, formState, formState:{isSubmitSuccessful} } = useForm();

    const [submitTrigger, setSubmitTrigger] = useState(false) //Estado responsável pela renderização do componente
    const [valueForm, setValueForm] = useState({}) //Atribui o objeto criado na submissão do formulário


    function onSubmit(data) {
        setSubmitTrigger(true) //Renderiza o componente
        setValueForm(data) //Atribui o objeto criado pelo formulário no ato da submissão
    }

// Reseta os campos do formulário após a submissão ter ocorrido com sucesso.
useEffect(() => {
    //Quando submetido, tanto name quanto email são resetados
    if (formState.isSubmitSuccessful) {
        reset({ name: '', email: '' });
        
      }
}, [formState, reset])


    return (
        <>
            <h1>Insira os dados abaixo:</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register('name', { required: true })} placeholder='Nome' />
                <input {...register('email', { required: true })} placeholder='Seu email' />

                <input type='submit' />

            </form>
            {submitTrigger && (
                
                <Post 
                valorValueForm={valueForm} //Envia o objeto que foi criado na submissão de forma para Post, que pelo axios, fará a requisição junto ao servidor de api
                exportSetSubmitTrigger={setSubmitTrigger} //Aqui  é enviado o estado de submitTrigger, para que o componente seja desmontado quando o post for finalizado através do axios
                exportSetRefreshListData={props.setRefreshListData} //Aqui simplesmente repassa o estado que foi recebido do componente pai GetUsers. Esse componente(RegisterUser) está sendo utilizando apenas como ponte para envio e recebimento do estado. Ele envia para Post, recebe de post e envia para GetUsers
                />
            )}

        </>

    )

}

export default RegisterUser