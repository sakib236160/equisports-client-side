import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext);
    const location= useLocation();
    console.log("private Route", user)
    
    if(loading){
        return <h1>Loading.........</h1>
    }
    if (!user) {
        return <Navigate state={{ from: location.pathname}} to="/login" />;
    }

    return children;
};

export default PrivateRoute;


