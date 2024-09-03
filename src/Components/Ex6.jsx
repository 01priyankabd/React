import React from "react";
import InputBox from "../ElementComponents/InputBox";

export default function Ex6(props){
    return(
        <div>
            <form action="">
                <div>
                    <label htmlFor="name">name</label>
                    <InputBox type="text" hint="Enter your name"/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <InputBox type="number" hint="Enter your age"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <InputBox type="password" hint="Enter your password"/>
                </div>
            </form>
        </div>
    )
}