import React, {useState} from 'react'
import "./p6.css"

function P6() {
    const [qnty,setQnty] = useState(1)

    const incHandler = function() {
        setQnty(qnty+1)
    }
    const decHandler = function() {
        if(qnty <= 1) {
            setQnty(1)
        } else {
            setQnty(qnty-1)
        }
    }
  return (
    <div>
        <h1>Quantity</h1>
        <div className="box">
            <span onClick={decHandler} className="btn dec">-</span>
             <span className="qnty"> { qnty } </span>
            <span onClick={() => incHandler()} className="btn inc">+</span>
        </div>
    </div>
  )
}

export default P6