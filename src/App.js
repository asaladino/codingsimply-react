import React, {Component} from 'react';
import {Route} from 'react-router';
import routes from "./constants/routes";
import {BrowserRouter} from "react-router-dom";

import Home from "./containers/Home";
import Post from "./containers/Post";
import Posts from "./containers/Posts";
import Pages from "./containers/Pages";

class App extends Component {
    render() {
        console.log(`${routes.HOME}/*`);
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Route exact path={routes.HOME} component={Home}/>
                    <Route exact path={`${routes.POST}/:slug`} component={props => <Post {...props}/>}/>
                    <Route exact path={`${routes.POST}/`} component={Posts}/>
                    <Route exact path={`${routes.HOME}:slug/`} component={props => <Pages {...props}/>}/>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
