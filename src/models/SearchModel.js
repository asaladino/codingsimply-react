import SearchResult from "./SearchResult";

class SearchModel {
    term = '';
    results = [];
    constructor(state = {}) {
        Object.assign(this, state);
    }

    getResults() {
        return this.results.map(result => new SearchResult(result));
    }
}

export default SearchModel;