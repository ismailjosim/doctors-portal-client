import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../configs/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);


    // create user with email and password function





    const authInfo = {


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;