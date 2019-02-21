import {Component} from "react";
import {connect} from "react-redux";
import {site as siteAction} from '../actions/site';
import {posts as postsAction} from '../actions/posts';
import {menus as menuAction} from '../actions/menu';
import React from "react";
import PostsList from "../components/PostsList";
import DefaultLayout from "../components/DefaultLayout";

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
            <DefaultLayout site={site} menus={menus}>
                <div className="row">
                    <div className="large-8 large-push-2 columns">
                        <main className="site-main">
                            <h3>Home page needs a slider</h3>
                            <PostsList posts={posts}/>
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
        posts: state.posts
    };
})(Home);