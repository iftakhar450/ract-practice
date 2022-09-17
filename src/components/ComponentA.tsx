import { useCounter } from "../contexts/CounterContext"

const ComponentA = () => {
    const { increaseCount } = useCounter()
    return (
        <div>
            <h2>Component A</h2>
            <p>Increment from Component A</p>
            <button className="btn-default" onClick={() => increaseCount()}> + </button>
        </div>
    )
}

export default ComponentA
