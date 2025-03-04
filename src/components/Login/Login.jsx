import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";


const Login = () => {
    const {handleGoogleLogin,handleLogin} = useContext(authContext);
    const [error,setError] = useState("")
    const handleSubmit =(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        handleLogin(email,password)
        .then(res=>{ })
        .catch(err=>{
            setError(err.message)
        })
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
         <div>
         Email
             <input 
             type="text"
             placeholder="Type Here"
             className="input input-bordered input-error w-full max-w-xs"
             name="email" />
         </div>
         <div>
         Password
             <input 
             type="text"
             placeholder="Type Here"
             className="input input-bordered input-error w-full max-w-xs" 
             name="password"/>
         </div>
        <button type='submit'>Login</button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <button onClick={handleGoogleLogin}>Google Login</button>
        {/* <button onClick={handleLogout}>LogOut</button> */}
     </div>
    );
};

export default Login;




