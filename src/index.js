import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Classes from "./components/Classes";
import Hooks from "./components/Hooks";
import BaseLayout from "./components/layout/BaseLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducerTemplate";

const saveToLocalStorage = (reduxGlobalState) => {
  //serialize = convert js object to string
  try {
    const serializeState = JSON.stringify(reduxGlobalState);
    localStorage.setItem("state", serializeState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  const serializedState = localStorage.getItem("state");

  if (serializedState === null) {
    return undefined;
  } else {
    return JSON.parse(serializedState);
  }
};

const persistedState = loadFromLocalStorage();

let store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/hooks" component={Hooks} />
            <Route path="/classes" component={Classes} />
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
