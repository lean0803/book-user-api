const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../models/userModel');


// Ambil semua pengguna
const getUsers = async (req, res) => {
    try {
      const users = await getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan", error });
    }
  };
  
  // Ambil pengguna berdasarkan ID
  const getUser = async (req, res) => {
    try {
      const user = await getUserById(req.params.id);
      if (!user) return res.status(404).json({ message: "Pengguna tidak ditemukan" });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan", error });
    }
  };
  
  // Tambah pengguna baru
  const addUser = async (req, res) => {
    try {
      const user = await createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Gagal menambahkan pengguna", error });
    }
  };
  
  // Update pengguna berdasarkan ID
  const editUser = async (req, res) => {
    try {
      const user = await updateUser(req.params.id, req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Gagal memperbarui pengguna", error });
    }
  };
  
  // Hapus pengguna berdasarkan ID
  const removeUser = async (req, res) => {
    try {
      await deleteUser(req.params.id);
      res.json({ message: "Pengguna berhasil dihapus" });
    } catch (error) {
      res.status(500).json({ message: "Gagal menghapus pengguna", error });
    }
  };
  
  module.exports = { getUsers, getUser, addUser, editUser, removeUser };