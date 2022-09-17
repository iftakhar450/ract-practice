
import { createContext, useContext, useState } from "react"

export type CounterContextType = {
    count: number;
    increaseCount: () => void;
    decreaseCount: () => void;
};
const defaultState = {
    count: 0,
    increaseCount: () => { },
    decreaseCount: () => { }

};



const CounterContext = createContext<CounterContextType>(defaultState);
export const useCounter = () => useContext(CounterContext) as CounterContextType;

const CounterContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [count, setCount] = useState<number>(defaultState.count)
    const increaseCount = () => {
        setCount(count + 1)
    }
    const decreaseCount = () => {
        setCount(count - 1)
    }

    return (
        <CounterContext.Provider value={{ count, increaseCount, decreaseCount }}>
            {children}
        </CounterContext.Provider>
    )

}


export default CounterContextProvider;





