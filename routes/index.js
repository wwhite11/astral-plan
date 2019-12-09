const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));
router.get('/users/:user_id', controllers.getUser);
router.get('/stars', controllers.getAllStars);
router.get('/stars/:star_id', controllers.getStar);

module.exports = router;