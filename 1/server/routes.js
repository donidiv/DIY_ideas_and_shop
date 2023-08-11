const router = require('express').Router();

const userController = require('./controllers/userController');
const ideaController = require('./controllers/ideaController');
const homeController = require('./controllers/homeController');

router.use('/api/users', userController);
router.use('/api/ideas', ideaController);
router.use('/api', homeController);

module.exports = router;