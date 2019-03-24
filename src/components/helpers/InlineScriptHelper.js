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

const contentImageLoading = () => {
    console.log('looking');
    document.querySelectorAll('#root img').forEach(img => {
        console.log(img);
        if(!img.hasAttribute('data-src')) {
            img.setAttribute('data-src', img.getAttribute('src'));
            img.style = 'display: none;';
            img.onload = (e) => {
                e.currentTarget.style = 'display: block;';
                e.currentTarget.className += ' animated bounceIn';
            };
        }
    });
};

export {
    loadInlineScripts,
    contentImageLoading
}