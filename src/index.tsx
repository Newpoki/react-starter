import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import "dayjs/locale/fr";

import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { store } from "store";
import { firebaseConfig } from "./config";

/** On défini la langue à français pour dayjs
 * et on ajoute le plugin pour calculer des distances de dates */
dayjs.locale("fr");
dayjs.extend(relativeTime);

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
