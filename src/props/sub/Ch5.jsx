import React from 'react'
import ColorComp from './Color'
import UserItem from './UserItem'

function Ch5(props) {
    return (
        <div>
            <h3>Array</h3>
            <div>
                { 
                    props.color.map((item,index) => {
                        return (
                            <ColorComp key={index} name={item} />
                        )
                    })
                }
            </div>
            <hr />
            <div>
                {
                    props.user.map((item,index) => {
                        return (
                            <UserItem key={index} name={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Ch5