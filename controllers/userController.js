// const { Thought } = require('../models/thought-model');
const User = require("../models/user-model");

module.exports = {
    // GET All Users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            
            res.status(200).json(users);
        } catch (error) {
            return res.status(500).json(error);
        };
    },

    // GET a User by Id
    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        };
    },

    // POST (CREATE) a User
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);

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

            res.status(200).json({ message: 'User and Thoughts Deleted' });
        } catch (error) {
            res.status(500).json(error);
        }
    },
};