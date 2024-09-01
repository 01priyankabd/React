import React, { useState } from 'react'
import Ch5 from './sub/Ch5'

const users = ["john", "Mike", "Sam", "Andrew"]

const emp = [
    {
        id: 1,
        name: "Riya",
        designation: "frontend developer",
        bank: {
            title: "SBI",
            type: "SB"
        }
    },
    {
        id: 2,
        name: "zoya",
        designation: "backend developer",
        bank: {
            title: "Axis",
            type: "Salary"
        }
    }
]

function Pr5(props) {
    const [colors,setColors] = useState(["red", "green", "blue"])
   return (
    <div>
        <h1>Array as props</h1>
        <Ch5 color={colors} emp={emp} user={users} />
    </div>
   ) 
}

export default Pr5