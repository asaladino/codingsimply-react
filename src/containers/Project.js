import {Component} from "react";
import {connect} from "react-redux";
import {site as siteAction} from '../actions/site';
import {projects as projectsAction} from '../actions/projects';
import {menus as menuAction} from '../actions/menu';
import React from "react";
import DefaultLayout from "../components/DefaultLayout";

class Project extends Component {
    componentDidMount() {
        const {site, menus, dispatch, match} = this.props;
        if (!site.hasLoaded()) {
            siteAction.get(dispatch);
        }
        if (!menus.hasLoaded()) {
            menuAction.getMenu(dispatch, 'primary');
        }
        const {slug} = match.params;
        if (slug) {
            projectsAction.getProject(dispatch, slug);
        }
    }

    render() {
        const {site, menus, projects} = this.props;
        return (
            <DefaultLayout site={site} menus={menus}>
                <div className="row">
                    <div className="large-8 large-push-2 columns">
                        <main className="site-main">
                            <h2>{projects.getTitle()}</h2>
                            <hr/>
                            <div dangerouslySetInnerHTML={{__html: projects.getContent()}}/>
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