const { Schema, model } = require("mongoose"); // Imports the Schema and Model from Mongoose

const reactionSchema = require("./reaction-schema"); // Importing the reactionSchema


const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        // Must be between 1 and 280 characters
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toLocaleString(),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
},
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);


// a virtual called reactionCount that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});


const Thought = model("thought", thoughtSchema); // sets up our Thought model 
// the first param as the custom name for our model
// the sec. param to use our thoughtSchema as the reference)

module.exports = Thought; // export our Thought Model