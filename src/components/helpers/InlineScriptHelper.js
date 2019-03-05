import postscribe from "postscribe";

const loadInlineScripts = () => {
    document.querySelectorAll('#root script').forEach(tag => {
        if(tag.className.indexOf('loaded') === -1) {
            const place = document.createElement("div");
            tag.className += (tag.className === '' ? 'loaded' : ' loaded');
            tag.after(tag, place);
            postscribe(place, tag.outerHTML);
        }
    });
};

export {
    loadInlineScripts
}