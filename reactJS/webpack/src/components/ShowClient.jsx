import React from "react";
import {hasCustomer} from '../containers/App'



const showCostumer = () => {

    if (!hasCustomer) return null //Se hasCustomer é false, retorna nulo. Assim, nada é renderizado

    return (
        <div>
            <h1>
                Nome do Cliente: Cliente NOME
            </h1>
        </div>
    )


}


export default showCostumer