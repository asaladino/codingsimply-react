import {Component} from "react";
import {connect} from "react-redux";
import {site as siteAction} from '../actions/site';
import {posts as postsAction} from '../actions/posts';
import {menus as menuAction} from '../actions/menu';
import React from "react";
import PrimaryMenu from "../components/PrimaryMenu";
import PostsList from "../components/PostsList";
import DefaultHeader from "../components/DefaultHeader";

class Home extends Component {
    componentDidMount() {
        const {site, menus, posts, dispatch} = this.props;
        if (!site.hasLoaded()) {
            siteAction.get(dispatch);
        }
        if (!posts.hasLoaded()) {
            postsAction.getPosts(dispatch);
        }
        if (!menus.hasLoaded()) {
            menuAction.getMenu(dispatch, 'primary');
        }
    }

    render() {
        const {site, menus, posts} = this.props;
        return (
            <div id="page" className="site">
                <div className="off-canvas-wrapper">
                    <div className="off-canvas position-left" id="offCanvas" data-off-canvas>
                        <DefaultHeader menus={menus}/>
                    </div>
                    <div className="off-canvas-content" data-off-canvas-content>
                        <header id="masthead" className="site-header">
                            <div data-sticky-container>
                                <div className="top-bar" id="main-menu" data-sticky data-sticky-on="small"
                                     data-options="marginTop:0;"
                                     data-top-anchor="1" style={{width: "100%"}}>
                                    <div className="top-bar-left">
                                        <ul className="menu" data-dropdown-menu>
                                            <li className="show-for-small-only">
                                                <button data-toggle="offCanvas">
                                                    <i className="fa fa-bars">{' '}</i>
                                                </button>
                                            </li>
                                            <li className="menu-text">
                                                {site.name}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="top-bar-right">
                                        <PrimaryMenu menus={menus}/>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className="tiny reveal" id="search-modal" data-reveal
                             data-animation-in="slide-in-down fast"
                             data-animation-out="slide-out-up fast">
                            <label>Search
                                {/*<?= codingsimply_search_form_modify( '' ) ?>*/}
                            </label>
                            <button className="close-button" data-close aria-label="Close modal" type="button">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="row">
                            <div className="large-8 large-push-2 columns">
                                <div id="primary" className="content-area">
                                    <main id="main" className="site-main">
                                        <PostsList posts={posts}/>
                                    </main>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        site: state.site,
        menus: state.menus,
        posts: state.posts
    };
})(Home);