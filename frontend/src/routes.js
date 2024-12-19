
import { Navigate } from 'react-router-dom';


const token = localStorage.getItem('token')

export const ProtectedRoutes = (props) => {
    return token ? props.children : <Navigate to="/login" />
}

export const PublicRoutes = (props) => {
    return !token ? props.children : <Navigate to="/profile" />
}