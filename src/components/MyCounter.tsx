import { useContext } from "react"
import { useCounter } from "../contexts/CounterContext"

const MyCounter = () => {

    const { count, increaseCount, decreaseCount } = useCounter()
    return (
        <div>

            <h2> MyCounter : {count}</h2>
            <button className="btn-default" onClick={() => increaseCount()}>Add +</button>
            <button className="btn-default" onClick={() => decreaseCount()}>Minus -</button>

        </div>
    )
}
export default MyCounter
