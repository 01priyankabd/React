import React, { Component } from 'react'
import Ch1 from './sub/Ch1'

/* 
    1. props are 
*/

class Pr1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>First Child</h1>
                <h3> x = { this.props.x } </h3>
                <h3> y = { this.props.y } </h3>
                <h3> product = { this.props.x * this.props.y } </h3>
                <Ch1 a={this.props.x} />
            </div>
        )
    }
}

export default Pr1