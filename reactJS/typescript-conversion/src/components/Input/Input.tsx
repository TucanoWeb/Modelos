
import {
    IconContainer,
    InputText,
    InputContainer,
    ErrorText
} from './styleInput'

import { Controller } from "react-hook-form";

import { IInput } from './types';

const Input = ({ leftIcon, name, errorMessage, control, ...rest }: IInput) => {




    return (
        <>
            <InputContainer>
                {leftIcon &&
                    <IconContainer>
                        {leftIcon}
                    </IconContainer>
                }
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <InputText {...field} {...rest} />}
                />
            </InputContainer>
            <ErrorText>{errorMessage}</ErrorText>
        </>
    )
}

export default Input