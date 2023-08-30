import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

const initialState = {
  counter1: 0,
  counter2: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, counter1: state.counter1 + 1 };

    case "decrement1":
      return { ...state, counter1: state.counter1 - 1 };

    case "increment2":
      return { ...state, counter2: state.counter2 + 5 };

    case "decrement2":
      return { ...state, counter2: state.counter2 - 5 };

    case "increment1Ten":
      return { ...state, counter1: state.counter1 + action.value };

    case "decrement1Ten":
      return { ...state, counter1: state.counter1 - action.value };

    case "reset":
      return initialState;
  }
};

const UseReducerObject = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count One: {count.counter1}</div>
      <div>Count Two: {count.counter2}</div>
      <button onClick={() => dispatch({ type: "increment1" })}>
        Increment 1
      </button>
      <button onClick={() => dispatch({ type: "decrement1" })}>
        Decrement 1
      </button>
      <button onClick={() => dispatch({ type: "increment2" })}>
        Increment 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2" })}>
        Decrement 2
      </button>
      <div>
        <button onClick={() => dispatch({ type: "increment1Ten", value: 10 })}>
          Increment1 10
        </button>
        <button onClick={() => dispatch({ type: "decrement1Ten", value: 10 })}>
          Decrement2 10
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset"})}>Reset</button>
    </div>
  );
};

export default UseReducerObject;
