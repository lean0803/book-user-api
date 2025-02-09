const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllBooks = () => prisma.book.findMany();
const getBookById = (id) => prisma.book.findUnique({where: {id: Number(id)}});
const createBook = (data) => prisma.book.create({data});
const updateBook = (id, data) => prisma.book.update({where: {id: Number(id)}, data});
const deleteBook = (id) => prisma.book.delete({where: {id: Number(id)}});

module.exports = {getAllBooks, getBookById, createBook, updateBook, deleteBook};
