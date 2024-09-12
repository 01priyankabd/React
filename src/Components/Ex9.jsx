import React from "react";

const Ex9 = (props) => {
    const url = "https://picsum.photos/id/352/400/400"

    return(
        <div>
            <h3>data binding</h3>
            <img src="https://picsum.photos/id/344/400/400" alt="" />

            <hr />

            <img src={url} alt="" />
        </div>
    )
}

export default Ex9