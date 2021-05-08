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

        netlifyIdentity.on('logout', () => {
            setUser(null);
            console.log('logout event');
        })
        // init netlify identity connection
        netlifyIdentity.init();
    }, []);

    const login = () => {
        netlifyIdentity.open()
    }

    const logout = () => {
        netlifyIdentity.logout();
    }

    const ctx = {
        user,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={ctx}>
            { children }
        </AuthContext.Provider>
    )
}