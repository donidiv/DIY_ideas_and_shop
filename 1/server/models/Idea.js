const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },


});

const Idea = mongoose.model('Idea', IdeaSchema);

module.exports = Idea;