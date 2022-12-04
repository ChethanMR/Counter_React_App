import { useState } from "react"
import"./counter.css"
export default function Counter(){
    
    const [count,setCount]=useState(0);
    // let count=0;
    const handleIncrement=()=>{
        setCount(count+1)
        // count+=1;
        // console.log(count)
    }
    const handleDecrement=()=>{
        setCount(count-1)
        // count-=1;
        // console.log(count)
    }
    const handleReset=()=>{
        setCount(0)
    }

    return (
        <div>
            <h1>First counter</h1>
            <h1>{count}</h1>
            <button onClick={handleIncrement}><b>Increment (+)</b></button>
            <button onClick={handleReset}><b>Reset</b></button>
            <button onClick={handleDecrement}><b>Decrement (-)</b></button>
            
        </div>
    )
}