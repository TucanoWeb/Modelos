import { ButtonContainer } from "./styles"

import { IButton } from './types'

//Abaixo, em parâmetros, estou fazendo uma desestruturação. Ao invés de colocar props, coloco, entre chaves, diretamente os itens, para não ficar muito verboso o código.
//Abaixo também, no parâmetro desestruturado variant, se nada for passado, ele recebe o valor de primary.
const Button = ({ title, variant = 'primary', onClick }: IButton) => {
    return (
        <ButtonContainer variant={variant} onClick={onClick}>
            {title}
        </ButtonContainer>
    )
}

export default Button