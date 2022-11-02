import { useContext } from 'react';
import { AuthContextPropsProvider } from '../context/auth';

export const useAuth = () => {
    const context = useContext(AuthContextPropsProvider)

    if(!context) {
        throw Error('Não existe um contexto de autenticação')
    }

    return context

}