import * as React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import { CssBaseline } from "@mui/material";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar></Navbar>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
