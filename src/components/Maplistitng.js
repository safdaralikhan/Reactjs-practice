import React, { Component } from 'react'

export default class Maplistitng extends Component {
    constructor(){
        super()
        this.state={
            list:[
               
                {name:"safdar", email:"saf@gmail.com",phone:"123"},
                {name:"osama",email:"osama@gmail.com",phone:"122"},
                {name:"shakeeb",email:"sha@gmail.com",phone:"133"}

            ]

        }
    }
    render() {
        return (
            <div>
                <h1>MAP LISTING</h1>
                {
                this.state.list.map((item)=>
                    
                    <div>
                        <span>Name: {item.name} Email: {item.email}  Phone: {item.phone}</span>
 {item.email}
                    </div>
                
                )
                }
            </div>
        )
    }
}
