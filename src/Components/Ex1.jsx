import React, { Component } from 'react'


class Ex1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>Default Props in Class Component</h3>
                <h3> x = { this.props.x } </h3>
                <h3> y = { this.props.y } </h3>
                <h3> title = { this.props.title } </h3>
                <h3> isView = { this.props.isView ? "true" : "false" } </h3>

                <hr />

                <ul>
                    {
                        this.props.colors.map((item,index) => {
                            return (
                                <li key={index}> { item } </li>
                            )
                        })
                    }
                </ul>
             <hr />

             <h3>Object</h3>

             <h3> id = { this.props.course.id } </h3>
             <h3> title = { this.props.course.title } </h3>
             <h3> duration = { this.props.course.duration } </h3>
            </div>
        )
    }
}

//  default props can be fined within the same component
Ex1.defaultProps = {
    x: 12,
    y: 20,
    title: "Welcome to string",
    isView: false,
    colors: ["red", "green", "blue"],
    course: {
        id: 1,
        title: "ReactJS",
        duration: "2 months",
        institute: {
            title: "Be-practical",
            location: "bengaluru"
        }
    }
}

// proptypes

export default Ex1