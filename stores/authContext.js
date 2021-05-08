import { createContext, useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

export const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false
});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        netlifyIdentity.on('login', (user) => {
            setUser(user);
            netlifyIdentity.close();
            console.log('login event');
        });
        // init netlify identity connection
        netlifyIdentity.init();
    }, []);

    const login = () => {
        netlifyIdentity.open()
    }

    const ctx = {
        user,
        login
    }

    return (
        <AuthContext.Provider value={ctx}>
            { children }
        </AuthContext.Provider>
    )
}