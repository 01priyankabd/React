import React from 'react'

// array
let colors = ["red", "blue", "green", "black"]

// object array
let users = [
    {
        id: 1,
        name: "john",
        email: "john@gmail.com",
        age: 22
    },
    {
        id: 2,
        name: "Sam",
        email: "sam@gmail.com",
        age: 24
    },
    {
        id: 3,
        name: "Mike",
        email: "mike@gmail.com",
        age: 21
    }
]

// object
let  tech = {
    id: 1,
    title: "MERN",
    lang: ["Mongodb", "Express", "Node", "React"],
    isFullstack: true,
    getInfo: function() {
        return  "title of technology is "+ this.title
    }
}

function Ex9(props) {
    return (
        <div>
            <h1>Array in functional component </h1>

            <div>
                 {
                     colors.map(function(item,index){
                        return (
                            <h1 key={index}>
                                { item }
                            </h1>
                        )
                     })
                 }
            </div>

            <hr />

            <div>
                 {
                        users.map((item,index) => {
                            return (
                                <section key={index}>
                                     <h2> { item.id } { item.name } </h2>
                                     <h3> email = { item.email } </h3>
                                     <h3> age = { item.age } years </h3>
                                </section>
                            )
                        })
                 }
            </div>

            <hr />

            <h1>Object</h1>

            <div>
                 <h1> title = { tech.title } </h1>
                 <h1> title = { tech["title"] } </h1>
                 <h1> title = { tech.getInfo() } </h1>
            </div>
        </div>
    )
}

export default Ex9