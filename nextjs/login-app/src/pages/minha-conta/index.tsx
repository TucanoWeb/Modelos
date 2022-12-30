import Login from "../../components/Login/Login"
import { useEffect, useState } from 'react';
import { IMinhaConta } from './type';
import { ContainerBody } from '../../../styles/styled';

const MinhaConta = () => {

    const [token, setToken] = useState('')

    useEffect(() => {

        setToken(localStorage.getItem('token'))

    }, [])


    return (
        <>
            {token !== 'ativado' ?
                (
                    <Login />
                )
                :
                (
                    <ContainerBody>
                        <h1>Minha conta</h1>

                    </ContainerBody>
                )


            }
        </>
    )
}

export default MinhaConta