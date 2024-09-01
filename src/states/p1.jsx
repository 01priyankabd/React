import React, { useState } from 'react'

// state is a internal variablea of component (private)
// state is property of component
// to create a state variable in functional components - hooks (use prefix)
// every state handler method - have prefix set

function P1(props) {
  // const [state,handler_method] = useState(initial_value)

  const [x,setX] = useState(10)
  const [user,setUser] = useState("John Henry")
  const [isAdmin,setIsAdmin] = useState(true)

  const [colors,setColors] = useState(["red", "green", "blue"])

  const [course,setCourse] = useState({
        title: "MERN",
        duration: "3month"
  })
    return (
        <div>
            <h1>States in Functional Component</h1>
            <h2> num = { x } </h2>
            <h2> { user } </h2>
            <h2> { isAdmin ? "say true" : "say false"} </h2>
            <hr />

            <div>
                {
                    colors.map((item,index) => {
                        return (
                            <p key={index}>
                                { item }
                            </p>
                        )
                    })
                }
            </div>

            <hr />

            <div>
                <h3> { course.title } </h3>
                <h3> { course.duration } </h3>
            </div>
        </div>
    )
}

export default P1