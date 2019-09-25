export default class SiteModel {
    name: string = '';
    description: string = '';
    url: string = '';
    constructor(state = {}) {
        Object.assign(this, state);
    }
    hasLoaded() {
        return this.name !== '';
    }
}
