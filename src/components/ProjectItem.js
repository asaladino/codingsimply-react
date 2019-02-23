import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ProjectIcon from "./ProjectIcon";

class ProjectItem extends Component {
    render() {
        const {projects, project} = this.props;
        return (
            <div className="large-3 medium-4 small-6 columns post-entry end">
                <div className="callout text-center no-border" data-equalizer-watch=""
                     style={{height: '224px'}}>
                    <Link to={`/projects/${project.post_name}`}>
                        <ProjectIcon initials={projects.getInitials(project)} />
                        <strong>{projects.getTitle(project)}</strong>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ProjectItem;