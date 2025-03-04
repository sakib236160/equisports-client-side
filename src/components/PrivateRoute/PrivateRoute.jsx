import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext);
    if(loading){
        return <h1>Loading.........</h1>
    }
    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;


