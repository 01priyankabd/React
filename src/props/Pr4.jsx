import React, { useState } from 'react'
import Ch4 from './sub/Ch4'

let user = {
    name: "john",
    email: "john@gmail.com"
}

function Pr4(props) {
    let [car,setCar] = useState({
        title: "Thar",
        company: "mahindra",
        year: 2024
    })

    return (
        <div>
            <h1>Object and array as props</h1>
            <Ch4 x={car} y={user} />
        </div>
    )
}

export default Pr4