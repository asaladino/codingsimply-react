import _ from "lodash";

export default class ProjectModel {

    ID = 0;
    post_title = '';
    post_name = '';
    post_excerpt = '';
    post_content = '';
    promote = false;
    randomKey = 0;
    categories = [];

    meta = {
        icon_url: null,
        git_url: null,
        screenshot_url: null,
        screenshot_url_2: null,
        screenshot_url_3: null,
        screenshot_url_4: null,
        screenshot_url_5: null
    };

    constructor(state = {}) {
        this.randomKey = _.random(0, 20);
        Object.assign(this, state);
    }

    hasIcon() {
        return this.meta.icon_url !== false;
    }

    getExcept() {
        return this.post_excerpt;
    }

    getId() {
        return this.ID;
    }

    getSlug() {
        return this.post_name;
    }

    getContent() {
        return this.post_content;
    }

    getTitle() {
        return this.post_title;
    };

    getGitUrl() {
        return this.meta.git_url;
    }

    getIconUrl() {
        return this.meta.icon_url.sizes.large;
    }

    getScreenshot() {
        return this.meta.screenshot_url;
    }

    getScreenshot2() {
        return this.meta.screenshot_url_2;
    }

    getScreenshot3() {
        return this.meta.screenshot_url_3;
    }

    getScreenshot4() {
        return this.meta.screenshot_url_4;
    }

    getScreenshot5() {
        return this.meta.screenshot_url_5;
    }

    getInitials() {
        const title = this.getTitle();
        const parts = title.split(' ');
        if (parts.length === 1) {
            return parts[0].substr(0, 1).toUpperCase();
        }
        return (parts[0].substr(0, 1) + parts[1].substr(0, 1)).toUpperCase();
    };
}