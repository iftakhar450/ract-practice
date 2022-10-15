import { createContext, useContext, useState } from "react"


export type LoginContextType = {
    isLoggedIn: boolean,
    login: () => void;
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

    const [loginState, setloginState] = useState<boolean>(defaultState.isLoggedIn);



    const login = (email: string, password: string) => {
        fetchLogin(email, password, (error: any) => {
            if (!error) {
                setloginState(true)
            } else {
                setloginState(false)
            }
        })
    }

    const logout = () => {
        setloginState(false)
    }

    return (
        <LoginContext.Provider value={{ loginState, login, logout }}>
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




