const Idea = require('../models/Idea');
const User = require('../models/User');

exports.getAll = async(qs) => {//maybe i can use it for home page - to show owner's ideas
    let query = Idea.find().populate('_ownerId');

    if (qs.where) {
        let [fieldName, ownerId] = qs.where.split('=');
        ownerId = ownerId.replaceAll('"', '');
        query = query.where('_ownerId').eq(ownerId);// query = query.find({_ownerId: ownerId}); ⬅ it also works!
    }
    const result = await query;
    return result;
}

exports.getAllIdeas = async() => Idea.find().populate('_ownerId');

exports.getOne = (ideaId) => Idea.findById(ideaId).populate('_ownerId');

exports.create = (ideaData) => Idea.create(ideaData);

exports.update = (ideaId, ideaData) => Idea.findByIdAndUpdate(ideaId, ideaData);
exports.like = async (ideaId, like, userId) =>{ 
    const idea = await Idea.findById(ideaId).populate('_ownerId');

    if (like) {
        idea.likes.push(userId)
        // console.log('liked');

        // Idea.findByIdAndUpdate(ideaId, {$push: { likes: userId }})
    } else if (!like) {
        
        // console.log('disliked');
        idea.likes.pull(userId);
        // Idea.findByIdAndUpdate(ideaId, {$pull: { likes: userId }})
    }
    await idea.save()
    } 

exports.buy = async (ideaId, buy, userId) => {
    const idea = await Idea.findById(ideaId).populate('_ownerId');
    const currentUser = await User.findById(userId);
    console.log(currentUser);
    const owner = await User.findById(idea._ownerId._id);
    console.log(owner);

    const b = {name: idea.name, price: idea.price, pieces: 1};
    const s  = {name: idea.name, price: idea.price, pieces: 1};// pieces: owner.sold.idea.pieces++
    const newPieces = Number(idea.pieces) - 1;
    console.log(newPieces);

    currentUser.bought.push(b);
    await currentUser.save();

    owner.sold.push(s);
    await owner.save();

    idea.pieces = newPieces
    await idea.save();
    
    
}

exports.delete = (ideaId) => Idea.findByIdAndDelete(ideaId);
