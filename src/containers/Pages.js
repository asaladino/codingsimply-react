import React, {Component} from "react";
import {connect} from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import {site as siteAction} from "../actions/site";
import {menus as menuAction} from "../actions/menu";
import {pages as pagesAction} from "../actions/pages";
import moment from "./Post";

class Pages extends Component {
    componentDidMount() {
        const {site, menus, pages, match, dispatch} = this.props;
        if (!site.hasLoaded()) {
            siteAction.get(dispatch);
        }
        if (!pages.hasLoaded()) {
            const {slug} = match.params;
            console.log(slug);
            pagesAction.getPage(dispatch, slug);
        }
        if (!menus.hasLoaded()) {
            menuAction.getMenu(dispatch, 'primary');
        }
    }

    render() {
        const {site, menus, pages} = this.props;
        return (
            <DefaultLayout site={site} menus={menus}>
                <div className="row">
                    <div className="large-8 large-push-2 columns">
                        <div id="primary" className="content-area">
                            <main id="main" className="site-main">
                                <h2>{pages.getTitle()}</h2>
                                <hr/>
                                <div dangerouslySetInnerHTML={{__html: pages.getContent()}}/>
                            </main>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

export default connect(state => {
    return {
        site: state.site,
        menus: state.menus,
        pages: state.pages
    };
})(Pages);