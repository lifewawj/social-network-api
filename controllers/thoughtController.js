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

            res.status(200).json({ thought, message: "Thought Successfully Deleted" });
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // UPDATE a Thought
    async updateThoughtById(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'Thought does not exist with this id' })
            }

            res.status(200).json({ thought, message: "Thought Successfully Updated" })
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async addReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );

            if (!thought) {
                res.status(404).json({ message: "Thought or Reaction not exist with this id" });
            }

            res.status(200).json({ thought, message: "Reaction Successfully Added" })
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );

            if (!thought) {
                res.status(404).json({ message: "Thought or Reaction does not exist with this id" });
            }

            res.status(200).json({ thought, message: "Reaction Successfully Deleted" })
        } catch (error) {
            res.status(500).json(error);
        }
    },
};