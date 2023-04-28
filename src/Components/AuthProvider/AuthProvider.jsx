import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../../Firebase.config';



export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const user = {displayName: 'yeasin bhuiyan'}


    



    const loginAccount=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const createAccount=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    useEffect(()=>{
        
    })

    const authInfo={
        user,
        createAccount,
        loginAccount

    }
    
    return (
      <AuthContext.Provider value={authInfo}>
        
        {children}

      </AuthContext.Provider>
    );
};

export default AuthProvider;