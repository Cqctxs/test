import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: "",
        completed: [],
        accessToken: ""
    });

    return (
        <AuthContext.Provider value={{ auth: auth, setAuth: setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;