import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDeqexIvMTnFhT41hsAGw8CFzekvT4EJ4g",
  authDomain: "prd-3d57a.firebaseapp.com",
  databaseURL: "https://prd-3d57a-default-rtdb.firebaseio.com",
  projectId: "prd-3d57a",
  storageBucket: "prd-3d57a.appspot.com",
  messagingSenderId: "739063183686",
  appId: "1:739063183686:web:e0877eaa5bc3637fd10d47",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
