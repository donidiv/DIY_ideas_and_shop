const router = require('express').Router();

const ideaManager = require('../managers/ideaManager');

router.get('/', async(req, res)=>{

    const ideas = await ideaManager.getAll(req.query);

    res.json(ideas);
});

router.post('/create', async(req, res)=>{
    try {
        console.log([req.cookies['cookie']._id, 'req cookie owner id']);
      await ideaManager.create({
        ...req.body,
        _ownerId: req.cookies['cookie']._id
    });  
      res.status(204).end();
    } catch (err) {
        console.log(err.message);
        res.status(400).json({
            message: 'Can not create !',
            
        })  
              
    }
    
});

router.get('/:ideaId/details', async (req, res)=>{
    const idea = await ideaManager.getOne(req.params.ideaId);

    res.json(idea);
});

router.put('/:ideaId', async (req, res) => {
    await ideaManager.update(req.params.ideaId, req.body);

    res.status(204).end();
});

router.delete('/:ideaId', async (req, res) => {
    await ideaManager.delete(req.params.ideaId);

    res.status(204).end();
});

module.exports = router;