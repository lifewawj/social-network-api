const Thought = require('../models/thought-model');

module.exports = {
    async getAllThoughts (req, res) {
        try {
            const thoughts = Thought.find()
            .select("-__v");

            res.status(200).json(thoughts);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
}