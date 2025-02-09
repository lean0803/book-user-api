const express = require("express");
const {
  getUsers,
  getUser,
  addUser,
  editUser,
  removeUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);          // Route untuk mengambil semua pengguna
router.get("/:id", getUser);        // Route untuk mengambil satu pengguna berdasarkan ID
router.post("/", addUser);          // Route untuk menambahkan pengguna baru
router.put("/:id", editUser);       // Route untuk mengupdate pengguna berdasarkan ID
router.delete("/:id", removeUser);  // Route untuk menghapus pengguna berdasarkan ID

module.exports = router;
