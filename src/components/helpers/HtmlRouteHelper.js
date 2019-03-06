import {main} from "../../constants/main";

const contentClickHandler = (e, history) => {
    const targetLink = e.target.closest('a');
    if (targetLink && targetLink.getAttribute('target') !== '_blank') {
        e.preventDefault();
        let uri = targetLink.href.replace('https://', '').replace('http://', '');
        for(let alias of main.aliases) {
            uri = uri.replace(alias, '');
        }
        history.push(uri)
    }
};

export {
    contentClickHandler
};