import { createContext, useEffect, useState } from "react";
export const authContext = createContext();
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
const AuthProvider = ({ routes }) => {

    const googleProvider = new GoogleAuthProvider()

    const [user,setUser] = useState(null)
    const [loading,setLoading]=useState(true)

  const handleRegister = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
    
    
  }

  const handleLogin =(email,password)=>{
   return signInWithEmailAndPassword(auth, email, password)
  }
  const handleGoogleLogin =()=>{
   return signInWithPopup(auth, googleProvider)
  }

  const manageProfile =(name,email)=>{
   return updateProfile(auth.currentUser,{
        displayName:name,email:email
    })
  }
  const handleLogout =()=>{
    signOut(auth)
  }



  const authInfo ={
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogout,
    manageProfile,
    user,
    setUser,
    loading
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setUser(currentUser); // User logged in
        } else {
            setUser(null); // User logged out
        }
        setLoading(false)
    });

    // Cleanup function
    return () => unsubscribe();
}, []);




  return (
    <div>
      <authContext.Provider value={authInfo}>{routes}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;





