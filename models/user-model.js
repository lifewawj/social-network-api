const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,

        // validation using the regex I solved from my regex-tutorial gist on GitHub
        validate: {
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
            message: 'Invalid email format',
        }
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
});


// a virtual called friendCount that retireves the length of the user's friends array field on query
userSchema.virtual('friendCount').get( function () {
    return `${this.username} has ${this.friends.length} friends!`;
});


const User = model('user', userSchema); // sets up our User model
// the first param as the custom name for our model
// the sec. param to use our userSchema as the reference

module.exports = User; // export our User model