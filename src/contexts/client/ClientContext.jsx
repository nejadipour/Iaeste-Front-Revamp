import React, {createContext, useContext} from 'react';
import {useProvideClient} from './ClientContextProvider.jsx';

const ClientContext = createContext();

export function ClientProvider(props) {
    const {children} = props;
    const client = useProvideClient();

    return (
        <ClientContext.Provider value={client}>
            <>
                {children}
            </>

        </ClientContext.Provider>
    )
}

export const useClient = () => {
    return useContext(ClientContext);
}
