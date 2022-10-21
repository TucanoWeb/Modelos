import { Route, Routes } from "react-router-dom";
import { Home, Login, Feed } from '../pages/index'

const RoutesLink = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/feed" element={<Feed />} />
            </Routes>
        </>
    )
}

export default RoutesLink


