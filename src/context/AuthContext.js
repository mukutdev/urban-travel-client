import React, { createContext, useEffect, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthProvider = createContext()

const auth = getAuth(app)

const AuthContext = ({children}) => {

    const googleProvider = new GoogleAuthProvider()
    //user state
    const [user , setUser] = useState(null)
    
    //loading state
    const [loading , setLoading] = useState(true)

    // handleUserRegistration

    const handleUserRegistration = (email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email, password)
    }

    //update profile

    const updateUserProfile = (name , photo)=>{
        setLoading(true)
     return updateProfile(auth.currentUser , {
            displayName : name,
            photoURL : photo
   })

}

    //handle login

    const handleLoginUser = (email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email, password)
    }

    //logout user

    const handleLogoutUser =()=>{
        setLoading(true)
        return signOut()
    }

    // log in using google account

    const handleGoogleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }

    // store user state
    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
             setUser(currentUser)
             setLoading(false)
        })

        return ()=> unsubscribe ()


   } ,[])


const userInfo = {user , handleUserRegistration , updateUserProfile , handleLoginUser , handleLogoutUser , handleGoogleLogin , loading}

    return (
        <AuthProvider.Provider value={userInfo}>{children}</AuthProvider.Provider>
    );
};

export default AuthContext;