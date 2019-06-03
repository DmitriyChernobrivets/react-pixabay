import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./store/reducers/root";
import thunk from "redux-thunk";
import "./index.css";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
