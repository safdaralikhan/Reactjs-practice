import { Button } from 'bootstrap'
import React, { Component,PureComponent } from 'react'

export default class Purecomponenet extends PureComponent {

    constructor(){
        super()
        {
            this.state={
                data:10
            }
        }
    }
    render() {
        console.warn(this.state)
        return (
            <div>
                <h1>Pure Component {this.state.data}</h1>
                <button onClick={()=>(this.setState({data:20}))}>update</button>
            </div>
        )
    }
}
