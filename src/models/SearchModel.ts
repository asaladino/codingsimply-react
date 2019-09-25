import SearchResult from "./SearchResult";
export default class SearchModel {
    term: string = '';
    results: SearchResult[] = [];
    loading: boolean = false;
    constructor(state = {}) {
        Object.assign(this, state);
    }
    hasLoaded() {
        return !this.loading;
    }
    getResults() {
        return this.results.map(result => new SearchResult(result));
    }
}
