import React , { Component } from 'react'

let a = 123
let b = 24

let msg = "This is test message"

let isAdmin = true 

class Ex8 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Data binding in class component</h1>
            </div>
        )
    }
}

export default Ex8