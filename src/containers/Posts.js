import {posts as postsAction} from "../actions/posts";
import React, {Component} from "react";
import {connect} from "react-redux";
import PrimaryMenu from "../components/PrimaryMenu";
import {site as siteAction} from "../actions/site";
import {menus as menuAction} from "../actions/menu";


class Posts extends Component {

    componentDidMount() {
        const {site, menus, dispatch, match} = this.props;
        if (!site.hasLoaded()) {
            siteAction.get(dispatch);
        }
        if (!menus.hasLoaded()) {
            menuAction.getMenu(dispatch, 'primary');
        }
        if(match.params.slug) {
            postsAction.getPost(dispatch, match.params.slug);
        }
    };

    render() {
        const {site, menus, posts} = this.props;
        return (
            <div className="App">
                <header className="header">
                    <h1>{site.name}</h1>
                    <PrimaryMenu menus={menus}/>
                </header>
                    <div dangerouslySetInnerHTML={{__html: posts.getContent()}}/>
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
})(Posts);