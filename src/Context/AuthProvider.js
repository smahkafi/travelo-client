import React, { createContext } from 'react';
import useFirebase from './../hooks/useFirebase';
import useOffer from './../hooks/useOffers';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const event = useOffer();
    const data = {
        allContext,
        event
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;