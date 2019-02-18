import React, {Component} from 'react';
import {Route} from 'react-router';
import routes from "./constants/routes";
import {BrowserRouter} from "react-router-dom";

import Home from "./containers/Home";
import Posts from "./containers/Posts";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Route exact path={routes.HOME} component={Home}/>
                    <Route exact path={`${routes.POST}/:slug`}
                           component={props => <Posts {...props}/>}/>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
