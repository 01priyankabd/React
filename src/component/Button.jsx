import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="btn" onClick={() => this.props.readVal(this.props.title)} >
                { this.props.title }
            </div>
        )
    }
}

export default Button