// const Profile = require('../models/profile');
// const Recipe = require('../models/recipes');
const { Profile, Recipe } = require('../models');

const createProfile = async (req, res) => {
  console.log(req.body);
  try {
    const profiles = await Profile.create(req.body);
    console.log(profiles);
    await profiles.save();
    return res.status(201).json({ profiles });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    return res.status(200).json({ profiles });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const profiles = await Profile.findById(id);
    if (profiles) {
      return res.status(200).json({ profiles });
    }
    return res.status(404).send('This profile does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createRecipe = async (req, res) => {
  console.log(req.body);
  try {
    const recipes = await Recipe.create(req.body);
    console.log(recipes);
    await recipes.save();
    return res.status(201).json({ recipes });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    return res.status(200).json({ recipes });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const recipes = await Recipe.findById(id);
    if (recipes) {
      return res.status(200).json({ recipes });
    }
    return res.status(404).send('This recipe does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getLikedRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.find({ liked: true });
    return res.status(200).json({ recipes });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    await Recipe.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, recipe) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!recipe) {
          res.status(500).send('Recipe not found!');
        }
        return res.status(200).json(recipe);
      }
    );
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Recipe.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Recipe deleted');
    }
    throw new Error('Recipe not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createProfile,
  getAllProfiles,
  getProfileById,
  createRecipe,
  getAllRecipes,
  getRecipeById,
  deleteRecipe,
  updateRecipe,
  getLikedRecipe
};
