import React from "react";
import './App.css'
import Calculator from "./component/Calculator";

function App(props){
  return(
    <div className="container">
      <div className="row">
        <div className="card">
          <h1 className="title">Calculator</h1>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <Calculator/>
        </div>
      </div>
    </div>
  )
}
export default App