const contentClickHandler = (e, history) => {
    const targetLink = e.target.closest('a');
    if (targetLink) {
        e.preventDefault();
    }
    const uri = targetLink.href
        .replace('http://', '')
        .replace('https://', '')
        .replace('localhost:3000', '')
        .replace('codingsimply.com', '');
    history.push(uri)
};

export {
    contentClickHandler
};