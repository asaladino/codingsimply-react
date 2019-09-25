import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProjectModel from "../models/ProjectModel";

interface Props {
    projects: ProjectModel[];
}

const ProjectSlideshow = (props: Props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const { projects } = props;
    if (projects.length === 0) {
        return <React.Fragment />;
    }
    return <div className="project-slide-show">
        <Slider {...settings}>
            {projects.map(project => {
                return <div key={project.ID} className="row small-collapse medium-uncollapse large-uncollapse">
                    <div className="large-12 columns show-for-small-only text-center">
                        <h2>
                            <Link to={`/projects/${project.post_name}`}>{project.post_title}</Link>
                        </h2>
                    </div>
                    <div className="small-12 medium-5 medium-push-2 large-5 large-push-2 columns text-center">
                        <Link to={`/projects/${project.post_name}`}>
                            <img
                                className="large-12"
                                alt={project.meta.screenshot_url.alt}
                                src={project.meta.screenshot_url.sizes.large}
                            />
                        </Link>
                    </div>
                    <div className="medium-3 medium-pull-2 large-3 large-pull-2 columns hide-for-small-only orbit-slide-content">
                        <h3>
                            <Link to={`/projects/${project.post_name}`}>{project.post_title}</Link>
                        </h3>
                        <p className="hide-for-medium-only">{project.post_excerpt}</p>
                    </div>
                </div>
            })}
        </Slider>
    </div>
}

export default ProjectSlideshow;
