
import { useCounter } from "../contexts/CounterContext"

const ComponentB = () => {
    const { count } = useCounter();
    return (
        <div>
            <h2>Component B  : {count}</h2>
        </div>
    )
}


export default ComponentB