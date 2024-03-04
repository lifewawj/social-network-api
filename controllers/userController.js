const User = require("../models/user-model");

module.exports = {
    // GET All Users
    async getAllUsers(req, res) {
        try {
            const users = await User.find() // finds all the users, and returns it
                .select("-__v"); // exclude the __v field inside the MongoDB documents

            res.status(200).json(users);
        } catch (error) {
            return res.status(500).json(error);
        };
    },

    // GET a User by Id
    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId }) // finds the one user with the matching Id and returns it
                .select("-__v"); // exclude the __v field inside the MongoDB documents

            if (!user) {
                return res.status(404).json({ message: 'User does not exist with this id' })
            }

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        };
    },

    // POST (CREATE) a User
    async createUser(req, res) {
        try {
            const user = await User.create(req.body); // Creates a new user with the requested body

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // PUT (UPDATE) a User by Id
    async updateUserById(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'User does not exist with this id' })
            }

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // DELETE a User by Id
    async deleteUserById(req, res) {
        try {
            const user = await User.findOneAndDelete(
                { _id: req.params.userId }
            );

            if (!user) {
                return res.status(404).json({ message: 'User does not exist with this id' })
            }

            res.status(200).json({ message: 'User and Thoughts Deleted' });
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'User does not exist with this id' })
            }

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { new: true }
            );

            res.status(200).json({ user, message: `User's Friend Deleted!` });
        } catch (error) {
            res.status(500).json(error);
        }
    },
};