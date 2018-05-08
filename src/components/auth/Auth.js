import React, { Component } from 'react';
import Login from "./Login";
import Register from "./Register";


class Auth extends Component {


    constructor(props) {
        super(props);

        this.state = {showRegister: false};

        this.toggleRegister = this.toggleRegister.bind(this);
    }


    toggleRegister(event) {
        this.setState({showRegister: !this.state.showRegister});
    }

    render() {

        var formContainerStyle = {
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "10%"
        };
        return (
            <div className="Auth" >
                <div className="form-container" >
                    {this.state.showRegister ? <Register showLogin={this.toggleRegister}/> : <Login showRegister={this.toggleRegister}/>}
                </div>
            </div>
        );

    }

}

export default Auth;
