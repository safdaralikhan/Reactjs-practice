import React, { Component } from 'react'
import reactDom from 'react-dom'

export default class Reactportal extends Component {
    render() {
       return reactDom.createPortal(

        <h1>portal components</h1>,
        document.getElementById("other-root")
       )
    }
}
