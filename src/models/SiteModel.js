export default class SiteModel {
    name = '';
    description = '';
    url = '';

    constructor(state = {}) {
        Object.assign(this, state);
    }

    hasLoaded() {
        return this.name !== '';
    }
}