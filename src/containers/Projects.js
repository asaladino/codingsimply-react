import {Component} from "react";
import {connect} from "react-redux";
import {site as siteAction} from '../actions/site';
import {projects as projectsAction} from '../actions/projects';
import {menus as menuAction} from '../actions/menu';
import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import ProjectItem from "../components/ProjectItem";

class Projects extends Component {
    componentDidMount() {
        const {site, menus, projects, dispatch} = this.props;
        if (!site.hasLoaded()) {
            siteAction.get(dispatch);
        }
        if (!projects.hasLoaded()) {
            projectsAction.getProjects(dispatch);
        }
        if (!menus.hasLoaded()) {
            menuAction.getMenu(dispatch, 'primary');
        }
    }

    render() {
        const {site, menus, projects} = this.props;
        return (
            <DefaultLayout site={site} menus={menus}>
                <div className="row">
                    <div className="large-8 large-push-2 columns">
                        <main className="site-main">
                            <h2>Portfolio</h2>
                            <div className="row">
                                {projects.projects.map(p => {
                                    return <ProjectItem key={p.id} projects={projects} project={p} />;
                                })}
                            </div>
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
        projects: state.projects
    };
})(Projects);