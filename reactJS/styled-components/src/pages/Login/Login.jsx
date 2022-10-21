import { Button, Header, Input } from "../../components"

import { MdEmail, MdLock } from 'react-icons/md'

import {
    Column,
    Container,
    CreateAccount,
    ForgotPassword,
    Row,
    Wrapper,
    SubTitleLogin,
    Title,
    TitleLogin
} from './loginStyle'

import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()

    function handleClickSignIn() {

        navigate('/feed')


    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas pempresas mais desejadas.
                    </Title>

                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change...</SubTitleLogin>
                        <form>
                            <Input placeholder='email' leftIcon={<MdEmail />} />
                            <Input placeholder='senha' type='password' leftIcon={<MdLock />} />
                            <Button title='Entrar' variant='secondary' onClick={handleClickSignIn} />
                        </form>
                    </Wrapper>
                    <Row>
                        <ForgotPassword> Esqueci minha senha</ForgotPassword>
                        <CreateAccount> Criar Conta</CreateAccount>
                    </Row>
                </Column>
            </Container>

        </>
    )
}

export default Login