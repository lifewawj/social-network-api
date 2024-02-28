const { Thought } = require('../models');
const { User } = require('../models/user-model')

// http://localhost:3001/api/user

const userController = {

    async getAllUsers(req, res) {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error);
        };
    },

    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })

            res.status(200).json(user);
        } catch (error) {
            res.status(200).json(error);
        };
    },

    async createUser(req, res) {
        try {
            const user = await User.create(req.body);

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async updateUser(req, res) {
        try {
            const user = User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                res.status(404).json({ message: 'User does not exist with this id' })
            }

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async deleteUser(req, res) {
        try {
            const user = User.findOneAndDelete(
                { _id: req.params.userId }
            );

            res.status(200).json({ message: 'User and Thoughts Deleted' });
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

module.exports = userController;