import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

/* import reportWebVitals from "./reportWebVitals"; */

import { fetchUsers } from "./features/users/usersSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const dispatch = useDispatch*
store.dispatch(fetchUsers());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
/* reportWebVitals(); */
