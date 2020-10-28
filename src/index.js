import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButFirst } from "./components/ButFirst.js"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ButFirst />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)