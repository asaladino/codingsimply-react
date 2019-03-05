import React, {Component} from 'react';
import {connect} from 'react-redux';
import {site as siteAction} from "../actions/site";
import {menus as menuAction} from "../actions/menu";
import {search as searchAction} from "../actions/search";
import {search as actions} from "../constants/actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

class Search extends Component {

    componentDidMount() {
        const {site, menus, dispatch} = this.props;
        if (!site.hasLoaded()) {
            siteAction.get(dispatch);
        }
        if (!menus.hasLoaded()) {
            menuAction.getMenu(dispatch, 'primary');
        }
    }

    searchForTerm = () => {
        const {dispatch, search} = this.props;
        searchAction.get(dispatch, search.term);
    };

    searchForTermWithEnter = (e) => {
        if(e.key === 'Enter') {
            this.searchForTerm();
        }
    };

    setTerm = (e) => {
        const {dispatch} = this.props;
        dispatch({type: actions.SET_SEARCH_TERM, data: {term: e.target.value}});
    };

    render() {
        const {search} = this.props;
        return (
            <div className="row">
                <div className="large-8 large-push-2 columns">
                    <main className="site-main">
                        <div className="input-group">
                            <input className="input-group-field"
                                   type='text'
                                   placeholder='search...'
                                   value={search.term}
                                   onKeyPress={this.searchForTermWithEnter}
                                   onChange={this.setTerm}
                                   autoFocus/>
                            <div className="input-group-button">
                                <button className="button" onClick={this.searchForTerm}>
                                    <FontAwesomeIcon icon="search"/>
                                </button>
                            </div>
                        </div>
                        {search.getResults().map((result, index) => {
                            return (
                                <div className={`row animated fadeIn post-entry`} style={{animationDelay: (index * 200) + 'ms'}} key={result.getId()}>
                                    <div className="large-10 columns">
                                        <h3><Link to={result.getUrlLink()}>{result.getTitle()}</Link></h3>
                                    </div>
                                    <div className="large-2 columns">
                                        <span className="label secondary">{result.getType()}</span>
                                    </div>
                                    <div className="large-12 columns">
                                        <p>
                                            <Link to={result.getUrlLink()}>{result.getUrl()}</Link>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
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
        search: state.search
    };
})(Search);