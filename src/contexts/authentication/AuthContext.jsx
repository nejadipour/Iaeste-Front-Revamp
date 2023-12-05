import React, {createContext, useContext} from 'react';
import {useProvideAuth} from './AuthContextProvider.jsx';

const AuthContext = createContext();

export function AuthProvider(props) {
    const {children} = props;
    const auth = useProvideAuth();

    return (
        <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}
