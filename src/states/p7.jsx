import React, { Component } from "react"
import "./p6.css"

class P7 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qnty: 1
        }
    }

    incHandler() {
        this.setState({
            qnty: this.state.qnty + 1
        })
    }

    decHandler() {
       if(this.state.qnty <=1) {
        this.setState({
            qnty: 1
        })
       } else {
        this.setState({
            qnty: this.state.qnty - 1
        })
       }
    }

    render() {
        return (
            <div>
                 <h1>Quantity in class component </h1>
                <div className="box">
                    <span onClick={this.decHandler.bind(this)} className="btn dec">-</span>
                    <span className="qnty"> { this.state.qnty } </span>
                    <span onClick={() => this.incHandler()} className="btn inc">+</span>
                </div>
            </div>
        )
    }
}

export default P7