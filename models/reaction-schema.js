const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: true,
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        // TODO: Use a getter method to format the timestamp on query within the routes
    }
});


// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
// Rewatch the subdocument part in the UCSD recording for NoSQL


module.exports = reactionSchema;