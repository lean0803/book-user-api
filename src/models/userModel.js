const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllUsers = () => prisma.user.findMany({include: {books: true}});
const getUserById = (id) => prisma.user.findUnique({where: {id: Number(id)}, include: {books: true}});
const createUser = (data) => prisma.user.create({data});
const updateUser = (id, data) => prisma.user.update({where: {id: Number(id)}, data});
const deleteUser = (id) => prisma.user.delete({where: {id: Number(id)}});

module.exports = {getAllUsers, getUserById, createUser, updateUser, deleteUser};