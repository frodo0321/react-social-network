import React, { Component } from 'react';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import "./Auth.css";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.showLogin = this.showLogin.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        console.log("LOGON", event);
        event.preventDefault();
        //mockHttp.post()
        axios.get("http://ipinfo.io")
            .then((response) => {
                console.log("RESPONSE", response);
            })
    }

    showLogin(event) {
        return this.props.showLogin(event);
    }

    render() {
        return (
            <div className="Register">
                <form onSubmit={this.onSubmit}>
                    <h2>Register</h2>
                    <div>
                        <input placeholder="Username" name="username" type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div>
                        <input placeholder="Password" name="username" type="password" />
                    </div>
                    <div>
                        <input placeholder="Retype Password" name="username" type="password" />
                    </div>
                    <div>
                        <RaisedButton type="submit" label="Login" primary={true} />
                    </div>
                </form>
                <div className="show-login">Already have an account? 
                    <span className="fake-link" onClick={this.showLogin}>Login</span>
                </div>

            </div>
        )
    }
}


export default Register;
