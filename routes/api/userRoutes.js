const router = require("express").Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
} = require("../../controllers/userController");

// /api/users

router.route("/").get(getAllUsers).post(createUser);

// /api/users/:userId

router.route("/:userId").get(getUserById).put(updateUserById).delete(deleteUserById)

module.exports = router;