import React, { createContext, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthProvider = createContext()

const auth = getAuth(app)

const AuthContext = ({children}) => {

    //user state
    const [user , setUser] = useState(null)
    
    //loading state
    const [loading , setLoading] = useState(true)

    // handleUserRegistration

    const handleUserRegistration = (email , password)=>{
        return createUserWithEmailAndPassword(auth , email, password)
    }

    //update profile

    const updateUserProfile = (name , photo)=>{

     return updateProfile(auth.currentUser , {
            displayName : name,
            photoURL : photo
   })

}





const userInfo = {user , handleUserRegistration , updateUserProfile}

    return (
        <AuthProvider.Provider value={userInfo}>{children}</AuthProvider.Provider>
    );
};

export default AuthContext;