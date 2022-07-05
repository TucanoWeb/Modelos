import { useContext } from "react"
import { ThemeContext } from "../app/Theme"


const Form = () => {

    const updateToken = useContext(ThemeContext)

      const renderForm = (
        <form>
        <label>Nome: </label>
        <input type="text" />
        <label>Telefone: </label>
        <input type="text" />
        <label>Email: </label>
        <input type="text" />
    </form>

    )

    const awaitDataToken = 'Aguardando dados do token'


    return (
        <div>
            {updateToken.token ? renderForm : awaitDataToken}
        </div>
    )
}


export default Form