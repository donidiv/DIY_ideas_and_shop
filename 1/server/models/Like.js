const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const LikeSchema = new mongoose.Schema({
    
    usersId: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],


});

const Like = mongoose.model('Like', LikeSchema);

module.exports = Like;