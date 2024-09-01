import React, { Component } from 'react'
import Display from './Display'
import KeyPad from './KeyPad'

class Calculator extends Component {
        constructor(props) {
            super(props)
           this.state = {
             inp : '',
             out: ''
           }
        // method binding
        this.read = this.read.bind(this)
        }

        read(val) {
            console.log(`btn =`, val)
           if(val === "C") {
                // clearing input
                this.setState({
                    inp: ''
                })

           } else if (val === "CE") {
            // clearing input & output
            this.setState({
                inp: '',
                out: ''
            })

           } else if (val === "B") {
            // back space
             let res = this.state.inp.slice(0,-1)
             this.setState({
                inp: res
             })

           } else if (val === "=") {
                // equals
             let res = eval(this.state.inp)
                this.setState({
                    out: res
                })

           } else if (val === "exp") {
                let res = Math.exp(this.state.inp)
                    if(!res) {
                        this.setState({
                            out: "Invalid"
                        }) 
                    } else {
                        this.setState({
                            out: res
                        })
                    }
           } else if (val === "cbrt") {
                let res = Math.cbrt(this.state.inp)
                if(!res) {
                    this.setState({
                        out: "Invalid"
                    }) 
                } else {
                    this.setState({
                        out: res
                    })
                }
           } else if (val === "sqrt") {
                let res = Math.sqrt(this.state.inp)
                if(!res) {
                    this.setState({
                        out: "Invalid"
                    }) 
                } else {
                    this.setState({
                        out: res
                    })
                }
           }
           else {
            this.setState({
                inp: this.state.inp + val
            })
           }
        }

        render() {
            return (
                <div className="cal-container">
                     <Display inp={this.state.inp} out={this.state.out} />
                     <KeyPad read={this.read} />
                </div>
            )
        }
}

export default Calculator