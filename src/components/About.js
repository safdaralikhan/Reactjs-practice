import React, { Component } from 'react'

export default class About extends Component {

    constructor() {
        super()
        this.state = {
            
            zipcode: [],
            serviceName: []

        }
    }
    search() {

        // console.warn(key)
        fetch("https://api.clearpricing.health/landingpageData").then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                // console.log(resp.ZipCode)

                this.setState({ 'zipcode': resp.ZipCode })
                this.setState({  "serviceName" :resp.ServiceName })
               
                


                    
                





                // console.log(resp.ZipCode.['City'])


                // resp.map((e)=>(
                // //    console.log("ServiceName", e.ServiceName)
                // //    console.log( "ZipCode",e.ZipCode)
                // console.log(e)


                // ))
            })
        })
        // console.log("thisstatezipcodemap", this.state.zipcode.map((e) => (e.Zipcode)))
        // console.log("thisstateserviceNamemap", this.state.serviceName.map((e) => (e)))
        // setInterval(() => {
        //     // console.log("zipcode", this.zipcode)
        //     // console.log("serviceName", this.serviceName)

        // }, 1000);
    }
    render() {
        return (
            <div>
                <h1>SEARCH</h1>
                <input type="text" onChange={(event) => this.search(event.target.value)} />


                <table className="table">
                    <thead class="thead-dark">
                        <tr>

                            <th scope="col">ZipCode</th>
                            <th scope="col">city</th>
                            <th scope="col">serviceName</th>

                            

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.zipcode.map((e) => (
                            <tr>
                                <td> {e.Zipcode}</td>

                            <td> {e.City}</td>
                        


                            
                            </tr>)
                            
                             
                        )}


                    </tbody>
                </table>

                <table className="table">
                    <thead class="thead-dark">
                        <tr>

                            <th scope="col">ServiceName</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.serviceName.map((e) => (
                            <tr>
                               

                            <td>{e}</td>
                            </tr>)
                            
                             
                        )}


                    </tbody>
                </table>

            </div >
        )
    }
}
