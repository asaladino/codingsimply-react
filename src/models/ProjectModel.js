export default class ProjectModel {

    ID = 0;
    post_title = '';
    post_name = '';
    post_content = '';
    promote = false;

    meta = {
        git_url: null,
        screenshot_url: null,
        screenshot_url_2: null,
        screenshot_url_3: null,
        screenshot_url_4: null,
        screenshot_url_5: null
    };

    constructor(state = {}) {
        Object.assign(this, state);
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