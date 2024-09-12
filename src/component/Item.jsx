import React, { Component } from 'react'
import { FcClock } from "react-icons/fc";
import { ImUsers } from "react-icons/im";
import { SiLevelsdotfyi } from "react-icons/si";

export default class Item extends Component {
    render() {
        return (
            <div className='card'>
                <div className="image">
                     <img src={this.props?.image} alt={"no pic found"}  />
                     <span className='mealType'>
                        { this.props.mealType }
                     </span>
                </div>
                 <div className="content">
                    {/* <img src={this.props.image ? this.props.image : ""} /> */}
                    <p className="name"> { this.props.name } </p>

                    <div className="desc">
                        <p>
                            <strong className='cooktime'>
                                <span>
                                    <FcClock/>
                                    { this.props.cookTimeMinutes } min
                                </span>
                            </strong>
                            <strong className='servings'>
                                <span>
                                    <ImUsers/>
                                    { this.props.servings } persons
                                </span>
                            </strong>
                            <strong className='difficulty'>
                                <span>
                                    <SiLevelsdotfyi/>
                                    { this.props.difficulty }
                                </span>
                            </strong>
                        </p>

                    </div>
                 </div>
            </div>
        )
    }
}