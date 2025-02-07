import type { RequestHandler } from "express";
import stepRepository from "./stepRepository";

const browse: RequestHandler = async (req, res) => {
  try {
    const recipeSteps = await stepRepository.readAll();
    res.json(recipeSteps);
  } catch (err) {
    console.error(err);
  }
};

const add: RequestHandler = async (req, res) => {
  const { preparation, recette_ref } = req.body;

  try {
    const addStepsResult = await stepRepository.create({
      preparation,
      recette_ref,
    });

    if (addStepsResult > 0) {
      // Check if ANY rows were inserted
      res.status(201).send(`${addStepsResult} step(s) added successfully`);
    } else {
      res.status(200).send("No steps were added (or perhaps some failed).");
    }
  } catch (err) {
    res.status(500).send("A global error occurred adding steps.");
  }
};

export default { browse, add };
