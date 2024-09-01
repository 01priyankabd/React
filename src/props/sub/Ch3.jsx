import React from 'react'

function Ch3(props) {
    return (
        <div>
            <h3>Child 3</h3>
            <h1> num = { props.num } </h1>
            <button onClick={() => props.numHandler(10)} >Add + 10</button>
            <button onClick={() => props.numHandler(40)}>Add + 40</button>
            <button onClick={() => props.numHandler(60)}>Add + 60</button>
            <button onClick={() => props.numHandler(90)}>Add + 90</button>
        </div>
    )
}

export default Ch3