import React, {Component} from 'react';
import {connect} from 'react-redux';
import {search as searchAction} from "../actions/search";
import {search as actions} from "../constants/actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import Loading from "../components/Loading";

class Search extends Component {

    searchForTerm = () => {
        const {dispatch, search} = this.props;
        searchAction.get(dispatch, search.term);
    };

    searchForTermWithEnter = (e) => {
        if (e.key === 'Enter') {
            this.searchForTerm();
        }
    };

    setTerm = (e) => {
        const {dispatch} = this.props;
        dispatch({type: actions.SET_SEARCH_TERM, data: {term: e.target.value}});
    };

    render() {
        const {search} = this.props;
        let content = <div className='text-center'><Loading/></div>;
        if (search.hasLoaded()) {
            content = (<React.Fragment>
                {search.getResults().map((result, index) => {
                    return (
                        <div className={`row animated fadeIn post-entry`} style={{animationDelay: (index * 200) + 'ms'}}
                             key={result.getId()}>
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
            </React.Fragment>);
        }

        return (
            <div className="row">
                <div className="large-8 large-push-2 columns">
                    <main className="site-main">
                        <div className="input-group">
                                <span className="input-group-label">
                                    <label for="search-field">search for...</label>
                                </span>
                            <input className="input-group-field"
                                   id='search-field'
                                   type='text'
                                   value={search.term}
                                   onKeyPress={this.searchForTermWithEnter}
                                   onChange={this.setTerm}
                                   autoFocus/>
                            <div className="input-group-button">
                                <button className="button" onClick={this.searchForTerm}>
                                    <span className="show-for-sr">Start Search</span>
                                    <span aria-hidden="true">
                                            <FontAwesomeIcon icon="search"/>
                                        </span>
                                </button>
                            </div>
                        </div>
                        {content}
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