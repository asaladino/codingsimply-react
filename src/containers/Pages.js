import React, {Component} from "react";
import {connect} from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import {site as siteAction} from "../actions/site";
import {menus as menuAction} from "../actions/menu";
import {pages as pagesAction} from "../actions/pages";

class Pages extends Component {
    componentDidMount() {
        const {site, menus, pages, match, dispatch} = this.props;
        if (!site.hasLoaded()) {
            siteAction.get(dispatch);
        }
        if (!pages.hasLoaded()) {
            const {slug} = match.params;
            pagesAction.getPage(dispatch, `page-${slug}`);
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
                        <main className="site-main">
                            <h2>{pages.getTitle()}</h2>
                            <hr/>
                            <img alt={pages.getFeaturedMediaAlt()} src={pages.getFeaturedMediaLarge()}/>
                            <div dangerouslySetInnerHTML={{__html: pages.getContent()}}/>
                        </main>
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