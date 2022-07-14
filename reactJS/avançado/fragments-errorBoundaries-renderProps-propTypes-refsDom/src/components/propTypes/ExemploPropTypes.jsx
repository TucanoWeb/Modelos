import PropTypes from 'prop-types'

// Utilizando o PropTypes, é possível definir quais os valores que o componente deve receber, diminuindo a margem de erro no desenvolvimento. Não é necessário chamar todos os itens na renderização, caso não queira. Via props já pega tudo que for enviado.

const ExemploPropTypes = (props) => {


    return (
        <div>

            <div>Verifica Quantidade: {props.numbers}</div>
            <div>Verifica Array: {props.array}</div>
            <div>Verifica object nome: {props.objectItem.nome}</div>
            <div>Verifica object idade: {props.objectItem.idade}</div>
            <div>
                <button onClick={props.funcao}> Verifica Função</button>

            </div>
            <div>Verifica string: {props.stringItem}</div>

            {props.booleanItem ? (

                <div>Verifica item booleano: True</div>
            )
                :
                (
                    <div>Verifica item booleano: False</div>
                )
            }


        </div>

    )


}

// Define valor padrão para os itens. Ou seja, é como se fosse um useState. Ele define um valor padrão para os elementos, caso não sejam repassados via props.

ExemploPropTypes.defaultProps = {

    numbers: 1,
    stringItem: 'Palavra'

}


ExemploPropTypes.propTypes = {

    array: PropTypes.array.isRequired,
    funcao: PropTypes.func.isRequired,
    numbers: PropTypes.number,
    objectItem: PropTypes.object,
    booleanItem: PropTypes.bool.isRequired,
    stringItem: PropTypes.string

}

export default ExemploPropTypes