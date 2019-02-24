import {posts as postsAction} from "../actions/posts";
import React, {Component} from "react";
import {connect} from "react-redux";
import postscribe from "postscribe";
import DateTime from "../components/DateTime";
import Loading from "../components/Loading";

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
            document.querySelectorAll('#root script').forEach(tag => {
                const place = document.createElement("div");
                tag.after(tag, place);
                postscribe(place, tag.outerHTML);
            });
        }
    }

    render() {
        const {posts} = this.props;

        let content = <div className='text-center'><Loading/></div>;
        if (posts.hasPostLoaded() && posts.post !== null) {
            content = (
                <div className='animated fadeIn' key={posts.post.id}>
                    <h2>{posts.getTitle()}</h2>
                    <DateTime time={posts.getDate()}/>
                    <hr/>
                    <div dangerouslySetInnerHTML={{__html: posts.getContent()}}/>
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