import React, { Component } from 'react';
//import axios from 'axios'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { UIRouter, UIRouterReact, servicesPlugin, hashLocationPlugin, UISref, UIView } from '@uirouter/react';

import Auth from "./components/auth/Auth";
import NewsFeed from "./components/news-feed/NewsFeed";


var states = [{
        name: "auth",
        url: "/auth",
        component: Auth
    }, {
        name: "news-feed",
        url: "/news-feed",
        component: NewsFeed
    }
];


const router = new UIRouterReact();
router.plugin(servicesPlugin);
router.plugin(hashLocationPlugin);
states.forEach(state => router.stateRegistry.register(state));
// Start the router
//router.start();


class App extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="App">
                <MuiThemeProvider>
                    <Auth />
                </MuiThemeProvider>
            </div>
       );
    }
}

export default App;

                    /*<UIRouter router={router}>

                    //    //<UISref to={"auth"}> 
                    //    //    <a>Joe Bloggs</a>
                    //    //</UISref>
                    //    //<UISref to={"news-feed"}> 
                    //    //    <a>Joe Bloggs</a>
                    //    //</UISref>

                    //    <div>
                    //        <UIView/>
                    //    </div>
                    //</UIRouter>*/
