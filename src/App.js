import React, { Component } from "react";
import "./App.css"
import ReactDOM from 'react-dom';
import Counter from "./component/Counter";

class App extends Component{
  constructor(props){
    super(props)
  }

  //mount component
  mountHandler(){
    ReactDOM.render(<React.StrictMode>
      <Counter/>
    </React.StrictMode>, document.getElementById('renderHere'))
  }

  //un mount component
  unMountHandler(){
    ReactDOM.unmountComponentAtNode(document.getElementById("renderHere"))
    // root.unmount()
  }

  render(){
    return(
      <div className= "container">
        <div className="title">
          <h1>React Lifecycle</h1>
        </div>

        <div className="btn-group">
          <button onClick={this.mountHandler} className="btn success">Mount</button>
          <button onClick={this.unMountHandler} className="btn danger">UnMount</button>
        </div>

        <section id="renderHere"></section>
      </div>
    )
  }
}

export default App