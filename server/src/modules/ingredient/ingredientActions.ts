import type { RequestHandler } from "express";
import ingredientRepository from "./ingredientRepository";

const browse: RequestHandler = async (req, res) => {
  try {
    const ingredient = await ingredientRepository.readAll();
    res.json(ingredient);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur.");
  }
};

const browseSeason: RequestHandler = async (req, res) => {
  try {
    const ingredient = await ingredientRepository.seasonReadAll();
    res.json(ingredient);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur.");
  }
};

const add: RequestHandler = async (req, res) => {
  try {
    const addIngredient = await ingredientRepository.create(req.body);

    if (addIngredient) {
      res
        .status(201)
        .send(`L'ingrédient : ${req.body.name}, à bien été ajouté`);
    } else {
      res.status(404).send("Une erreur a été rencontré");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur.");
  }
};

const edit: RequestHandler = async (req, res) => {
  try {
    const { nom, categorie, saison, icone_categorie } = req.body;
    const { id } = req.params;
    const editIngredient = await ingredientRepository.update({
      nom,
      categorie,
      saison,
      icone_categorie,
    });

    if (editIngredient) {
      res.sendStatus(204);
    } else {
      res.status(404).send("Une erreur a été rencontré");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur.");
  }
};

export default { browse, add, edit, browseSeason };
