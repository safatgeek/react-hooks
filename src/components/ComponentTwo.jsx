import React, { useContext } from 'react'
import { CountContext } from '../App'

const ComponentTwo = () => {
    
    const counter = useContext(CountContext)

  return (
    <div>ComponentTwo
        Count: {counter.counter}
        <button onClick={() => counter.countDispatch("increment")}>Increment</button>
        <button onClick={() => counter.countDispatch("decrement")}>Decrement</button>
        <button onClick={() => counter.countDispatch("reset")}>Reset</button>
    </div>
  )
}

export default ComponentTwo