import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ProjectItem extends Component {
    render() {
        const {projects, project} = this.props;
        return (
            <div className="large-3 medium-4 small-6 columns post-entry end">
                <div className="callout text-center no-border" data-equalizer-watch=""
                     style={{height: '224px'}}>
                    <Link to={`/projects/${project.slug}`}>
                        <div className="project-icon shadow" style={{height: '138px'}}>
                            <div className="project-initials"
                                 style={{fontSize: '60.5px'}}>Kj
                            </div>
                            <div className="project-owner"
                                 style={{fontSize: '24.2px'}}>cs;
                            </div>
                        </div>
                        <strong>{projects.getTitle(project)}</strong>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ProjectItem;