const { Router } = require('express');
const controllers = require('../controllers');
const restrict = require('../helpers');
const router = Router();

// Display endpoints
router.get('/', (req, res) => res.send('This is root!'));
router.get('/stars', controllers.getAllStars);
router.get('/stars/:star_id', controllers.getStar);
router.get('/users/:user_id/stars', controllers.getStarsByUser);

// User account endpoits
router.get('/users/:user_id', controllers.getUser);
router.post('/signup', controllers.signup);
router.post('/signin', controllers.signin);
router.put('/users/:user_id', restrict, controllers.updateUser);

// Creation endpoints -- will add 'restrict' when front end is set
router.post('/users/:user_id/stars', restrict, controllers.createStar);
router.post('/users/:user_id/:star_id/planets', restrict, controllers.createPlanet);
router.post('/users/:user_id/:planet_id/moons', controllers.createMoon);

// Update endpoints
router.put('/users/:user_id/stars/:star_id', restrict, controllers.updateStar);
router.put('/users/:user_id/planets/:planet_id', controllers.updatePlanet);
router.put('/users/:user_id/moons/:moon_id', controllers.updateMoon);

// Delete endpoints
router.delete('/users/:user_id/stars/:star_id', restrict, controllers.deleteStar);

module.exports = router;