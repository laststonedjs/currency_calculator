import React from "react";
import ReactDOM from "react-dom";
// redux
import { Provider } from "react-redux";
import { store } from "./store/store";
// components
import { ExchangeRate } from "./components/ExchangeRate";
// styles
import "./style.css";

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRate />
  </Provider>,
  document.getElementById("root"));
