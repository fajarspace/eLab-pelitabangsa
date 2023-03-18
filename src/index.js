import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
// import "bulma/css/bulma.css";
import "./static/css/style.css"
// import { } from "../node_modules/stuffcss/dist/css/stuff.min.css";
// import { } from "https://unpkg.com/stuffcss@1.1.0/dist/js/stuff.min.js";
import axios from "axios";

axios.defaults.withCredentials = true;

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

