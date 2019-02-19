import {posts as postsAction} from "../actions/posts";
import React, {Component} from "react";
import {connect} from "react-redux";
import {site as siteAction} from "../actions/site";
import {menus as menuAction} from "../actions/menu";
import DefaultLayout from "../components/DefaultLayout";
import moment from "moment";
import postscribe from "postscribe";

class Post extends Component {

    componentDidMount() {
        const {site, menus, dispatch, match} = this.props;
        if (!site.hasLoaded()) {
            siteAction.get(dispatch);
        }
        if (!menus.hasLoaded()) {
            menuAction.getMenu(dispatch, 'primary');
        }
        const {slug} = match.params;
        if (slug) {
            postsAction.getPost(dispatch, slug);
        }
    };

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        const {site, menus, posts} = this.props;
        if (site.hasLoaded() && menus.hasLoaded() && posts.hasPostLoaded()) {
            document.querySelectorAll('#main script').forEach(tag => {
                const place = document.createElement("div");
                tag.after(tag, place);
                postscribe(place, tag.outerHTML);
            });
        }
    }

    render() {
        const {site, menus, posts} = this.props;

        if (!site.hasLoaded() || !menus.hasLoaded() || !posts.hasPostLoaded()) {
            return <div>Loading...</div>;
        }

        return (
            <DefaultLayout site={site} menus={menus}>
                <div className="row">
                    <div className="large-8 large-push-2 columns">
                        <div id="primary" className="content-area">
                            <main id="main" className="site-main">
                                <h2>{posts.getTitle()}</h2>
                                {posts.hasDate() ? (
                                    <time>
                                        {moment(posts.getDate()).format('dddd, MMMM Do YYYY')}
                                    </time>
                                ) : ''}
                                <hr/>
                                <div dangerouslySetInnerHTML={{__html: posts.getContent()}}/>
                            </main>
                        </div>
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
})(Post);