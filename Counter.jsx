import { useState } from "react"
function Counter(){
    const [count,setCount]=useState(0)
    function inc(){
        setCount(preCount=>preCount+1)
        setCount(preCount=>preCount+1)
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={inc}>Increment</button>
        </div>
    )
}
export default Counter