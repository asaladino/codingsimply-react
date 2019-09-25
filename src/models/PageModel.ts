export default class PageModel {
    id: number = 0;
    title = { rendered: '' };
    content = { rendered: '' };
    featuredMedia = {
        media_details: { sizes: { large: { source_url: '' } } },
        alt_text: ''
    };
    constructor(state = {}) {
        Object.assign(this, state);
    }
    getId() {
        return this.id;
    }
    getTitle() {
        const { rendered } = this.title;
        return rendered;
    }
    getContent() {
        const { rendered } = this.content;
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
