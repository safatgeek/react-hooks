import React, { useContext, useReducer } from "react";
import ComponentA from "./components/ComponentA";
import Counter from "./components/Counter";
import DataFetching from "./components/DataFetching";
import IndividualDataFetching from "./components/IndividualDataFetching";
import UseEffectTesting from "./components/UseEffectTesting";
import UseStateArr from "./components/UseStateArr";
import UseStateObject from "./components/UseStateObject";
import UseReducer from "./components/UseReducer";
import UseReducerObject from "./components/UseReducerObject";
import ComponentOne from "./components/ComponentOne";
import ComponentThree from "./components/ComponentThree";
import DataFetchingUseReducer from "./components/DataFetchingUseReducer";

export const UserContext = React.createContext();

export const CountContext = React.createContext();

// const initialstate = 0;

// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;

//     case "decrement":
//       return state - 1;

//     case "reset":
//       return initialstate;

//     default:
//       return state;
//   }
// };

function App() {
//   const [count, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
      {/* <Counter/> */}
      {/* <UseStateObject /> */}
      {/* <UseStateArr /> */}
      {/* <UseEffectTesting /> */}
      {/* <DataFetching /> */}
      {/* <IndividualDataFetching/> */}
      {/* <UserContext.Provider value={"Tanjim"}>
        <ComponentA />
      </UserContext.Provider> */}
      {/* <UseReducer /> */}
      {/* <UseReducerObject /> */}
      {/* <CountContext.Provider
        value={{ counter: count, countDispatch: dispatch }}
      >
        Count: {count}
        <ComponentOne />
        <ComponentThree />
      </CountContext.Provider> */}

      <DataFetchingUseReducer />
    </div>
  );
}

export default App;
