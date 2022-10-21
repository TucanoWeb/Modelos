import PropTypes from 'prop-types'


const PrintInputValue = (props) => {

    const {valueValueInput} = props

    return (
<>
<h1> Valor Recebido: {valueValueInput} </h1>
</>

)
    }

PrintInputValue.propTypes = {

    valueValueInput: PropTypes.string

}

export default PrintInputValue