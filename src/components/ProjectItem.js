import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ProjectIcon from "./ProjectIcon";

class ProjectItem extends Component {
    render() {
        const {project} = this.props;
        return (
            <div className="large-3 medium-4 small-6 columns post-entry end">
                <div className="callout text-center no-border" data-equalizer-watch=""
                     style={{height: '224px'}}>
                    <Link to={`/projects/${project.getSlug()}`}>
                        <ProjectIcon initials={project.getInitials()} />
                        <strong>{project.getTitle()}</strong>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ProjectItem;