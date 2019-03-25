import postscribe from "postscribe";
import React from 'react';

const loadInlineScripts = () => {
    document.querySelectorAll('#root script').forEach(tag => {
        if (tag.className.indexOf('loaded') === -1) {
            const place = document.createElement("div");
            tag.className += (tag.className === '' ? 'loaded' : ' loaded');
            tag.after(tag, place);
            postscribe(place, tag.outerHTML);
        }
    });
};

const contentImageLoading = () => {
    document.querySelectorAll('#root img').forEach(img => {
        if (!img.hasAttribute('data-src')) {
            img.setAttribute('data-src', img.getAttribute('src'));
            img.style = 'display: none;';
            img.onload = (e) => {
                e.currentTarget.style = 'display: block;';
                e.currentTarget.className += ' animated zoomIn';
            };
        }
    });
};

const ImageLoadingAnimated = (props) => {
    const {children} = props;
    const nodes = !Array.isArray(children) ? [children] : children;
    return nodes.filter($el => $el.type === 'img').map(($img, key) => {
        return (<span style={{display: 'none'}} key={key}>
            <img alt={$img.props.alt} {...$img.props} onLoad={(e) => {
                const {parentNode} = e.currentTarget;
                parentNode.style = 'display: block;';
                parentNode.className += ' animated zoomIn';
            }}/>
        </span>);
    });
};

export {
    loadInlineScripts,
    contentImageLoading,
    ImageLoadingAnimated
}