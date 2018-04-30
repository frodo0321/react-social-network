import React, { Component } from 'react';
//import axios from 'axios'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {showRegister: false};

        this.toggleRegister = this.toggleRegister.bind(this);
    }

    toggleRegister(event) {
        console.log("TOGGLE REGISTER");
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
            <div className="App">
                <MuiThemeProvider>
                    <div className="form-container" style={formContainerStyle}>
                        {this.state.showRegister ? <Register showLogin={this.toggleRegister}/> : <Login showRegister={this.toggleRegister}/>}
                    </div>
                </MuiThemeProvider>
            </div>
       );
    }
}

export default App;
