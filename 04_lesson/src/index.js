import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { fetchUsers } from "./features/users/usersSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
store.dispatch(fetchUsers());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);