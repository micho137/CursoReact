import React from "react";
import ReactDOM from "react-dom/client";
//import { ComponentTest } from "./ComponentTest";
//import { FirstApp } from "./FirtsApp";
import { CounterApp } from "./CounterApp";
import './styles.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={4}/>
  </React.StrictMode>
);
