import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./store/Reducers";
import App from "./components/App";
import { rootSaga } from "./store/Sagas";

const createSaga = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(createSaga));

createSaga.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
