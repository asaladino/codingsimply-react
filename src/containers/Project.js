import {Component} from "react";
import {connect} from "react-redux";
import {projects as projectsAction} from '../actions/projects';
import React from "react";
import ProjectIcon from "../components/ProjectIcon";
import Slider from "react-slick/lib";
import Loading from "../components/Loading";

class Project extends Component {
    componentDidMount() {
        const {projects, dispatch, match} = this.props;
        const {slug} = match.params;
        if (slug) {
            projectsAction.getProject(dispatch, projects, slug);
        }
    }

    galleryImage = (image) => {
        if (image) {
            return (
                <figure className="orbit-figure">
                    <img
                        alt={image.alt}
                        src={image.sizes.large}
                    />
                </figure>
            );
        }
    };

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const {projects, site, menus} = this.props;
        const {project} = projects;


        if (project === null || (!projects.hasLoaded() && !site.hasLoaded() && !menus.hasLoaded())) {
            return (
                <div className="row">
                    <div className="large-8 large-push-2 columns">
                        <main className="site-main">
                            <div className='text-center'><Loading/></div>
                        </main>
                    </div>
                </div>
            );
        }

        return (
            <div className="row">
                <div className="large-8 large-push-2 columns">
                    <main className="site-main">
                        <React.Fragment>
                            <div className="row animated fadeIn">
                                <div className="large-3 medium-4 small-6 columns">
                                    <ProjectIcon initials={project.getInitials()}/>
                                </div>
                                <div className="large-9 medium-8 small-6 columns">
                                    <header className="entry-header">
                                        <h2 className="entry-title">{project.getTitle()}</h2>
                                        <div className="row">
                                            <div className="small-12 columns text-right">
                                                {project.getGitUrl() ? (
                                                    <a className="button secondary"
                                                       href={project.getGitUrl()}
                                                       rel="noopener noreferrer"
                                                       target="_blank">
                                                        <i className="fa fa-github"
                                                           aria-hidden="true">{' '}</i>
                                                        Fork on Github
                                                    </a>
                                                ) : ''}
                                            </div>
                                        </div>
                                    </header>
                                </div>
                            </div>
                            <div className="entry-content">
                                <div className="row">
                                    <div className="large-8 large-push-2 columns">
                                        <Slider {...settings}>
                                            {this.galleryImage(project.getScreenshot())}
                                            {this.galleryImage(project.getScreenshot2())}
                                            {this.galleryImage(project.getScreenshot3())}
                                            {this.galleryImage(project.getScreenshot4())}
                                            {this.galleryImage(project.getScreenshot5())}
                                        </Slider>
                                    </div>
                                </div>
                                <div dangerouslySetInnerHTML={{__html: project.getContent()}}/>
                            </div>
                        </React.Fragment>
                    </main>
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        site: state.site,
        menus: state.menus,
        projects: state.projects
    };
})(Project);