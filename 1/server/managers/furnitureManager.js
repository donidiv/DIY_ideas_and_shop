const Furniture = require('../models/Furniture');

exports.getAll = async(qs) => {
    let query = Furniture.find();

    if (qs.where) {
        let [fieldName, ownerId] = qs.where.split('=');
        ownerId = ownerId.replaceAll('"', '');
        query = query.where('_ownerId').eq(ownerId);// query = query.find({_ownerId: ownerId}); ⬅ it also works!
    }
    const result = await query;
    return result;
}

exports.getOne = (furnitureId) => Furniture.findById(furnitureId);

exports.create = (furnitureData) => Furniture.create(furnitureData);

exports.update = (furnitureId, furnitureData) => Furniture.findByIdAndUpdate(furnitureId, furnitureData);

exports.delete = (furnitureData) => Furniture.findByIdAndDelete(furnitureData);
