import _ from 'lodash';

export default class ProjectsModel {
    projects = [];
    project = null;
    didLoad = false;
    display = {
        moreCategories: true,
        listView: true,
        filter: false,
        term: '',
        selected: []
    };

    constructor(state = {}) {
        Object.assign(this, state);
    }

    hasLoaded() {
        return this.didLoad;
    }

    getProjects() {
        const { selected } = this.display;
        const term = this.display.term.toLowerCase();
        if (this.display.filter) {
            return _.sortBy(this.projects.filter(p => {
                return (
                    term === '' ||
                    p.getTitle().toLowerCase().indexOf(term) > 0 ||
                    p.getExcept().toLowerCase().indexOf(term) > 0 ||
                    p.getContent().toLowerCase().indexOf(term) > 0
                )
                    &&
                    (
                        selected.length === 0 ||
                        p.categories.filter(c => _.indexOf(selected, c.name) > -1).length > 0
                    )
            }), 'post_name');
        }
        return _.sortBy(this.projects, 'post_name');
    }

    getPromoted() {
        return _.sortBy(this.projects.filter(p => p.meta.promote), 'randomKey');
    }

    /**
     * Get a unique list of categories.
     * @return {Array}
     */
    getCategories() {
        return _.uniqBy(_.flatMap(this.projects, p => p.categories), 'term_id')
            .filter(c => this.display.moreCategories || _.indexOf(this.display.selected, c.name) > -1)
    }
}