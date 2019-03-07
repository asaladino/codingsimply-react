const main = {
    baseUrl: 'https://codingsimply.com',
    domain: 'codingsimply.com',
    aliases: [
        'codingsimply.com',
        'codingsimply.lh',
        'localhost:3000'
    ],
    isDev: function() {
        return window.location.host === 'localhost:3000';
    }
};

export {
    main
};