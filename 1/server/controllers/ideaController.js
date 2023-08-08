const router = require('express').Router();

const ideaManager = require('../managers/ideaManager');

// router.get('/', async(req, res)=>{

//     const ideas = await ideaManager.getAll(req.query);

//     res.json(ideas);
// });

router.get('/catalog', async(req, res)=>{
    const ideas = await ideaManager.getAllIdeas();

    res.json(ideas);
})

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
router.put('/:ideaId/details', async (req, res) => {//me
    // console.log([req.cookies['cookie']._id, 'req cookie owner id']);
    // console.log(req.params.ideaId, req.body, );
    try {
    await ideaManager.like(req.params.ideaId, req.body.like, req.cookies['cookie']._id);
    // console.log(req.body, "req.body");
    res.status(204).end();
        
    } catch (error) {
        console.log(error);
    }

});
router.put('/:ideaId/details/buy', async (req, res) => {//me
    try {
    await ideaManager.buy(req.params.ideaId, req.body.buy, req.cookies['cookie']._id);
    res.status(204).end();
        
    } catch (error) {
        console.log(error);
    }

});

router.post('/:ideaId/details/comment', async (req, res) => {//me
    try {
    await ideaManager.comment(req.params.ideaId, req.body.comment, req.cookies['cookie']._id);
    res.status(204).end();
        
    } catch (error) {
        console.log(error);
    }

});


router.put('/:ideaId/update', async (req, res) => {
    await ideaManager.update(req.params.ideaId, req.body);

    res.status(204).end();
});

router.delete('/:ideaId/details', async (req, res) => {
    await ideaManager.delete(req.params.ideaId);

    res.status(204).end();
});

module.exports = router;