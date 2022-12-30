import { ContainerBody } from "../../../styles/styled"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button, Input } from "@chakra-ui/react";
import { ILogin } from "./type";
import { useState } from 'react';
import VerifyUser from "../../pages/api/verityUser";

const schema = yup.object({
    email: yup.string().email('Email Inválido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
}).required();


const Login = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm<ILogin>({
        resolver: yupResolver(schema)
    });


    const [dataForm, setDataForm] = useState(false)
    

    const onSubmit = (data: any, e: any) => {
        e.target.reset()
        setDataForm(data)
        console.log(data)
    };

    return (
        <>
            <ContainerBody>
                <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input {...register("email")} />
                        <p>{errors.email?.message}</p>

                        <Input
                            {...register("password")}
                            type='password'
                        />
                        <p>{errors.password?.message}</p>

                        <Button type="submit">Entrar</Button>
                    </form>

                    {dataForm !== false &&
                        <>
                        <VerifyUser 
                        value={dataForm}
                        />
                        
                        </>
                    }
                </>
            </ContainerBody>
        </>
    )
}

export default Login