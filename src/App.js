import React, {Component} from 'react';
import {Route} from 'react-router';
import routes from "./constants/routes";
import {BrowserRouter} from "react-router-dom";

import Home from "./containers/Home";
import Post from "./containers/Post";
import Posts from "./containers/Posts";
import Pages from "./containers/Pages";
import Projects from "./containers/Projects";
import Project from "./containers/Project";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Route exact path={routes.HOME} component={Home}/>
                    <Route exact path={`${routes.POST}/:slug`} component={props => <Post {...props}/>}/>
                    <Route exact path={`${routes.POST}/`} component={Posts}/>
                    <Route exact path={`${routes.PROJECTS}/:slug`} component={props => <Project {...props}/>}/>
                    <Route exact path={`${routes.PROJECTS}/`} component={Projects}/>
                    <Route exact path={`${routes.HOME}page-:slug/`} component={props => <Pages {...props}/>}/>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
