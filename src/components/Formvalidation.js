import React, { Component } from 'react'

export default class Formvalidation extends Component {
    constructor(){
        super()
        this.state={
name:"",
password:"",
nameError:"",
passwordError:"",

        }
    }
    validation()
    {
        if(!this.state.name.includes("@") && this.state.password.length<5)
    {
    this.setState({nameError:"invalid name", passwordError:"password should be 5 digits"})
    
    }
    else if(!this.state.name.includes("@") )
    {
    this.setState({nameError:"invalid name"})
    
    }
   else if( this.state.password.length<5)
    {
    this.setState( {
        passwordError:"password should be 8 digits"})
    
    }
    else{
        return true
    }
    }

    submit(){
        this.setState({nameError:"", passwordError:""})
    
    
        if(this.validation())
        {
            alert("form has been submited")
        }
    }
    render() {
        return (
            <div>
               <h1>FORM VALIDATION</h1> 
               <input 
               type="text" 
               name="name"
               onChange={(e)=>{this.setState({name:e.target.value})}}/>
               <p style={{color:"red",font:"12px"}} >{this.state.nameError}</p>
              
               <input 
               type="password" 
               name="password"
               onChange={(e)=>{this.setState({password:e.target.value})}}/>
               <p style={{color:"red",font:"12px"}}>{this.state.passwordError}</p>

               
               <button onClick={()=>this.submit()}>Submit</button>
            </div>
        )
    }
}
