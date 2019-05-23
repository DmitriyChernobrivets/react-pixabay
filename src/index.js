import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./store/reducers/root";
import mySaga from "./store/actions/saga";
import "./index.css";

const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// then run the saga
sagaMiddleware.run(mySaga);

// render the application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
