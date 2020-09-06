"use strict";

import * as React from "react";
import * as ReactDOM from "react-dom";
import DashboardApp from "../components/DashboardApp";
import { Provider } from "react-redux";
import createReducer from "../reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(createReducer(), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <DashboardApp />
  </Provider>,
  document.getElementById("root")
);
