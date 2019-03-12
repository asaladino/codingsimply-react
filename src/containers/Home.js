import {Component} from "react";
import {connect} from "react-redux";
import {posts as postsAction} from '../actions/posts';
import {projects as projectsAction} from '../actions/projects';
import React from "react";
import Loading from "../components/Loading";
import FractureTitle from "../components/FractureTitle";

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

    /**
     * @todo Home page should just be a personal statement, couple lines about me and what I do.
     */
    render() {
        const {posts, projects, site, menus} = this.props;
        if (!posts.hasLoaded() && !projects.hasLoaded() && !site.hasLoaded() && !menus.hasLoaded()) {
            return (
                <div className="row">
                    <div className="large-8 large-push-2 columns">
                        <main className="site-main">
                            <div className='text-center'><Loading/></div>
                        </main>
                    </div>
                </div>
            );
        }

        return (
            <React.Fragment>
                <div className="row">
                    <div className="large-8 large-push-2 columns">
                        <main className="site-main home">
                            <h1>
                                <FractureTitle>
                                    Hello everyone, my name is Adam.
                                </FractureTitle>
                            </h1>
                            <h4 className="subheader">
                                I am software developer. I like to find creative simple solutions to problems.
                                I use different languages and stacks as tools to create solutions to ideas. Checkout
                                my work and see if there is something you like.
                            </h4>
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