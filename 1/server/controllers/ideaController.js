const router = require('express').Router();

const ideaManager = require('../managers/ideaManager');

router.get('/', async(req, res)=>{

    const ideas = await ideaManager.getAll(req.query);

    res.json(ideas);
});

router.post('/', async(req, res)=>{
    try {
      await ideaManager.create({
        ...req.body,
        _ownerId: req.user._id});  
      res.status(204).end();
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: 'Can not create !',
        })        
    }
    
});

router.get('/:furnitureId', async (req, res)=>{
    const furniture = await furnitureManager.getOne(req.params.furnitureId);

    res.json(furniture);
});

router.put('/:furnitureId', async (req, res) => {
    await furnitureManager.update(req.params.furnitureId, req.body);

    res.status(204).end();
});

router.delete('/:furnitureId', async (req, res) => {
    await furnitureManager.delete(req.params.furnitureId);

    res.status(204).end();
});

module.exports = router;