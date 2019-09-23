import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ProjectIcon from "./ProjectIcon.tsx";
import _ from "lodash";

export default class ProjectItem extends Component {
    render() {
        const {project} = this.props;
        return (
            <div className={`animated zoomIn`} style={{animationDelay: _.random(200, 600) + 'ms'}}>
                <div className="large-3 medium-3 small-6 columns">
                    <div className="callout text-center no-border project-item">
                        <Link to={`/projects/${project.getSlug()}`}>
                            {project.hasIcon() ?
                                <img alt={project.getTitle()} src={project.getIconUrl()}/> :
                                <ProjectIcon initials={project.getInitials()}/>}
                            <strong>{project.getTitle()}</strong>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
