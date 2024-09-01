import React from 'react'
import Ch2 from './sub/Ch2'

function Pr2(props) {
    return (
        <div>
             <h1>Props in functional component</h1>
                <h3>x = { props.x } and y = { props.y } </h3>
             <Ch2 a={props.x} b={props.y} />
        </div>
    )
}

export default Pr2