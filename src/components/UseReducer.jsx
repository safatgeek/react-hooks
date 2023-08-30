import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) =>{
    switch(action) {
        case "+":
            return state + 1
        case "-":
            return state - 1
        case "reset":
            return initialState
        default:
            return state
    }
}

const UseReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <div> Count: {count}</div>
        <button onClick={() => dispatch("+")}>Increment</button>
        <button onClick={() => dispatch("-")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  )
}

export default UseReducer