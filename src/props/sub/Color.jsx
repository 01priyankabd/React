import React from 'react'

function ColorComp(props) {
    return (
        <h3 style={{"color": props.name }}>
             color name : { props.name } 
        </h3>
    )
}

export default ColorComp