import React, { Component } from 'react';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import "./Auth.css";
const config = require("../../config");

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {form: {}};

        this.showLogin = this.showLogin.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        console.log("LOGON", event);
        event.preventDefault();
        //mockHttp.post()
        axios.post(config.apiUrl + "/signup", this.state.form)
            .then((response) => {
                console.log("RESPONSE", response);
            })
    }

    onChange(event) {
        var newFormValue = Object.assign({}, this.state.form, {
                [event.target.name]: event.target.value
            }
        );
        var newState = Object.assign({}, this.state, {form: newFormValue});
        this.setState(newState);
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
                        <input placeholder="Email" onChange={this.onChange} name="email" type="text" value={this.state.value} />
                    </div>
                    <div>
                        <input placeholder="Password" onChange={this.onChange} name="password" type="password" />
                    </div>
                    <div>
                        <input placeholder="Retype Password" onChange={this.onChange} name="repassword" type="password" />
                    </div>
                    <div>
                        <RaisedButton type="submit" label="Register" primary={true} />
                    </div>
                    <div>{JSON.stringify(this.state)}</div>
                </form>
                <div className="show-login">Already have an account? 
                    <span className="fake-link" onClick={this.showLogin}>Login</span>
                </div>

            </div>
        )
    }
}


export default Register;
