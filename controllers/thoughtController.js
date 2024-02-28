const { Thought } = require('../models/thought-model');

// http://localhost:3001/api/thought

const thoughtController = {
    async getAllThoughts(req, res) {
        try {
        
        } catch (error) {
            return res.status(500).json(error);
        }
    }
};

module.exports = thoughtController;