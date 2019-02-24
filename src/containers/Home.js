import {Component} from "react";
import {connect} from "react-redux";
import {posts as postsAction} from '../actions/posts';
import {projects as projectsAction} from '../actions/projects';
import React from "react";
import PostsList from "../components/PostsList";
import ProjectSlideshow from "../components/ProjectSlideshow";
import Loading from "../components/Loading";

class Home extends Component {
    componentDidMount() {
        const {posts, dispatch, projects} = this.props;
        if (!posts.hasLoaded()) {
            postsAction.getPosts(dispatch);
        }
        if (!projects.hasLoaded()) {
            projectsAction.getProjects(dispatch);
        }
    }

    render() {
        const {posts, projects, site, menus} = this.props;
        if (!posts.hasLoaded() && !projects.hasLoaded() && !site.hasLoaded() && !menus.hasLoaded()) {
            return <div className='text-center'><Loading/></div>;
        }

        return (
            <React.Fragment>
                <div className="row slideshow-wrapper">
                    {projects.hasLoaded() ? (
                        <div className='shadow-offset animated slideInLeft'>
                            <ProjectSlideshow projects={projects.getPromoted()}/>
                        </div>
                    ) : ''}
                </div>
                <div className="row">
                    <div className="large-8 large-push-2 columns">
                        <main className="site-main">
                            <PostsList posts={posts}/>
                        </main>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(state => {
    return {
        site: state.site,
        menus: state.menus,
        posts: state.posts,
        projects: state.projects
    };
})(Home);