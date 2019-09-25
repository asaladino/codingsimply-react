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
    document.querySelectorAll('#root img').forEach((img: HTMLImageElement) => {
        if (!img.hasAttribute('data-src')) {
            img.setAttribute('data-src', img.getAttribute('src'));
            img.setAttribute('style', 'display: none;');
            img.onload = (e) => {
                img.setAttribute('style', 'display: block;');
                img.className += ' animated zoomIn';
            };
        }
    });
};

const ImageLoadingAnimated = (props) => {
    const { children } = props;
    const nodes: any = !Array.isArray(children) ? [children] : children;
    return nodes.filter(($el: any) => $el.type === 'img').map(($img: any, key: number) => {
        return <span style={{ display: 'none' }} key={key}>
            <img alt={$img.props.alt} {...$img.props} onLoad={(e) => {
                let { parentElement } = e.currentTarget;
                parentElement.setAttribute('style', 'display: block;');
                parentElement.className += ' animated zoomIn';
            }} />
        </span>
    });
};

export {
    loadInlineScripts,
    contentImageLoading,
    ImageLoadingAnimated
}