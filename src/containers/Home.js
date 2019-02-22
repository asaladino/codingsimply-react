import {Component} from "react";
import {connect} from "react-redux";
import {site as siteAction} from '../actions/site';
import {posts as postsAction} from '../actions/posts';
import {menus as menuAction} from '../actions/menu';
import {projects as projectsAction} from '../actions/projects';
import React from "react";
import PostsList from "../components/PostsList";
import DefaultLayout from "../components/DefaultLayout";
import ProjectSlideshow from "../components/ProjectSlideshow";

class Home extends Component {
    componentDidMount() {
        const {site, menus, posts, dispatch, projects} = this.props;
        if (!site.hasLoaded()) {
            siteAction.get(dispatch);
        }
        if (!posts.hasLoaded()) {
            postsAction.getPosts(dispatch);
        }
        if (!menus.hasLoaded()) {
            menuAction.getMenu(dispatch, 'primary');
        }
        if (!projects.hasLoaded()) {
            projectsAction.getProjects(dispatch);
        }
    }

    render() {
        const {site, menus, posts, projects} = this.props;
        return (
            <DefaultLayout site={site} menus={menus}>
                <div className="row slideshow-wrapper">
                    <div className='shadow-offset'>
                        <ProjectSlideshow projects={projects.getPromoted()}/>
                    </div>
                </div>
                <div className="row">
                    <div className="large-8 large-push-2 columns">
                        <main className="site-main">
                            <PostsList posts={posts}/>
                        </main>
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
        posts: state.posts,
        projects: state.projects
    };
})(Home);