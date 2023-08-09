const Idea = require("../models/Idea");
const User = require("../models/User");

exports.getAll = async (qs) => {
  //maybe i can use it for home page - to show owner's ideas
  let query = Idea.find().populate("_ownerId");

  if (qs.where) {
    let [fieldName, ownerId] = qs.where.split("=");
    ownerId = ownerId.replaceAll('"', "");
    query = query.where("_ownerId").eq(ownerId); // query = query.find({_ownerId: ownerId}); ⬅ it also works!
  }
  const result = await query;
  return result;
};

exports.getAllIdeas = async () => Idea.find().populate("_ownerId");

exports.getOne = (ideaId) => Idea.findById(ideaId).populate("_ownerId");

exports.create = async (ideaData) => {
  const idea = await Idea.create(ideaData);
  const owner = await User.findById(idea._ownerId._id);
  console.log(owner);
  console.log(idea);
  owner.ideas.push(idea._id);
  await owner.save();
}

exports.update = (ideaId, ideaData) => Idea.findByIdAndUpdate(ideaId, ideaData);
exports.like = async (ideaId, like, userId) => {
  const idea = await Idea.findById(ideaId).populate("_ownerId");

  if (like) {
    idea.likes.push(userId);
    // console.log('liked');

    // Idea.findByIdAndUpdate(ideaId, {$push: { likes: userId }})
  } else if (!like) {
    // console.log('disliked');
    idea.likes.pull(userId);
    // Idea.findByIdAndUpdate(ideaId, {$pull: { likes: userId }})
  }
  await idea.save();
};

exports.buy = async (ideaId, buy, userId) => {
  const idea = await Idea.findById(ideaId).populate("_ownerId");
  const newPieces = Number(idea.pieces) - 1;
  idea.pieces = newPieces;
  await idea.save();
  //-----------------------------------

  const currentUser = await User.findById(userId);
  const owner = await User.findById(idea._ownerId._id);

  const b = `${ideaId} | ${idea.name} | ${idea.price} | 1`;
  const bb = `${ideaId} | ${idea.name} | ${idea.price}`;
  const s = `${ideaId} | ${idea.name} | ${idea.price} | 1`;
  const ss = `${ideaId} | ${idea.name} | ${idea.price}`;


  // const id = b.split(" | ").slice(0, 1).toString();
  // // console.log(id);

  const toPull = currentUser.bought.filter(x=>x.includes(bb)).toString();
  const toPulll = owner.sold.filter(x=>x.includes(ss)).toString();

  
  if (!toPull){
    currentUser.bought.push(b);
    await currentUser.save();
  } else {
    const newPU = Number(toPull.split(' | ').slice(3).toString()) + 1
    currentUser.bought.pull(toPull);
    
     currentUser.bought.push(`${ideaId} | ${idea.name} | ${idea.price} | ${newPU}`)
     await currentUser.save();
  }

  if (!toPulll){
    owner.sold.push(s);
    await owner.save();
  } else {
    const newPO = Number(toPulll.split(' | ').slice(3).toString()) + 1;
    owner.sold.pull(toPulll);

    owner.sold.push(`${ideaId} | ${idea.name} | ${idea.price} | ${newPO}`)
    await owner.save();
  }

};

exports.comment = async (ideaId, comment, userId) => {
  const idea = await Idea.findById(ideaId);
  const user = await User.findById(userId);
  console.log(user);


  // const toCom = comment;
  console.log(comment, '😀from here');
  idea.comments.push(`${userId} | ${user.username} | ${comment}`);
  await idea.save();

}

exports.delete = (ideaId) => Idea.findByIdAndDelete(ideaId);
