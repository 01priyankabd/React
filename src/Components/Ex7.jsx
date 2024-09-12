import React, { Component } from "react";
import PropTypes from 'prop-types'

class Ex7 extends Component{
    constructor(props){
        super(props);
        this.state = {
            num: 0
        }
    }

    render(){
        return(
            <div>
                <h1>Proptypes in class Component</h1>
                <h3>x = {this.props.x}</h3>
            </div>
        )
    }
}

Ex7.defaultProps = {
    x: 10,
    y: 20,
    title: "Welcome to string",
    isView: true,
    colors: ["red","green","blue"],
    user: {
        id: 1,
        name: "john",
        email: "john@gmail.com",
        age: 22,
        city: "Bengalore"
    },
    courses: [
        {
            id: 1,
            title: "MERN"
        },
        {
            id: 2,
            title: "Java"
        },
        {
            id: 3,
            title: "Python"
        }
    ]
}

Ex7.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    title: PropTypes.string,
    isView: PropTypes.bool,
    colors: PropTypes.array,
    user: PropTypes.object,
    courses: PropTypes.array
}

export default Ex7