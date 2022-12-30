import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { MenuHeader } from '../../../styles/styled';
import { useEffect, useState } from 'react';
import {
    HeaderContainer,
    LogotipoStyle,
    SpaceHeader
} from '../../../styles/styled';

const Header = () => {

    const [token, setToken] = useState('')

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    function logout() {
        localStorage.setItem('token', 'lkna57pajk@kns369')
        window.location.reload()

    }



    return (
        <>
            <HeaderContainer>

                <LogotipoStyle>
                    <Link href='/'>
                        <h1>LOGOTIPO</h1>
                    </Link>
                </LogotipoStyle>

                <SpaceHeader />

                <MenuHeader>
                    <Link href='/'>
                        <h1>Início</h1>
                    </Link>
                    <Link href='/minha-conta'>
                        <h1>Minha Conta</h1>
                    </Link>
                    {token === 'ativado' && 
                        <Button onClick={() => logout()}>Sair</Button>

                    }

                </MenuHeader>

            </HeaderContainer>
        </>
    )
}

export default Header