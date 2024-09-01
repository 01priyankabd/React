import React from 'react'


const Ex6 = (props) => {
  let a = 123
  let b = 24

  let msg = "This is test message"

  let isAdmin = true 

    return (
        <div>
            <h1>Data binding in arrow function component</h1>
            <h2> a = {a} </h2>
            <h2> b = {b} </h2>
            <hr />

            <h2> { msg } </h2>

            <hr />

            <h2> { isAdmin ? "Say True": "Say False"} </h2>
        </div>
    )
}

export default Ex6