const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const IdeaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    pieces: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },

    likes: [{
        type: ObjectId,
        ref: 'User',
    }],
    comments: [{
        type: ObjectId,
        ref: 'User',
    }],
    _ownerId: {
        type: ObjectId,
        ref: 'User',
    },


});

const Idea = mongoose.model('Idea', IdeaSchema);

module.exports = Idea;