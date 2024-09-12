import React, { Component } from "react";
import ReactDom from 'react-dom'

class Counter extends Component{
    constructor(props){
        super(props)
        //initial state
        console.log(`Initialize the state and props`)
        this.state = {
            view : false
        }
    }

    //increment handler
    inVal() {
        ReactDom.render(
            <React.StrictMode>
                <Counter num={this.props.num + 1}/>
            </React.StrictMode>,
            document.getElementById("renderHere")
        )
    }

     //mount methods
     componentDidMount(){
        console.log(`component did mount called`)
    }

    //static
    // static getDerivedStateFromProps(nP,nS){
    // }

    //deprecated
    componentWillReceiveProps(nP,nS){
        console.log(`component will receive props`)
        if(nP.num >= 10){
            this.setState({
                view:true
            })
        }
    }
    componentWillUpdate(nP,nS){
        console.log(`Component will update`)
    }

    // update state
    shouldComponentUpdate(nP,nS,nC){
        console.log(`should component update or not?`)
        console.log(`newProps =`,nP)
        console.log(`newState =`,nS)
        return true
    }

    componentDidUpdate(oP,oS){
        console.log(`component did update called`)
        console.log(`old props`,oP)
        console.log(`ols State`,oS)
    }

    //unmount methods
    componentWillUnmount(){
        console.log(`component unmounted successfully`)
    }

    render(){
        console.log(`component rendered`)
        return(
            <div className="container">
                <div className="title">
                    <h1>Counter</h1>
                </div>
                <h1>Number = { this.props.num }</h1>

                <div className="title">
                    {
                        this.state.view ? <h1>Welcome to React lifecycle</h1> :
                        <h1> Need more counts </h1>
                    }
                </div>

                <div className="title">
                    {
                        this.state.view ? null : <button className="btn success" onClick={this.inVal.bind(this)}>
                            Add + 1
                        </button>
                    }
                </div>
            </div>
        )
    }
}

//default props
Counter.defaultProps = {
    num : 0
}

export default Counter