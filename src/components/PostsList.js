import React, {Component} from 'react';
import {Link} from "react-router-dom";
import DateTime from "./DateTime";

class PostsList extends Component {

    render() {
        const {posts} = this.props;
        return posts.getPosts().map((post, index) =>
            <div className={`row animated fadeIn`} style={{animationDelay: (index * 200) + 'ms'}} key={post.getId()}>
                <div className="large-12 columns post-entry">
                    <h3><Link to={post.getUrl()}>{post.getTitle()}</Link></h3>
                    <DateTime time={post.getDate()}/>
                    <div dangerouslySetInnerHTML={{__html: post.getExcept()}}/>
                </div>
            </div>
        );
    }
}

export default PostsList;