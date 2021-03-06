import React, { useEffect } from "react";
import { connect } from "react-redux";
import { projects as projectsAction } from "../actions/projects";
import ProjectIcon from "../components/ProjectIcon";
import Slider from "react-slick/lib";
import Loading from "../components/Loading";
import Highlight from "react-highlight";
import FractureTitle from "../components/FractureTitle";
import Categories from "../components/Categories";
import NotFound from "./NotFound";
import ProjectsModel from "../models/ProjectsModel";
import SiteModel from "../models/SiteModel";
import MenuModel from "../models/MenuModel";

interface Props {
    projects: ProjectsModel;
    site: SiteModel;
    menus: MenuModel;
    dispatch: any;
    match: any;
}

const Project = (props: Props) => {
    const { projects, site, menus, dispatch, match } = props;

    useEffect(() => {
        const { slug } = match.params;
        if (slug ) {
            projectsAction.getProject(dispatch, projects, slug);
        }
    }, []);

    const galleryImage = (image:any) => {
        if (image) {
            return (
                <div>
                    <img alt={image.alt} src={image.sizes.large} />
                </div>
            );
        }
    };


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplay: false,
        pauseOnFocus: true
    };
    const { project } = projects;
    if (project === null && projects.hasLoaded()) {
        return <NotFound />;
    }
    if (project === null || (!projects.hasLoaded() && !site.hasLoaded() && !menus.hasLoaded())) {
        return (
            <div className="row">
                <div className="large-8 large-push-2 columns">
                    <main className="site-main">
                        <div className="text-center">
                            <Loading />
                        </div>
                    </main>
                </div>
            </div>
        );
    }

    window.document.title = "Project | " + project.getTitle();
    return <div className="row">
        <div className="large-8 large-push-2 columns">
            <main className="site-main project">
                <div className="row animated fadeIn">
                    <div className="large-3 medium-4 small-6 columns">
                        {project.hasIcon() ? (
                            <img alt={project.getTitle()} src={project.getIconUrl()} />
                        ) : (
                                <ProjectIcon initials={project.getInitials()} />
                            )}
                    </div>
                    <div className="large-9 medium-8 small-6 columns">
                        <h2 className="entry-title">
                            <FractureTitle split={"word"}>{project.getTitle()}</FractureTitle>
                        </h2>
                        <div className="text-right" style={{ clear: "both" }}>
                            {project.getGitUrl() ? (
                                <a
                                    className="button secondary"
                                    href={project.getGitUrl()}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i className="fa fa-github" aria-hidden="true">
                                        {" "}
                                    </i>
                                    Fork on Github
                                        </a>
                            ) : (
                                    ""
                                )}
                        </div>
                        <div className="project-item-details">
                            <Categories categories={project.categories} />
                        </div>
                    </div>
                </div>
                <div className="entry-content">
                    <div className="row">
                        <div className="large-12 columns content">
                            <Highlight innerHTML={true}>{project.getContent()}</Highlight>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="small-10 small-push-1 columns"
                            style={{ maxHeight: "900px" }}
                        >
                            <Slider {...settings}>
                                {galleryImage(project.getScreenshot())}
                                {galleryImage(project.getScreenshot2())}
                                {galleryImage(project.getScreenshot3())}
                                {galleryImage(project.getScreenshot4())}
                                {galleryImage(project.getScreenshot5())}
                            </Slider>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
}
export default connect((state: Props) => {
    return {
        site: state.site,
        menus: state.menus,
        projects: state.projects
    };
})(Project);
