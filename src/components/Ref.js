import React, { Component } from 'react'

export default class Ref extends Component {
    constructor(){
        super()
        this.userRef=React.createRef()
    }

    editval(){
// console.warn(this.userRef)
// this.userRef.current.focus()
this.userRef.current.value="10000"


    }
    render() {
        return (
            <div>

               <h1>Ref In React </h1> 
               <input ref={this.userRef} type="text" name="user"/>
               <button onClick={()=>this.editval()} >Click Me</button>
            </div>
        )
    }
}
