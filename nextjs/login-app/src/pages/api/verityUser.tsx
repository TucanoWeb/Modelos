import { IVerifyUser } from './type';
import { UserDB, ErrorDB } from "../../../services/db"
import { useState } from 'react';


const VerifyUser: React.FC<IVerifyUser> = ({ value }) => {

    var errorMessage: string | null = ''

    function dataUserMap(index: number, key: number) {

        if (UserDB[key]['email'] === value.email && UserDB[key]['password'] === value.password) {
            localStorage.setItem('token', 'ativado')
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } else {

            if (UserDB[key + 1] === undefined) {
                errorMessage = ErrorDB[0]['message']
                setTimeout(() => {
                    window.location.reload()
                }, 2000)
            }

        }

    }

    return (
        <>
            {UserDB.map(dataUserMap as () => void)}
            {errorMessage.length > 0 ? 'Dados incorretos' : 'Verificando Dados'}

        </>
    )
}

export default VerifyUser