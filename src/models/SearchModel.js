import SearchResult from "./SearchResult";

class SearchModel {
    term = '';
    results = [];
    loading = false;
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

export default SearchModel;