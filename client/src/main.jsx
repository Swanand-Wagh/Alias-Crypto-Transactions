import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TransactionsProvider } from "./context/TransctionContext";

ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root")
);
