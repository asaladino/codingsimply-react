import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { posts as postsAction } from '../actions/posts';
import { projects as projectsAction } from '../actions/projects';
import Loading from '../components/Loading';
import FractureTitle from '../components/FractureTitle';
import PostsModel from '../models/PostsModel';
import ProjectsModel from '../models/ProjectsModel';
import SiteModel from '../models/SiteModel';
import MenuModel from '../models/MenuModel';

interface Props {
    posts: PostsModel;
    projects: ProjectsModel;
    site: SiteModel;
    menus: MenuModel;
    dispatch: any;
}

const Home = (props: Props) => {
    const { posts, projects, site, menus, dispatch } = props;

    useEffect(() => {
        window.document.title = 'Coding Simply';
        if (!posts.hasLoaded()) {
            postsAction.getPosts(dispatch);
        }
        if (!projects.hasLoaded()) {
            projectsAction.getProjects(dispatch);
        }
    }, [posts, projects, dispatch]);

    if (!posts.hasLoaded() && !projects.hasLoaded() && !site.hasLoaded() && !menus.hasLoaded()) {
        return <div className="row">
            <div className="large-8 large-push-2 columns">
                <main className="site-main">
                    <div className="text-center">
                        <Loading />
                    </div>
                </main>
            </div>
        </div>
    }

    return <div className="row">
        <div className="large-8 large-push-2 columns">
            <main className="site-main home">
                <h1>
                    <FractureTitle split={'word'}>Hello everyone, my name is Adam.</FractureTitle>
                </h1>
                <h4 className="subheader" style={{ clear: 'both' }}>
                    I am software developer. I like to find creative, simple solutions to problems. I use
                    different languages and stacks as tools to build solutions to ideas. Checkout{' '}
                    <Link to={`/projects/`}>my work</Link> and see if there is something you like.
                </h4>
            </main>
        </div>
    </div>
}

export default connect((state: Props) => {
    return {
        site: state.site,
        menus: state.menus,
        posts: state.posts,
        projects: state.projects
    };
})(Home);
