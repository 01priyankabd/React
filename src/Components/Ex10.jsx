import React from "react";
import { Item } from "../TypedComponents/Item";

//conditional rendering
const Ex10 = (props) => {
    return(
        <div>
            <h1>Packing List</h1>
            <ul>
                <Item name="Spice" isPacked={true}/>
                <Item name="Mirchi" isPacked={false}/>
                <Item name="Apple" isPacked={true}/>
                <Item name="Orange" isPacked={false}/>
            </ul>
        </div>
    )
}

export default Ex10