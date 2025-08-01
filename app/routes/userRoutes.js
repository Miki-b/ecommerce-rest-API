const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//get all users
router.get("/", userController.getUser);
// Get Single User
router.get('/:id', userController.getUserById);
//add a user
router.post("/", userController.registerUser);
//update a user by id
router.put("/:id", userController.updateUser);
//delete a user by id
router.delete("/:id", userController.deleteUser);

module.exports = router;


