import {Component} from "react";
import {connect} from "react-redux";
import {posts as postsAction} from '../actions/posts';
import React from "react";
import PostsList from "../components/PostsList";

class Posts extends Component {
    componentDidMount() {
        const {posts, dispatch} = this.props;
        if (!posts.hasLoaded()) {
            postsAction.getPosts(dispatch);
        }
    }

    render() {
        const {posts} = this.props;
        return (
            <div className="row">
                <div className="large-8 large-push-2 columns">
                    <main className="site-main">
                        <h2>Blog</h2>
                        <PostsList posts={posts}/>
                    </main>
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        posts: state.posts
    };
})(Posts);