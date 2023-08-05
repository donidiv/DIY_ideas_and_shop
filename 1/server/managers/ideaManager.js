const Idea = require('../models/Idea');

exports.getAll = async(qs) => {
    let query = Idea.find().populate('_ownerId');

    if (qs.where) {
        let [fieldName, ownerId] = qs.where.split('=');
        ownerId = ownerId.replaceAll('"', '');
        query = query.where('_ownerId').eq(ownerId);// query = query.find({_ownerId: ownerId}); ⬅ it also works!
    }
    const result = await query;
    return result;
}

exports.getOne = (ideaId) => Idea.findById(ideaId).populate('_ownerId');

exports.create = (ideaData) => Idea.create(ideaData);

exports.update = (ideaId, ideaData) => Idea.findByIdAndUpdate(ideaId, ideaData);
exports.like = async (ideaId, like, userId) =>{ 
    const idea = await Idea.findById(ideaId)

    if (like) {
        idea.likes.push(userId)
        console.log('liked');

        // Idea.findByIdAndUpdate(ideaId, {$push: { likes: userId }})
    } else if (!like) {
        console.log('disliked');
        idea.likes.pull(userId);
        // Idea.findByIdAndUpdate(ideaId, {$pull: { likes: userId }})
    }
    await idea.save()
    } 

exports.delete = (ideaId) => Idea.findByIdAndDelete(ideaId);
