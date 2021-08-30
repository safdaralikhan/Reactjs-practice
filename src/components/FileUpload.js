import React, { Component } from 'react'

export default class FileUpload extends Component {

    upload(e)
    {
        console.warn(e.target.files)
    }
    render() {
        return (
            <div>

               <h1>File Upload</h1>
               <input type="file" onChange={(e)=>this.upload(e)} name="img"/>
            </div>
        )
    }
}
