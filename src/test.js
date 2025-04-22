import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('count update:${count}')

        return()=>{
            console.log('count is here: useEffect: ${count} ')
        }
    },[count]) 
    // count dependence

    return(
        <div>
            <h1>Counter:{count}</h1>
<button onClick={()=>setCount(count+1)}>Increment</button>
<button onClick={()=>setCount(count-1)}>Decrement</button>  
        </div>
    )
}
export default Counter    