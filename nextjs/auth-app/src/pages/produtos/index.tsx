import { useSession } from "next-auth/react"

const Produtos = () => {

    // Aqui eu puxo a informação do hook useSession, que nada mais é que um provider. É possível visualizar o componente de provider envelopando toda a aplicação em _app.tsx
    const { data: session } = useSession()

    return (
        <>
            {session ? (
                <h1>Usuário logado</h1>
            )
                :
                (
                    <h1>Usuário não logado</h1>
                )}
        </>
    )
}

export default Produtos