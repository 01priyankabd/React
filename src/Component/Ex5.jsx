import React from 'react'

let x = 123
const y = 244

let str = "welcome to react"

let isAdmin = false

// { } -> expression tag

function Ex5(props) {
    return (
        <div>
            <h1>Data binding in components</h1>
            <h2> x = {x} </h2>
            <h2>y = { y } </h2>
            <h2> product = { x * y } </h2>
            <hr />
            <h3> { str }  </h3>

            <hr />

            <h2> Boolean = {isAdmin ? "True": "False"} </h2>
        </div>
    )
}

export default Ex5