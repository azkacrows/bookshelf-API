const {nanoid} = require('nanoid');
const books = require('./books');

// Handler 1
const addbooksHandler = (request, h) => {
    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
    } = request.payload;
    if (!name) {
        return h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        }).code(400);
    }
    if (readPage > pageCount) {
        return h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        }).code(400);
    }
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = pageCount === readPage;

    const newbooks = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        insertedAt,
        updatedAt,
};

    books.push(newbooks);

    const isSuccess = books.filter((books) => books.id === id).length > 0;
    if (isSuccess) {
        return h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
            },
        }).code(201);
    } else {
        return h.response({
            status: 'error',
            message: 'Buku gagal ditambahkan',
        }).code(500);
    }
};

// Handler 2
const getAllbooksHandler = (request, h) => {
    const {name, reading, finished} = request.query;
    if (name !== undefined) {
        const booksName = books.filter((books) => books.name.toLowerCase().includes(name.toLowerCase()));
        return h.response({
            status: 'success',
            data: {
                books: booksName.map((books) => ({
                    id: books.id,
                    name: books.name,
                    publisher: books.publisher,
                })),
            },
        }).code(200);
    } else if (reading !== undefined) {
        const booksReading = books.filter((books) => Number(books.reading) === Number(reading));
        return h.response({
            status: 'success',
            data: {
                books: booksReading.map((books) => ({
                    id: books.id,
                    name: books.name,
                    publisher: books.publisher,
                })),
            },
        }).code(200);
    } else if (finished !== undefined) {
        const booksFinished = books.filter((books) => Number(books.finished) === Number(finished));
        return h.response({
            status: 'success',
            data: {
                books: booksFinished.map((books) => ({
                    id: books.id,
                    name: books.name,
                    publisher: books.publisher,
                })),
            },
        }).code(200);
    } else {
        return h.response({
            status: 'success',
            data: {
                books: books.map((books) => ({
                    id: books.id,
                    name: books.name,
                    publisher: books.publisher,
                })),
            },
        }).code(200);
    }
};

// Handler 3
const getbooksByIdHandler = (request, h) => {
    const {id} = request.params;
    const books = books.filter((books) => books.id === id)[0];
    if (books !== undefined) {
        return h.response({
            status: 'success',
            data: {
                books,
            },
        }).code(200);
    } else {
        return h.response({
            status: 'fail',
            message: 'Buku tidak ditemukan',
        }).code(404);
    }
};

// Handler 4
const updatebooksByIdHandler = (request, h) => {
    const {id} = request.params;
    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
    } = request.payload;

    const index = books.findIndex((books) => books.id === id);
    const updatedAt = new Date().toISOString();

    if (index !== -1) {
        books[index] = {
            ...books[index],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            updatedAt,
        };
        return h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui',
        }).code(200);
    } else if (name !== undefined) {
        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Id tidak ditemukan',
        }).code(404);
    } else if (readPage > pageCount) {
        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        }).code(400);
    } else {
        return h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Mohon isi nama buku',
        }).code(400);
    }
};

// Handler 5
const deletebooksByIdHandler = (request, h) => {
    const {id} = request.params;
    const index = books.findIndex((books) => books.id === id);

    if (index !== -1) {
        books.splice(index, 1);
        return h.response({
            status: 'success',
            message: 'Buku berhasil dihapus',
        }).code(200);
    } else {
        return h.response({
            status: 'fail',
            message: 'Gagal menghapus buku. Id tidak ditemukan',
        }).code(404);
    }
};

module.exports = {
    addbooksHandler,
    getAllbooksHandler,
    getbooksByIdHandler,
    updatebooksByIdHandler,
    deletebooksByIdHandler,
};
