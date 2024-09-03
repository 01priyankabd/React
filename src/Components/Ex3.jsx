import React from "react";

const Ex3 = (props) => {
    return(
        <div>
            <h2>React Const Arrow functiona Component</h2>
            <h4>x = {props.title}</h4>
            <h4>y = {props.x}</h4>
            <h4>y = {props.y}</h4>
            <h4>isView = {props.isView ? "true" : "false"} </h4>
            <hr />

            <div>
            {
                props.colors.map((item,index) => {
                    return(
                        <p key={index}>{item}</p>
                    )
                })
            }
        </div>
        </div>
    )
}
Ex3.defaultProps = {
    title: "Welcome to react",
    x: 13,
    y: 24,
    isView: false,
    colors: ["red","green","blue"],
    user:{
        id:2,
        name: "john",
        address:{
            city: "bengalore",
            zip: 560010
        }
    }
}

export default Ex3