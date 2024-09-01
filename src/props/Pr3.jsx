import React,  { useState }  from 'react'
import Ch3 from './sub/Ch3'

function Pr3(props) {
    // state
    const [num,setNum] = useState(0)

    const addVal = (val) => {
        setNum(num + val)
    }

    return (
        <div>
            <h1>Props</h1>

            <Ch3 num={num} numHandler={addVal}  />
        </div>
    )
}

export default Pr3