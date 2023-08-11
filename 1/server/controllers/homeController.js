const router = require('express').Router();
const userManager = require('../managers/userManager');

router.get('/home', async(req, res)=>{
    // console.log(req.cookies['cookie']._id);
    const user = await userManager.getUser(req.cookies['cookie']?._id);
    res.json(user);
});

module.exports = router;