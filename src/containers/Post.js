import {posts as postsAction} from "../actions/posts";
import React, {Component} from "react";
import {connect} from "react-redux";
import DateTime from "../components/DateTime";
import Loading from "../components/Loading";
import {contentClickHandler} from "../components/helpers/HtmlRouteHelper";
import {loadInlineScripts, contentImageLoading} from "../components/helpers/InlineScriptHelper";
import Highlight from "react-highlight";
import FractureTitle from "../components/FractureTitle";
import NotFound from "./NotFound";

class Post extends Component {

    componentDidMount() {
        const {dispatch, match} = this.props;
        const {slug} = match.params;
        if (slug) {
            postsAction.getPost(dispatch, slug);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {posts} = this.props;
        if (posts.hasPostLoaded()) {
            loadInlineScripts();
            contentImageLoading();
        }
    }

    render() {
        const {posts, history} = this.props;

        if (posts.isPostNotFound()) {
            return <NotFound/>;
        }

        let content = <div className='text-center'><Loading/></div>;
        if (posts.hasPostLoaded()) {
            const {post} = posts;
            window.document.title = 'Blog | ' + post.getTitle();
            content = (
                <div className='animated fadeIn' key={post.getId()}>
                    <h2><FractureTitle split={'word'}>{post.getTitle()}</FractureTitle></h2>
                    <div style={{clear: 'both'}}>
                        <DateTime time={post.getDate()}/>
                        <div className="content" onClick={(e) => contentClickHandler(e, history)}>
                            <Highlight innerHTML={true}>
                                {post.getContent()}
                            </Highlight>
                        </div>
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