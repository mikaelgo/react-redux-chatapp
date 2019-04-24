import React from "react";
import ReactDOM from "react-dom";
import "./components/scss/main.scss"
import App from "./components/App";
import { Provider } from "react-redux";
import {store} from "./components/StoreManager"

ReactDOM.render(

  //Wrapping the App component in react redux compnent Provider that allows us to use redux inside the app.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

module.hot.accept();
