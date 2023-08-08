const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const CommentSchema = new mongoose.Schema({
       
    comments: [{
        type: String,
    }],
    user: {
        type: ObjectId,
        ref: 'User',
    },


});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;