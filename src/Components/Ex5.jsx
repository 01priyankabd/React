import React, {Component} from "react";
import Row from "../ElementComponents/Row";

class Ex5 extends Component{
    constructor(props){
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    name: "john",
                    email: "john@gmail.com",
                    age: 24,
                    isPaid: false
                },
                {
                    id:2,
                    name:  "Tom",
                    email: "Tom@gmail.com",
                    age: 23,
                    isPaid: false
                },
                {
                    id: 3,
                    name: "Sam",
                    email: "sam@gmail.com",
                    age: 25,
                    isPaid: true
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <h2>Class Component</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Pay Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((item,index) => {
                                return(
                                    <Row key ={index} {...item}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Ex5