const express = require('express');
const {
    getBooks,
    getBook,
    addBook,
    editBook,
    removeBook
} = require('../controllers/bookController');

const router = express.Router();

router.get('/', getBooks);          //Route utk mengambil semua buku
router.get('/:id', getBook);        //Route utk mencari buku berdasar ID
router.post('/', addBook);          //Route utk membuat buku baru
router.put('/:id', editBook);       //Route utk mengupdate buku berdasar ID 
router.delete('/:id', removeBook);  //Route utk menghapus buku berdasar ID

module.exports = router;