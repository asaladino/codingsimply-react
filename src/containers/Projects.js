import {Component} from "react";
import {connect} from "react-redux";
import {projects as projectsAction} from '../actions/projects';
import React from "react";
import ProjectItem from "../components/ProjectItem";
import _ from "lodash";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ProjectItem2 from "../components/ProjectItem2";

class Projects extends Component {
    componentDidMount() {
        const {projects, dispatch} = this.props;
        if (!projects.hasLoaded()) {
            projectsAction.getProjects(dispatch);
        }
    }

    onCategorySelected = (e) => {
        const {projects, dispatch} = this.props;
        const {display} = projects;
        if (e.target.checked) {
            let {selected} = display;
            selected.push(e.target.value);
            const displayUpdated = {...display, selected};
            projectsAction.setDisplay(dispatch, displayUpdated);
        } else {
            let {selected} = display;
            _.remove(selected, (category) => {
                return category === e.target.value;
            });
            const displayUpdated = {...display, selected};
            projectsAction.setDisplay(dispatch, displayUpdated);
        }
    };

    /**
     * @todo Use icon when available
     * @todo square off generated icons.
     * @returns {*}
     */
    render() {
        const {projects, dispatch} = this.props;
        const {display} = projects;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="large-8 large-push-2 columns">
                        <main className="site-main">
                            <div className="row">
                                <div className="medium-4 columns">
                                    <button className="button" onClick={(() => {
                                        const displayUpdated = {...display, filter: !display.filter};
                                        projectsAction.setDisplay(dispatch, displayUpdated)
                                    })}>
                                        <FontAwesomeIcon icon={'filter'}/>
                                    </button>
                                    <button className="button" onClick={(() => {
                                        const displayUpdated = {...display, listView: !display.listView};
                                        projectsAction.setDisplay(dispatch, displayUpdated)
                                    })}>
                                        {display.listView ?
                                            <FontAwesomeIcon icon={'th-large'}/> :
                                            <FontAwesomeIcon icon={'list'}/>}
                                    </button>
                                </div>
                                <div className={`medium-8 columns ${display.filter ? '' : 'hide'}`}>
                                    <input type="text" value={display.term} name="filter" placeholder="filter..."
                                           onChange={((e) => {
                                               const displayUpdated = {...display, term: e.target.value};
                                               projectsAction.setDisplay(dispatch, displayUpdated)
                                           })}/>
                                </div>
                            </div>
                            <div className={`row ${display.filter ? '' : 'hide'}`}>
                                <div className="large-12 columns">
                                    <div className="categories">
                                        {projects.getCategories().map(c => {
                                            return (
                                                <span key={c.term_id} className="label secondary animated fadeIn">
                                                    <input id={c.name}
                                                           value={c.name}
                                                           defaultChecked={_.indexOf(display.selected, c.name) > -1}
                                                           type="checkbox"
                                                           onChange={this.onCategorySelected}/>
                                                    <label htmlFor={c.name}>{c.name}</label>
                                                </span>
                                            );
                                        })}
                                        <button className={`button secondary ${!display.moreCategories ? 'hide' : ''}`}
                                                onClick={(() => {
                                                    const displayUpdated = {...display, moreCategories: false};
                                                    projectsAction.setDisplay(dispatch, displayUpdated)
                                                })}>
                                            <FontAwesomeIcon icon={'caret-left'}/>
                                        </button>
                                        <button className={`button secondary ${display.moreCategories ? 'hide' : ''}`}
                                                onClick={(() => {
                                                    const displayUpdated = {...display, moreCategories: true};
                                                    projectsAction.setDisplay(dispatch, displayUpdated)
                                                })}>
                                            <FontAwesomeIcon icon={'caret-right'}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {projects.getProjects().map((project, index) => {
                                    return (
                                        <React.Fragment key={project.getId()}>
                                            {display.listView ? (
                                                <div className={`animated zoomIn`}
                                                     style={{animationDelay: _.random(200, 600) + 'ms'}}>
                                                    <ProjectItem project={project}/>
                                                </div>
                                            ) : (
                                                <div className={`animated fadeIn`}
                                                     style={{animationDelay: (index * 200) + 'ms'}}>
                                                    <ProjectItem2 project={project}/>
                                                </div>
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        </main>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(state => {
    return {
        projects: state.projects
    };
})(Projects);