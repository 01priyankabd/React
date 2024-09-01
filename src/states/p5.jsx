import React, { Component } from 'react'

class P5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }

    numHandler(val) {
        this.setState({
            num: this.state.num + val
        })
    }

    render() {
        return (
            <div>
                <h1>State and State handler class component</h1>
                <h2> num = { this.state.num } </h2>

                <br /> <br />
                <button onClick={() => this.numHandler(10)}>Add +10</button>
                <button onClick={() => this.numHandler(50)}>Add +50</button>
                <button onClick={() => this.numHandler(100)}>Add +100</button>
            </div>
        )
    }
}

export default P5