import { useRouter } from "next/router"

const ProdutoComId = () => {

    // utilização do hook useRouter
    const route = useRouter()

    // Desestruturação da id para que ele possa definir, ao acessar a url, qual será o valor de ID. Exemplo: localhost:300/produtoid/abc1
    const { id } = route.query

    return (
        <>
        <h1>Produto id {id}</h1>
        </>
    )
}

export default ProdutoComId