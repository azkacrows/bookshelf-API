const {
    addbooksHandler,
    getAllbooksHandler,
    getbooksByIdHandler,
    updatebooksByIdHandler,
    deletebooksByIdHandler,
    } = require('./handler');

    const routes = [
        {
            method: 'POST',
            path: '/books',
            handler: addbooksHandler,
        },
        {
            method: 'GET',
            path: '/books',
            handler: getAllbooksHandler,
        },
        {
            method: 'GET',
            path: '/books/{id}',
            handler: getbooksByIdHandler,
        },
        {
            method: 'PUT',
            path: '/books/{id}',
            handler: updatebooksByIdHandler,
        },
        {
            method: 'DELETE',
            path: '/books/{id}',
            handler: deletebooksByIdHandler,
        },
    ];
module.exports = routes;
