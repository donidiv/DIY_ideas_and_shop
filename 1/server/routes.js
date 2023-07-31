const router = require('express').Router();

const userController = require('./controllers/userController');
const furnitureController = require('./controllers/ideaController');

router.use('/api/users', userController);
router.use('/idea', furnitureController);

module.exports = router;