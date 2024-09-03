import React from "react";

export default function ButtonComp(props){
    return(
        <button className={props.btnCss} onClick={() => props.clickHandler(props.val)}>
            {props.title} {props.val}
        </button>
    )
}