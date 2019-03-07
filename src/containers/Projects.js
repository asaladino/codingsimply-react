import {Component} from "react";
import {connect} from "react-redux";
import {projects as projectsAction} from '../actions/projects';
import React from "react";
import ProjectItem from "../components/ProjectItem";

class Projects extends Component {
    componentDidMount() {
        const {projects, dispatch} = this.props;
        if (!projects.hasLoaded()) {
            projectsAction.getProjects(dispatch);
        }
    }

    render() {
        const {projects} = this.props;
        return (
            <div className="row">
                <div className="large-8 large-push-2 columns">
                    <main className="site-main">
                        <div className="row">
                            {projects.projects.map((project, index) => {
                                return (
                                    <div className={`animated zoomIn`}
                                         style={{animationDelay: (index * 200) + 'ms'}}
                                         key={project.getId()}>
                                        <ProjectItem project={project}/>
                                    </div>
                                );
                            })}
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        projects: state.projects
    };
})(Projects);