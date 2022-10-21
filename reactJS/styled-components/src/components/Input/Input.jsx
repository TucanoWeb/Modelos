
import {
    IconContainer,
    InputText,
    InputContainer
} from './styleInput'

const Input = ({ leftIcon, name, ...rest }) => {
    return (
        <InputContainer>
            {leftIcon &&
                <IconContainer>
                    {leftIcon}
                </IconContainer>
            }
            <InputText {...rest} />
        </InputContainer>
    )
}

export default Input