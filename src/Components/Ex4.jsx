import React, {useState} from "react";
import ButtonComp from "../ElementComponents/Button";

function Ex4(props){
    const [num,setNum] = useState(0)

    const addVal = (val) => {
        setNum(num + val)
    }
    return(
        <div>
            <h1>Custom Element Component</h1>
            <h1>num = {num}</h1>
            <ButtonComp title="Add" val={10} clickHandler={addVal} btnCss="btn success"/>
            <ButtonComp title="Add" val={50} clickHandler={addVal} btnCss = "btn danger"/>
            <ButtonComp title="Add" val={75} clickHandler={addVal} btnCss = "btn success"/>
        </div>
    )
}

export default Ex4