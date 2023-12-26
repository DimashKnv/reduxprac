import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

let initialState = { count: 0};

function counterReducer(state = initialState, action) {
  if (action.type == "INCREMENT_COUNT") {
    return { ...state, count: state.count + action.payload };
  }
  if (action.type == "DECREMENT_COUNT") {
    return { ...state, count: state.count - action.payload };
  }
  if (action.type == "RESET_COUNT") {
    return { ...state, count: 0 };
  }
  return state;
}

const store = createStore(counterReducer);
console.log(store.getState());








ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
