import React, { useReducer, useEffect, act } from "react";
import axios from "axios";

let initialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Data_Success":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "error":
      return {
        loading: false,
        error: "Somthing Went Wrong",
        post: {},
      };
    default:
      return state;
  }
};
function DataFetchingTwo() {
  let [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "Data_Success", payload: res.data });
        dispatch(res.data);
      })
      .catch((error) => {
        dispatch({ type: "error" });
      });
  },[]);
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;
