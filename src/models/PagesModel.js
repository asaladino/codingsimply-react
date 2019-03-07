class PagesModel {
    pages = [];
    page = null;
    featuredMedia = null;
    didLoad = false;

    constructor(state = {}) {
        Object.assign(this, state);
    }

    hasLoaded() {
        return this.didLoad;
    }

    getTitle(page) {
        if (page == null && this.page == null) {
            return '';
        }
        if (page == null) {
            const {rendered} = this.page.title;
            return rendered;
        }
        const {rendered} = page.title;
        return rendered;
    }

    getContent(page) {
        if (page == null && this.page == null) {
            return '';
        }
        if (page == null) {
            const {rendered} = this.page.content;
            return rendered;
        }
        const {rendered} = page.content;
        return rendered;
    }

    getFeaturedMediaLarge() {
        if (this.featuredMedia !== null) {
            return this.featuredMedia.media_details.sizes.large.source_url;
        }
    }

    getFeaturedMediaAlt() {
        if (this.featuredMedia !== null) {
            return this.featuredMedia.alt_text;
        }
    }
}

export default PagesModel;