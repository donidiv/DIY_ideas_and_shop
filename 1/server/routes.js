const router = require('express').Router();

const userController = require('./controllers/userController');
const ideaController = require('./controllers/ideaController');

router.use('/api/users', userController);
router.use('/api/ideas', ideaController);

module.exports = router;