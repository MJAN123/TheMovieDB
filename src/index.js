import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./store/Sagas";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./store/Reducers";
import App from "./components/App";

const createSaga = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(createSaga))
);

createSaga.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
