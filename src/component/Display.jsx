import React, { Component } from 'react'

class Display extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="display">
                <div className="input"> { this.props.inp !== "" ? this.props.inp : "0" } </div>
                <div className="output"> { this.props.out !== "" ? this.props.out : "0" } </div>
            </div>
        )
    }
}

export default Display