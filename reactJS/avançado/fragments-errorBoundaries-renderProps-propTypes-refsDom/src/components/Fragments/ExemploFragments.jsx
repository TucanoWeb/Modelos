import { Fragment } from "react"

const ExemploFragments = (element, key) => {


    //Os fragmentos são utilizados para não quebrar a árvore do DOM, pois os elementos precisam estar encapsulados para funcionar, dentro de uma tag.


    const corpoTesteBoundary = {
        nome: 'abc'

    }


    const CabecalhoTabela = () => {

        {/** Nesse caso, foi necessário colocar um fragmento, pois se inserir uma div para encapsular, ele vai quebrar a estrutura DOM. Imagine uma div entrando no meio de uma tabela. */ }


        return (

            <>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Full Name</th>
                <th>Enrollment Date</th>
            </>



        )


    }





    const Column = () => {

        return (

            <table>
                <thead>

                    <tr>
                        <CabecalhoTabela />
                    </tr>


                </thead>
                <tbody>

                    <tr>
                        <td>ID</td>
                        <td>Primeiro Nome</td>
                        <td>Segundo Nome</td>
                        <td>Nome Completo</td>
                        <td>teste</td>
                    </tr>

                </tbody>
            </table>

        )
    }



    return (
        <>
        {/** Para simular um erro e verificar a mensagem amigável capturado por ErrorBoundary, retire o atributo nome do objeto abaixo. Lembrando que o ErrorBoundary pode envelopar qualquer componente, de forma que capture erros específicos e lance mensagens amigáveis aos usuários */}
            {corpoTesteBoundary.abc}
            <Column />
        </>


    )




}

export default ExemploFragments 