import { createContext, useContext, useState } from "react"


export type LoginContextType = {
    isLoggedIn: boolean,
    login: (name: string, password: string) => void;
    logout: () => void;
};

const defaultState = {
    isLoggedIn: false,
    login: () => { },
    logout: () => { }
};



const LoginContext = createContext<LoginContextType>(defaultState);

export const useLogin = () => useContext(LoginContext) as LoginContextType;

const LoginContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(defaultState.isLoggedIn);
    
    const login = (email: string, password: string) => {
        fetchLogin(email, password, (error: any) => {
            if (!error) {
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
        })
    }
    const logout = () => {
        setIsLoggedIn(false)
    }
    const stateValues = {
        isLoggedIn,
        login,
        logout
    }

    return (
        <LoginContext.Provider value={stateValues}>
            {children}
        </LoginContext.Provider>
    )

}


/**
 * fake login api
 * @param email 
 * @param password 
 * @param callback 
 * @returns 
 */
const fetchLogin = (email: string, password: string, callback: any) =>
    setTimeout(() => {
        if (email === 'admin' && password === 'admin') {
            return callback(null);
        } else {
            return callback(new Error('Invalid email and password'));
        }
    }, 1000);



export default LoginContextProvider;




