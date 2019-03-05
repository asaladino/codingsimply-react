const contentClickHandler = (e, history) => {
    const targetLink = e.target.closest('a');
    if (targetLink && targetLink.getAttribute('target') !== '_blank') {
        e.preventDefault();
        const uri = targetLink.href
            .replace('http://', '')
            .replace('https://', '')
            .replace('localhost:3000', '')
            .replace('codingsimply.com', '')
            .replace('codingsimply.lh', '');
        history.push(uri)
    }
};

export {
    contentClickHandler
};