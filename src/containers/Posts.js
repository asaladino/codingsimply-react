import {Component} from "react";
import {connect} from "react-redux";
import {posts as postsAction} from '../actions/posts';
import React from "react";
import PostsList from "../components/PostsList";
import Loading from "../components/Loading";

class Posts extends Component {
    componentDidMount() {
        const {posts, dispatch} = this.props;
        if (!posts.hasLoaded()) {
            postsAction.getPosts(dispatch);
        }
    }

    render() {
        const {posts} = this.props;
        let content = <div className='text-center'><Loading/></div>;
        if (posts.hasLoaded()) {
            content = (<React.Fragment>
                <PostsList posts={posts}/>
            </React.Fragment>);
        }

        return (
            <div className="row">
                <div className="large-8 large-push-2 columns">
                    <main className="site-main">
                        {content}
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