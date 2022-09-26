import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import reducer from "./redux/reducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(reducer);
root.render(
  <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
</Provider>
);

