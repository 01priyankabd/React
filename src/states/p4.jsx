import React, { Component } from 'react'

class P4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 10,
            y: 20,
            title: "Welcome to string",
            user: {
                name: "john",
                email: "john@gmail.com",
                age: 22
            }
        }
    }


    render() {
        return (
            <div>
                <h1>States in class component</h1>
                <h3> x = { this.state.x} </h3>
                <h3> y = { this.state.y} </h3>
                <hr />
                <h3>product = { this.state.x * this.state.y} </h3>
                <h3> { this.state.title } </h3>
            </div>
        )
    }
}

export default P4