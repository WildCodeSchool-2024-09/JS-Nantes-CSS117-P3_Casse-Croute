import type { RequestHandler } from "express";
import recetteRepository from "./recetteRepository";

// Récupérer toutes les recettes
const browse: RequestHandler = async (req, res, next) => {
  try {
    const recipes = await recetteRepository.readAll();
    res.status(200).json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur.");
  }
};

const browseSeason: RequestHandler = async (req, res) => {
  try {
    const ingredient = await recetteRepository.seasonReadAll();
    res.json(ingredient);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur.");
  }
};

const browseLatestArrival: RequestHandler = async (req, res, next) => {
  try {
    const recipes = await recetteRepository.lastReadFour();
    res.status(200).json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur.");
  }
};

const browsUserRecipes: RequestHandler = async (req, res, next) => {
  try {
    const userRecipes = await recetteRepository.userRecipes();
    if (!userRecipes) {
      res.status(404).send("Aucune recette trouvée.");
    } else {
      res.status(200).json(userRecipes);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur.");
  }
};

// Récupérer une recette spécifique par ID
const read: RequestHandler = async (req, res, next) => {
  try {
    const recipeId = Number.parseInt(req.params.id, 10);

    const recipe = await recetteRepository.readById(recipeId);

    if (!recipe) {
      res.status(404).send("Recette non trouvée.");
    } else {
      res.status(200).json(recipe);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur.");
  }
};

// Ajouter une recette
const add: RequestHandler = async (req, res, next) => {
  try {
    const newRecipeId = await recetteRepository.create(req.body);

    if (newRecipeId) {
      res.status(201).send("La recette a bien été ajoutée.");
    } else {
      res.status(400).send("Erreur lors de l'ajout de la recette.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur.");
  }
};

// Modifier une recette existante
const edit: RequestHandler = async (req, res, next) => {
  try {
    const recipeId = Number.parseInt(req.params.id, 10);

    const updatedRecipe = await recetteRepository.update({
      ...req.body,
      id: recipeId,
    });

    if (updatedRecipe) {
      res.status(200).send("Recette mise à jour avec succès.");
    } else {
      res.status(404).send("Recette non trouvée.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur.");
  }
};

// Supprimer une recette
const del: RequestHandler = async (req, res, next) => {
  try {
    const recipeId = Number.parseInt(req.params.id, 10);

    const deleted = await recetteRepository.delete(recipeId);

    if (deleted) {
      res.status(200).send("Recette supprimée avec succès.");
    } else {
      res.status(404).send("Recette non trouvée.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur.");
  }
};

export default {
  browse,
  read,
  add,
  edit,
  del,
  browseLatestArrival,
  browseSeason,
  browsUserRecipes,
};
