import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store/store.js";

import { Provider } from "react-redux";
import RTKapp from "./RTKapp.jsx";
import { rtk_store } from "./rtk_store/store.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={rtk_store}>
      {/* <App /> */}
      <RTKapp/>
    </Provider>
  </React.StrictMode>
);
