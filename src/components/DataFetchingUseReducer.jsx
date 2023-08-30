import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetchingSuccess":
      return {
        loading: false,
        error: action.errorMessage,
        post: action.payload,
      };

    case "fetchingError":
      return {
        loading: false,
        error: action.errorMessage,
        post: action.payload,
      };

    default:
      return state;
  }
};

const DataFetchingUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) =>
        dispatch({
          type: "fetchingSuccess",
          payload: res.data,
          errorMessage: "",
        })
      )
      .catch((err) =>
        dispatch({
          type: "fetchingError",
          payload: {},
          errorMessage: err.message,
        })
      );
  }, []);

  return (
    <div>
      {state.loading && <h1>Loading !</h1>}
      {state.error && <h1>{state.error}</h1>}
      {state.post && (
        <div>
          <h1>{state.post.title} </h1> <p>{state.post.body}</p>
        </div>
      )}
    </div>
  );
};

export default DataFetchingUseReducer;
