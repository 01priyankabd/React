import React from "react";

function Ex2(props){
    return(
        <div>
        <h1>Default Props in funtional Component</h1>
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

// default props -> support for functional default props will be from future latest version
Ex2.defaultProps = {
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

export default Ex2