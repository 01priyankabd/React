import React, { Component } from 'react'


export default class Ch1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Grand Child</h1>
                <h3> a = {this.props.a } </h3>
            </div>
        )
    }
}