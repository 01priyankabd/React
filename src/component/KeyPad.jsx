import React, { Component } from 'react'
import Button from './Button'

class KeyPad extends Component {
    constructor(props) {
        super(props)
        this.keys = ["%","C","CE","B","exp","sqrt","cbrt","/","7","8","9","*","4", "5","6","-","1","2","3","+","0","00",".","="]
    }

    render() {
        return (
            <div className="btn-group">
                 {
                    this.keys.map((item,index) => {
                        return (
                            <Button key={index} title={item} readVal={this.props.read}  />
                        )
                    })
                 }
            </div>
        )
    }
}

export default KeyPad