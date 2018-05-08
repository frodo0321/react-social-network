import React, { Component } from 'react';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import "./Auth.css";
const config = require("../../config");

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {form: {}};

        this.showRegister = this.showRegister.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        axios.post(config.apiUrl + "/login", this.state.form)
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

    showRegister(event) {
        return this.props.showRegister(event);
    }

    render() {
        return (
            <div className="Login">
                <h2>Login</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input placeholder="Email" onChange={this.onChange} name="email" type="text" />
                    </div>
                    <div>
                        <input placeholder="Password" onChange={this.onChange} name="password" type="password" />
                    </div>
                    <div>
                        <RaisedButton type="submit" label="Login" primary={true} />
                    </div>
                </form>
                <div className="show-register">Don't have an account? 
                    <span className="fake-link" onClick={this.showRegister}>Sign up</span>
                </div>

            </div>
        )
    }
}


export default Login;
