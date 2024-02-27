const { Schema, model } = require('mongoose');

const { reactionSchema } = require('./reaction-schema.js');


const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        validate: {
            // Must be between 1 and 280 characters
            min: 1,
            max: 280,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        // TODO: Use a getter method to format the timestamp on query within the routes
    },
    username: {
        type: String,
        required: true,
        // TODO: The user that created this thought, may have to reference from the user model
    },
    reactions: [reactionSchema]
});


// a virtual called reactionCount that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get( function () {
    return `${this.reactions.length}`;
});


const Thought = model('thought', thoughtSchema); // sets up our Thought model 
// the first param as the custom name for our model
// the sec. param to use our thoughtSchema as the reference)

module.exports = Thought; // export our Thought Model