
// counters using custom hooks
//we created a counterHook file, in that useCounter gives the logic of the counter

import useCounter from "./counterHook"

const Counter2=()=>{
    const counterapp1=useCounter();
    const counterapp2=useCounter();
    const counterapp3=useCounter();
    return(
        <div>
            <div>
            <h1>Counter 1</h1>
            <h1>{counterapp1.value}</h1>
            <button onClick={counterapp1.increment}>+</button>
            <button onClick={counterapp1.reset}>Reset</button>
            <button onClick={counterapp1.decrement}>-</button>

            </div>

            <div>
            <h1>Counter 2</h1>
            <h1>{counterapp2.value}</h1>
            <button onClick={counterapp2.increment}>+</button>
            <button onClick={counterapp2.reset}>Reset</button>
            <button onClick={counterapp2.decrement}>-</button>

            </div>

            <div>
            <h1>Counter 3</h1>
            <h1>{counterapp3.value}</h1>
            <button onClick={counterapp3.increment}>+</button>
            <button onClick={counterapp3.reset}>Reset</button>
            <button onClick={counterapp3.decrement}>-</button>

            </div>

            
        </div>
    )
}
export default Counter2;