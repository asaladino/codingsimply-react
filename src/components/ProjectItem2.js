import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ProjectIcon from "./ProjectIcon";

class ProjectItem2 extends Component {
    render() {
        const {project} = this.props;
        return (
            <div className="small-12 columns">
                <div className="row">
                    <div className="small-3 columns">
                        <div className="callout text-center no-border project-item">
                            <Link to={`/projects/${project.getSlug()}`}>
                                {project.getScreenshot() ? (
                                    <img alt={project.getScreenshot().alt} src={project.getScreenshot().sizes.medium} />
                                ) : (
                                    <ProjectIcon initials={project.getInitials()}/>
                                )}
                            </Link>
                        </div>
                    </div>
                    <div className="small-9 columns project-item-details">
                        <Link to={`/projects/${project.getSlug()}`}>
                            <h4>{project.getTitle()}</h4>
                        </Link>
                        <p>
                            {project.categories.map(c => {
                                return (
                                    <span key={c.term_id} className="label secondary">{c.name}</span>
                                );
                            })}
                        </p>
                        <p>
                            {project.getExcept()}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectItem2;