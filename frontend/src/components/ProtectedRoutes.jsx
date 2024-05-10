import { Outlet, Navigate } from "react-router-dom";
import  secureLocalStorage  from  "react-secure-storage";

const ProtectedRoute = () => {
    const token = secureLocalStorage.getItem("Token")

    return(
        token ? <Outlet/> : <Navigate to="/" />
    )
}

export default ProtectedRoute