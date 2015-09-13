"use strict";

import React from "react";
import { combineReducers, compose, createStore } from "redux";
import { Provider } from "react-redux";

import { devTools } from "redux-devtools";
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from "redux-devtools/lib/react";

import * as reducers from "./reducers";

const finalCreateStore = compose(
  devTools()
)(createStore);

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

if (module.hot) {
  module.hot.accept("./reducers", () =>
    store.replaceReducer(combineReducers(require("./reducers")))
  );
}

if (process.env.NODE_ENV === "development") {
  var a11y = require("react-a11y");
  a11y(React);
}

function render() {
  var App = require("./components/App");
  React.render(
    <div>
        <Provider store={store}>
          {() => <App />}
        </Provider>
        <DebugPanel bottom right top>
          <DevTools monitor={LogMonitor} store={store}/>
        </DebugPanel>
      </div>
  , document.getElementById("root"));
}

// Polyfill Intl until Apple gets their shit together
if ( !window.hasOwnProperty("Intl") ) {
  require.ensure(["intl", "intl/locale-data/jsonp/en.js"], (require) => {
    require("intl");
    require("intl/locale-data/jsonp/en.js");
    render();
  });
} else {
  render();
}
