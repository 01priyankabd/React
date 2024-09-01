import React, { useState } from 'react'

function P2(props) {
    const [num,setNum] = useState(0)


    const numHandler = function(val) {
        setNum(num + val)
    }


    return (
        <div>
            <h1>State in functional component</h1>
            <h2> num = { num } </h2>
            {/* <button onClick={numHandler}>Add + 10</button> */}
            <button onClick={() => numHandler(10)}>Add + 10</button>
            <button onClick={() => numHandler(50)}>Add + 50</button>
            <button onClick={() => numHandler(100)}>Add + 100</button>
            <button onClick={() => numHandler(150)}>Add + 150</button>
        </div>
    )
}

export default P2