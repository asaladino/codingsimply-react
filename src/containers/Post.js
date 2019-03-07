import {posts as postsAction} from "../actions/posts";
import React, {Component} from "react";
import {connect} from "react-redux";
import DateTime from "../components/DateTime";
import Loading from "../components/Loading";
import {contentClickHandler} from "../components/helpers/HtmlRouteHelper";
import {loadInlineScripts} from "../components/helpers/InlineScriptHelper";
import Highlight from "react-highlight";

class Post extends Component {

    componentDidMount() {
        const {dispatch, match} = this.props;
        const {slug} = match.params;
        if (slug) {
            postsAction.getPost(dispatch, slug);
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot): void {
        const {posts} = this.props;
        if (posts.hasPostLoaded()) {
            loadInlineScripts();
        }
    }

    render() {
        const {posts, history} = this.props;
        let content = <div className='text-center'><Loading/></div>;
        if (posts.hasPostLoaded() && posts.post !== null) {
            content = (
                <div className='animated fadeIn' key={posts.post.id}>
                    <h2>{posts.getTitle()}</h2>
                    <DateTime time={posts.getDate()}/>
                    <div className="content"  onClick={(e) => contentClickHandler(e, history)}>
                        <Highlight innerHTML={true}>
                            {posts.getContent()}
                        </Highlight>
                    </div>
                </div>
            );
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
})(Post);