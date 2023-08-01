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
        res.cookie('cookie', result, { httpOnly: true, }) // { httpOnly: true, sameSite: 'none', secure: true } research
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
        res.cookie('cookie', result, { httpOnly: true, }) // { httpOnly: true, sameSite: 'none', secure: true } research
        
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


module.exports = router;