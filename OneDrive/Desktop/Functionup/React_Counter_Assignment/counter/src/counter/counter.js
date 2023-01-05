import { useState,useEffect } from "react";
import './counter.css'

const Counter =()=>{
    let [count,setCount]=useState(0);

    useEffect(()=>{
       console.log("useEffect triggered")
    },[])

    return(
        <div className="counter-component">
            <h3>Counter -- {count}</h3>
            <div className="butDiv">
            <button className="but" onClick={()=> setCount(count+1)} >Increment</button>
            <button className="but" onClick={()=> setCount(count-1)}>Decrement</button>
            <button className="but" onClick={()=>setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;