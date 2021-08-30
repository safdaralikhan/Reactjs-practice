import React, { Component } from 'react';
import axios from 'axios';
// import swal from 'sweetalert';

export default class Jwttoken extends Component {
    constructor() {
        super(); {
            this.state = {
                username: null,
                password: null,
                // token:null,
                // login:false
            }
        }
    }
// componentDidMount(){
    
// }
login=()=> {
    var form = new FormData();
    form.append("username", this.state.username);
    form.append("password", this.state.password);
    axios({
        method: 'POST',
        url: `https://clearcosthealth.pythonanywhere.com/superadminlogin`,
        data: form
    })
        .then((response) => {
            var data = response.data;
            if (data.status == "true") {
                localStorage.setItem('token', data.token);
                localStorage.setItem('id', data.id);
                //   history.push("/Dashboard");
                console.log(data)
                alert("login Sucessfully")
            }
            else if (data.status !== "true") {
                // swal({
                //     title: "Opps",
                //     text: data.message,
                //     icon: "error",
                //     // timer: 2000,
                //     // button: false,
                // });
                alert("user name or password incorrect!");
            }
            // console.log(response.data);
        }, (error) => {
            // setLoader(false);
            // console.log(error);
            // swal({
            //     title: "Opps",
            //     text: error,
            //     icon: "error",
            //     // timer: 2000,
            //     // button: false,
            // });
            alert("catch")
        });
}
    render() {
        return (
            <div>

                <h1>JWT TOKEN</h1>
                <div>
                    <input type="text" onChange={(event) => { this.setState({ username: event.target.value }) }} /> <br /><br />
                    <input type="password" onChange={(event) => { this.setState({ password: event.target.value }) }} /><br /><br />
                    <button onClick={() => { this.login() }}>Login</button>

                </div>
            </div>
        )
    }
}
