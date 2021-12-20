const { Router } = require('express');
const controller = require('../controllers/Controller.js');

const router = Router();

router.get('/', (req, res) => res.send('This is working!!'));
router.get('/getallprofiles', controller.getAllProfiles);
router.post('/createprofiles', controller.createProfile);
router.get('/getprofilebyid/:id', controller.getProfileById);

router.get('/getallrecipes', controller.getAllRecipes);
router.post('/createrecipes', controller.createRecipe);
router.get('/getrecipebyid/:id', controller.getRecipeById);
router.put('/recipes/:id', controller.updateRecipe);
router.delete('/recipes/:id', controller.deleteRecipe);

module.exports = router;
