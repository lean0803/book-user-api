const {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
} = require('../models/bookModel');

//Ambil semua buku
const getBooks = async (req, res) => {
    try {
        const books = await getAllBooks();
        res.json(books);
    }catch(error){
        res.status(500).json({message: "Terjadi kesalahan", error});
    }
};

//Ambil buku berdasarkan ID
const getBook = async (req, res) => {
    try{
        const book = await getBookById(req.params.id);
        if(!book) return res.status(404).json({message: "Buku tidak ditemukan"});
        res.json(book);
    }catch(error){
        res.status(500).json({message: "Terjadi kesalahan", error});
    }
};

//Tambah buku baru
const addBook = async (req, res) => {
    try{
        const book = await createBook(req.body);
        res.status(201).json(book);
    }catch(error){
        res.status(500).json({message: "Gagal menambahkan buku", error});
    }
};

// Update buku berdasarkan ID
const editBook = async (req, res) => {
  try {
    const book = await updateBook(req.params.id, req.body);
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Gagal memperbarui buku", error });
  }
};

// Hapus buku berdasarkan ID
const removeBook = async (req, res) => {
  try {
    await deleteBook(req.params.id);
    res.json({ message: "Buku berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus buku", error });
  }
};

module.exports = {getBooks, getBook, addBook, editBook, removeBook};