const router = require('express').Router();

const userManager = require('../managers/userManager');

router.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        const result = await userManager.register(req.body);
        console.log(result);
        
        
        
        // return jwt as object
        // res.json(result);

        //return jwt as cookie
        res.cookie('cookie', result, { httpOnly: false, }) // { httpOnly: true, sameSite: 'none', secure: true } research
        res.status(200)
                .send(result);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: 'Some error',
        });
    }
    
});

router.post('/login', async (req, res)=> {
    try {
        console.log('pre manager');
        const result = await userManager.login(req.body);
        console.log(result);
        
        // return jwt as object
        // res.json(result);

        //return jwt as cookie
        res.cookie('cookie', result, { httpOnly: false, }) // { httpOnly: true, sameSite: 'none', secure: true } research
        
        console.log('post cookie');
        console.log(result._id);
        res.status(200)
        .send(result);
        
        
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
    
})

router.get('/logout', (req, res) => {
    res.end();
})

router.get('/profile/personalInfo', async(req, res)=>{
    // console.log(req.cookies['cookie']._id);
    const user = await userManager.getUser(req.cookies['cookie']._id);
    res.json(user);
});

router.put('/profile/personalInfo', async(req, res) => {

    console.log(req.cookies['cookie']._id);
    await userManager.updateUser(req.cookies['cookie']._id, req.body);
    res.status(204).end();
});

router.get('/profile/balance', async(req, res)=>{
    // console.log(req.cookies['cookie']._id);
    const user = await userManager.getUser(req.cookies['cookie']._id);
    res.json(user);
});



module.exports = router;