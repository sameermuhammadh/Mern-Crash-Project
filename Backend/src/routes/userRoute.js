const express = require("express");
const {createUser, login, logout, getProfile, updateProfile} = require('../controllers/userController');
const checkToken = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", createUser);
router.post("/login", login);
router.get("/profile", checkToken, getProfile);
router.put("/profile", checkToken, updateProfile);
router.post("/logout", logout);

module.exports = router;