import React, {Component} from 'react';
import {Link} from "react-router-dom";
import DateTime from "./DateTime";

class PostsList extends Component {

    render() {
        const {posts} = this.props;
        return posts.posts.map((post) =>
            <div className="row" key={posts.getId(post)}>
                <div className="large-12 columns post-entry">
                    <h2><Link to={posts.getUrl(post)}>{posts.getTitle(post)}</Link></h2>
                    <DateTime time={posts.getDate(post)}/>
                    <p dangerouslySetInnerHTML={{__html: posts.getExcept(post)}}/>
                </div>
                <hr/>
            </div>
        );
    }
}

export default PostsList;