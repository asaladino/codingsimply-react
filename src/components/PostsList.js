import React, {Component} from 'react';
import {Link} from "react-router-dom";
import DateTime from "./DateTime";

class PostsList extends Component {

    render() {
        const {posts} = this.props;
        return posts.posts.map((post, index) =>
            <div className={`row animated fadeIn`} style={{animationDelay: (index * 200) + 'ms'}} key={posts.getId(post)}>
                <div className="large-12 columns post-entry">
                    <h3><Link to={posts.getUrl(post)}>{posts.getTitle(post)}</Link></h3>
                    <DateTime time={posts.getDate(post)}/>
                    <p dangerouslySetInnerHTML={{__html: posts.getExcept(post)}}/>
                </div>
            </div>
        );
    }
}

export default PostsList;