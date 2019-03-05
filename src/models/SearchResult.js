
class SearchResult {
    id = 0;
    title = '';
    url = '';
    subtype = '';
    constructor(state) {
        Object.assign(this, state);
    }

    getType() {
        return this.subtype;
    }

    getId() {
        return this.id;
    }

    getUrl() {
        return this.url;
    }

    getUrlLink() {
        return this.url.replace('http://', '')
            .replace('https://', '')
            .replace('localhost:3000', '')
            .replace('codingsimply.com', '')
            .replace('codingsimply.lh', '');
    }

    getTitle() {
        return this.title;
    }
}

export default SearchResult;