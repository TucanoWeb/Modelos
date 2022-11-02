import { Route, Routes } from "react-router-dom";
import { Home, Login, Feed, Cadastro } from '../pages/index'
import { AuthContext, AuthContextPropsProvider } from '../context/auth';
import { useState } from 'react';


const RoutesLink = () => {

    const [dataForm, setDataForm] = useState('')

    return (
        <>
            <AuthContextPropsProvider.Provider value={[dataForm, setDataForm]}>
                <AuthContext.Provider value={dataForm}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/feed" element={<Feed />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                    </Routes>
                </AuthContext.Provider>
            </AuthContextPropsProvider.Provider>
        </>
    )
}

export default RoutesLink


