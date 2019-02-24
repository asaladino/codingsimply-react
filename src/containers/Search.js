import React, {Component} from 'react';
import {connect} from 'react-redux';
import {site as siteAction} from "../actions/site";
import {menus as menuAction} from "../actions/menu";

class Search extends Component {
    componentDidMount() {
        const {site, menus, dispatch/*, match*/} = this.props;
        if (!site.hasLoaded()) {
            siteAction.get(dispatch);
        }
        if (!menus.hasLoaded()) {
            menuAction.getMenu(dispatch, 'primary');
        }
    }

    render() {
        // const {site, menus} = this.props;
        return (
            <div className="row">
                <div className="large-8 large-push-2 columns">
                    <main className="site-main">
                        <h2>Search</h2>
                    </main>
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        site: state.site,
        menus: state.menus,
    };
})(Search);