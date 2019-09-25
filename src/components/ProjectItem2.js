import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ProjectIcon from "./ProjectIcon.tsx";
import Categories from "./Categories";

export default class ProjectItem2 extends Component {
    render() {
        const {project, index} = this.props;
        return (
            <div className={`animated fadeIn`} style={{animationDelay: (index * 200) + 'ms'}}>
                <div className="small-12 columns">
                    <div className="row">
                        <div className="large-3 medium-4 hide-for-small-only columns">
                            <div className="callout text-center no-border project-item">
                                <Link to={`/projects/${project.getSlug()}`}>
                                    {project.hasIcon() ?
                                        <img alt={project.getTitle()} src={project.getIconUrl()}/> :
                                        <ProjectIcon initials={project.getInitials()}/>}
                                </Link>
                            </div>
                        </div>
                        <div className="large-9 medium-8 small-12 columns project-item-details">
                            <Link to={`/projects/${project.getSlug()}`}>
                                <h4>{project.getTitle()}</h4>
                            </Link>
                            <p><Categories categories={project.categories}/></p>
                            <p>{project.getExcept()}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
