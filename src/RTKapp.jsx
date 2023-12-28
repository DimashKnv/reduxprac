import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { increment,decrement,reset } from "./rtk_store/reducers";

function RTKapp() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.count);
//   const text = useSelector((state) => state.text.text);

  function incrementClick(step) {
    dispatch(increment(step));
  }

  function decrementClick(step) {
    dispatch(decrement(step));
  }
  function resetClick() {
    dispatch(reset());
  }

  function updateTitle(value) {
    dispatch(updateText(value));
  }

  return (
    <>
      <h1>
        Counter
        {count}
      </h1>
      <button
        style={{ border: "solid 1px blue" }}
        onClick={() => {
          incrementClick(Number(prompt("Insert a number step")));
        }}
      >
        Increase
      </button>
      <button
        style={{ border: "solid 1px blue" }}
        onClick={() => {
          decrementClick(Number(prompt("Insert a number step")));
        }}
      >
        Decrease
      </button>
      <button style={{ border: "solid 1px blue" }} onClick={()=>{resetClick()}}>
        Reset
      </button>
      <button
        style={{ border: "solid 1px blue" }}
        onClick={() => {
          updateTitle(prompt("Add new text for the title"));
        }}
      >
        Update Text
      </button>
    </>
  );
}

export default RTKapp;
