import React, {Component} from "react";
import {connect} from "react-redux";
import {projects as projectsAction} from '../actions/projects';
import ProjectItem from "../components/ProjectItem";
import _ from "lodash";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ProjectItem2 from "../components/ProjectItem2";

class Projects extends Component {

    constructor(props) {
        super(props);
        const {projects} = props;
        const {display} = projects;
        if (display.listView) {
            this.iconItemsRef = React.createRef();
        }
    }

    componentDidMount() {
        const {projects, dispatch} = this.props;
        if (!projects.hasLoaded()) {
            projectsAction.getProjects(dispatch);
        }
        const {display} = projects;
        if (display.listView) {
            window.addEventListener('resize', this.resizeIcon);
            this.resizeIcon();
        }
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        const {projects} = this.props;
        const {display} = projects;
        if (display.listView) {
            this.resizeIcon();
        }
    }

    resizeIcon = () => {
        if (this.iconItemsRef && this.iconItemsRef.current) {
            const {current} = this.iconItemsRef;
            const {childNodes} = current;
            let max = 0;
            childNodes.forEach($el => {
                const height = $el.childNodes[0].offsetHeight;
                if (max < height) {
                    max = height;
                }
            });
            childNodes.forEach($el => {
                $el.childNodes[0].style.height = max + 'px';
            });
        }
    };

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

    render() {
        const {projects, dispatch} = this.props;
        const {display} = projects;
        return (
            <div className="row">
                <div className="large-8 large-push-2 columns">
                    <main className="site-main">
                        <div className="row">
                            <div className="medium-4 columns">
                                <button className="button" onClick={() => {
                                    const displayUpdated = {...display, filter: !display.filter};
                                    projectsAction.setDisplay(dispatch, displayUpdated)
                                }}>
                                    <span className="show-for-sr">{display.filter ? 'Hide ' : 'Show '}Filter</span>
                                    <span aria-hidden="true">
                                        <FontAwesomeIcon icon={'filter'}/>
                                    </span>
                                </button>
                                <button className="button" onClick={() => {
                                    const displayUpdated = {...display, listView: !display.listView};
                                    projectsAction.setDisplay(dispatch, displayUpdated)
                                }}>
                                    <span className="show-for-sr">{display.filter ? 'Icon ' : 'List '}View</span>
                                    <span aria-hidden="true">
                                        {display.listView ?
                                            <FontAwesomeIcon icon={'th-large'}/> : <FontAwesomeIcon icon={'list'}/>}
                                    </span>
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
                                    {projects.getCategories().map(c =>
                                        <span key={c.term_id} className="label secondary animated fadeIn">
                                            <input id={c.name}
                                                   value={c.name}
                                                   defaultChecked={_.indexOf(display.selected, c.name) > -1}
                                                   type="checkbox"
                                                   onChange={this.onCategorySelected}/>
                                            <label htmlFor={c.name}>{c.name}</label>
                                        </span>
                                    )}
                                    <button className={`button secondary ${!display.moreCategories ? 'hide' : ''}`}
                                            onClick={(() => {
                                                const displayUpdated = {...display, moreCategories: false};
                                                projectsAction.setDisplay(dispatch, displayUpdated)
                                            })}>
                                        <span className="show-for-sr">Less Categories</span>
                                        <span aria-hidden="true">
                                            <FontAwesomeIcon icon={'caret-left'}/>
                                        </span>
                                    </button>
                                    <button className={`button secondary ${display.moreCategories ? 'hide' : ''}`}
                                            onClick={(() => {
                                                const displayUpdated = {...display, moreCategories: true};
                                                projectsAction.setDisplay(dispatch, displayUpdated)
                                            })}>
                                        <span className="show-for-sr">More Categories</span>
                                        <span aria-hidden="true">
                                            <FontAwesomeIcon icon={'caret-right'}/>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row" ref={this.iconItemsRef}>
                            {projects.getProjects().map((project, index) =>
                                display.listView ?
                                    <ProjectItem project={project} key={project.getId()}/> :
                                    <ProjectItem2 project={project} index={index} key={project.getId()}/>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        projects: state.projects
    };
})(Projects);