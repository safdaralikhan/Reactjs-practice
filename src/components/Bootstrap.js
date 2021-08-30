
import React, { Component } from 'react'
import { Button,Modal } from 'react-bootstrap'

export default class Bootstrap extends Component {

    constructor()
    {
        super();
        this.state={
            show:false
             
        }
    
    }
   
    handleModal(){
        this.setState({show:!this.state.show})

    }
    render() {
        return (
            <div>
                
                <Button onClick={()=>this.handleModal()}> click me</Button>
                <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                    <Modal.Header closeButton >
Modal Heading
                    </Modal.Header>
                    <Modal.Body>
                        Hello EveryOne
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>this.handleModal()}>Close</Button>
                        <Button onClick={()=>this.handleModal()}>Save</Button>
                    </Modal.Footer>
                    
                </Modal>
              
            </div>
        )
    }
}
