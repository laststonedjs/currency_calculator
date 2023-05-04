import React from "react";
import ReactDOM from "react-dom";
// redux
import { Provider } from "react-redux";
import { store } from "./store/store";
import { getInitialRates } from "./store/rates";
// components
import { ExchangeRate } from "./components/ExchangeRate";
// styles
import "./style.css";

// kick start AJAX call for exchange rates
store.dispatch(getInitialRates);

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRate />
  </Provider>,
  document.getElementById("root"));
