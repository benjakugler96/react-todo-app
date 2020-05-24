import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Template from "./views/template";

export default function App() {
  return (
    <Provider store={store}>
      <Template />
    </Provider>
  );
}
