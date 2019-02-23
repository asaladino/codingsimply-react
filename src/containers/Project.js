import {Component} from "react";
import {connect} from "react-redux";
import {site as siteAction} from '../actions/site';
import {projects as projectsAction} from '../actions/projects';
import {menus as menuAction} from '../actions/menu';
import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import ProjectIcon from "../components/ProjectIcon";
import Slider from "react-slick/lib";

class Project extends Component {
    componentDidMount() {
        const {site, menus, projects, dispatch, match} = this.props;
        if (!site.hasLoaded()) {
            siteAction.get(dispatch);
        }
        if (!menus.hasLoaded()) {
            menuAction.getMenu(dispatch, 'primary');
        }
        const {slug} = match.params;
        if (slug) {
            projectsAction.getProject(dispatch, projects, slug);
        }
    }

    galleryImage = (image) => {
        if(image) {
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
        const {site, menus, projects} = this.props;
        const {project} = projects;
        if (project === null) {
            return (
                <DefaultLayout site={site} menus={menus}>
                    <div className="row">
                        <div className="large-8 large-push-2 columns">
                            <article className="site-main">
                                Loading
                            </article>
                        </div>
                    </div>
                </DefaultLayout>
            )
        }

        return (
            <DefaultLayout site={site} menus={menus}>
                <div className="row">
                    <div className="large-8 large-push-2 columns">
                        <main className="site-main">
                            <div className="row">
                                <div className="large-3 medium-4 small-6 columns">
                                    <ProjectIcon initials={projects.getInitials(project)}/>
                                </div>
                                <div className="large-9 medium-8 small-6 columns">
                                    <header className="entry-header">
                                        <h2 className="entry-title">{projects.getTitle()}</h2>
                                        <div className="row">
                                            <div className="small-12 columns text-right">
                                                <br/><br/>
                                                {project.meta.git_url ? (
                                                    <a className="button secondary" href={project.meta.git_url}
                                                       target="_blank">
                                                        <i className="fa fa-github" aria-hidden="true"></i>
                                                        Fork on Github
                                                    </a>
                                                ) : ''}
                                            </div>
                                        </div>
                                    </header>
                                </div>
                            </div>
                            <hr/>
                            <div className="entry-content">
                                <div dangerouslySetInnerHTML={{__html: projects.getContent()}}/>
                                <div className="row">
                                    <div className="large-8 large-push-2 columns">
                                        <Slider {...settings}>
                                            {this.galleryImage(project.meta.screenshot_url)}
                                            {this.galleryImage(project.meta.screenshot_url_2)}
                                            {this.galleryImage(project.meta.screenshot_url_3)}
                                            {this.galleryImage(project.meta.screenshot_url_4)}
                                            {this.galleryImage(project.meta.screenshot_url_5)}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </DefaultLayout>
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