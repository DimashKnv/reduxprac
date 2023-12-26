import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  function increment(step) {
    dispatch({type:'INCREMENT_COUNT',payload:step})
  }
  function decrement(step) {
    dispatch({type:'DECREMENT_COUNT',payload:step})
  }
  function reset() {
    dispatch({type:'RESET_COUNT'})
  }
  return (
    <>
      <h1>Counter {count}</h1>
      <button style={{ border: "solid 1px blue" }} onClick={()=>{increment(Number(prompt('Insert a number step')))}}>
        Increase
      </button>
      <button style={{ border: "solid 1px blue" }} onClick={()=>{decrement(Number(prompt('Insert a number step')))}}>
        Decrease
      </button>
      <button style={{ border: "solid 1px blue" }} onClick={reset}>
        Reset
      </button>
    </>
  );
}

export default App;
