import React, {Component} from 'react';
import {Route} from 'react-router';
import routes from "./constants/routes";
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faUserAlt,
    faSearch,
    faBlog,
    faHome,
    faBookmark,
    faBars,
    faSpinner,
    faFilter,
    faThLarge,
    faList, faCaretLeft, faCaretRight
} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import Home from "./containers/Home";
import Post from "./containers/Post";
import Posts from "./containers/Posts";
import Pages from "./containers/Pages";
import Projects from "./containers/Projects";
import Project from "./containers/Project";
import Search from "./containers/Search";
import {site as siteAction} from "./actions/site";
import {menus as menuAction} from "./actions/menu";
import DefaultLayout from "./components/DefaultLayout";
import Analytics from 'react-router-ga';
import {main} from "./constants/main";

class App extends Component {
    constructor(props) {
        super(props);
        library.add(
            faUserAlt, faSearch, faBlog, faHome, faBookmark, faBars, faSpinner,
            faGithub, faFilter, faThLarge, faList, faCaretLeft, faCaretRight
        );
    }

    componentDidMount() {
        const {site, menus, dispatch} = this.props;
        if (!site.hasLoaded()) {
            siteAction.get(dispatch);
        }
        if (!menus.hasLoaded()) {
            menuAction.getMenu(dispatch, 'primary');
        }
    }

    render() {
        const {site, menus} = this.props;
        return (
            <BrowserRouter>
                <Analytics id={main.isDev() ? `UA-111111111-1` : `UA-22975683-1`}>
                    <DefaultLayout site={site} menus={menus}>
                        <Route exact path={routes.HOME} component={Home}/>
                        <Route exact path={`${routes.POST}/:slug`} component={props => <Post {...props}/>}/>
                        <Route exact path={`${routes.HOME}(\\d+/\\d+/\\d+)/:slug`}
                               component={props => <Post {...props}/>}/>
                        <Route exact path={`${routes.POST}/`} component={Posts}/>
                        <Route exact path={`${routes.PROJECTS}/:slug`} component={props => <Project {...props}/>}/>
                        <Route exact path={`${routes.PROJECTS}/`} component={Projects}/>
                        <Route exact path={`${routes.HOME}page-:slug/`} component={props => <Pages {...props}/>}/>
                        <Route exact path={`${routes.SEARCH}`} component={props => <Search {...props}/>}/>
                        <Route exact path={`${routes.SEARCH}/:term`} component={props => <Search {...props}/>}/>
                    </DefaultLayout>
                </Analytics>
            </BrowserRouter>
        );
    }
}

export default connect(state => {
    return {
        site: state.site,
        menus: state.menus
    };
})(App);
