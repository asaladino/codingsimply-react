export default class ProjectsModel {
    projects = [];
    project = null;
    didLoad = false;

    constructor(state = {}) {
        Object.assign(this, state);
    }

    hasLoaded() {
        return this.didLoad;
    };

    getPromoted() {
        return this.projects.filter(project => {
            return project.meta.promote;
        });
    }
}