import { useEffect } from "react";
import { connect } from "react-redux";
import { posts as postsAction } from "../actions/posts";
import React from "react";
import PostsList from "../components/PostsList";
import Loading from "../components/Loading";
import PostsModel from "../models/PostsModel";

interface Props {
    posts: PostsModel;
    dispatch: any;
}

const Posts = (props: Props) => {
    const { posts, dispatch } = props;

    useEffect(() => {
        window.document.title = "Blog";
        if (!posts.hasLoaded()) {
            postsAction.getPosts(dispatch);
        }
    }, [posts, dispatch]);

    let content = <div className="text-center"><Loading /></div>

    if (posts.hasLoaded()) {
        content = <React.Fragment>
            <PostsList posts={posts} />
        </React.Fragment>
    }
    return <div className="row">
        <div className="large-8 large-push-2 columns">
            <main className="site-main">{content}</main>
        </div>
    </div>
}

export default connect((state: Props) => {
    return {
        posts: state.posts
    };
})(Posts);
