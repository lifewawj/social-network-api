const router = require("express").Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    deleteFriend,
    addFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getUserById).put(updateUserById).delete(deleteUserById);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/friendId").put(addFriend).delete(deleteFriend);


module.exports = router;

