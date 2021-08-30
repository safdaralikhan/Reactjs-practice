import React, { Component, createRef } from 'react'
import Form from './Form'

// export default class Uncontrolcomponent extends Component {
//     constructor(){
//         super();
//         this.name=createRef();
//         this.password=createRef();
//     }
//     submitHandle(event)
//     {
// event.preventDefault();
// console.warn(this.name.current.value,this.password.current)
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Uncontrolled Component</h1>
//                 <form onSubmit={(event)=>{this.submitHandle(event)}}>
//                <input type="name" placeholder=" enter name" ref={this.name} /> <br/> <br/>
//                <input type="password" placeholder="enter password" ref={this.password} /> <br/> <br/>
//                <button type="submit">Submit</button>

//                </form>
//             </div>
//         )
//     }
// }



export default class Uncontrolcomponent extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            password:""
        }
    }

    submit(){
        console.warn(this.state)
    }
    render() {
        return (
            <div>
                <h1>control components</h1>
               <input type="text" placeholder="enter name" 
               onChange={(event)=>{this.setState({name:event.target.value})}} />  <br/> <br/>
               <input type="password" placeholder="enter password" 
               onChange={(event)=>{this.setState({password:event.target.value})}} />  <br/> <br/>
               <button onClick={()=>{this.submit()}}>Submit</button>
             
             

            </div>
        )
    }
}

