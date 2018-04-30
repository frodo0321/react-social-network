import React, { Component } from 'react';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import "./Auth.css";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.showRegister = this.showRegister.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event) {
        var target = event.target;
        this.setState({[target.name]: target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        axios.get("http://ipinfo.io")
            .then((response) => {
                console.log("RESPONSE", response);
            })
    }

    showRegister(event) {
        console.log("SHOW REGISTER");
        return this.props.showRegister(event);
    }

    render() {
        return (
            <div className="Login">
                <h2>Login</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input placeholder="Username" name="username" type="text" />
                    </div>
                    <div>
                        <input placeholder="Password" name="password" type="password" />
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
