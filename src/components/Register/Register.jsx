import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const {handleRegister,manageProfile} = useContext(authContext);
    const handleSubmit =(e)=>{
        e.preventDefault()
        const name =e.target.name.value
        const photoURL =e.target.photoURL.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name,photoURL,email,password);
        handleRegister(email,password)
        .then(res=>{
            manageProfile(name,email)
        })
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
            <div>
            Name
                <input 
                type="text"
                placeholder="Type Here"
                className="input input-bordered input-error w-full max-w-xs"
                name="name" />
            </div>
            <div>
            PhotoURL
                <input 
                type="text"
                placeholder="Type Here"
                className="input input-bordered input-error w-full max-w-xs"
                name="photoURL" />
            </div>
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
           <button type='submit'>Register</button>
           </form>
        </div>
    );
};

export default Register;




