import React, { Component } from 'react'
import "../../src/custom.css"

export default class Styleinreact extends Component {
    render() {
        return (
            <div>
               <h1 className="header">STYLE IN REACT GLOBALY</h1> 
               <h1 style={{color:"red"}}>STYLE IN REACT INLINE</h1> 

               

            </div>
        )
    }
}
