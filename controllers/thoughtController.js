const Thought = require("../models/thought-model");
const User = require("../models/user-model");

module.exports = {
    // GET All Thoughts
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find().select("-__v");

            res.status(200).json(thoughts);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // GET One Thought by Id
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId }).select("-__v");

            if (!thought) {
                return res.status(404).json({ message: 'Thought does not exist with this id' })
            }

            res.status(200).json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // CREATE a Thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);

            res.status(200).json({ thought, message: "Thought Successfully Created" });
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // DELETE a Thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'Thought does not exist with this id' })
            }

            res.status(200).json({ thought, message: "Thought Successfully Deleted"});
        } catch (error) {
            res.status(500).json(error);
        }
    }
};