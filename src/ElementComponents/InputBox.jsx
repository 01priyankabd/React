import React from "react";

function InputBox(props){
    return(
        <input type={props.type} name={props.name} className={props.cls} id={props.id} required placeholder={props.hint} />
    )
}

export default InputBox