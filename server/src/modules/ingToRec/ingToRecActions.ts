import type { RequestHandler } from "express";
import ingToRecRepository from "./ingToRecRepository";

const browse: RequestHandler = async (req, res) => {
  try {
    const IngredientToRecette = await ingToRecRepository.readAll();
    res.json(IngredientToRecette);
  } catch (err) {
    console.error(err);
  }
};

const add: RequestHandler = async (req, res) => {
  const ingredientsToAdd = req.body; // Get the array of ingredients
  try {
    let successCount = 0; // Track how many ingredients were successfully added

    for (const ingredient of ingredientsToAdd) {
      // Iterate through the array
      try {
        const addIngToRec = await ingToRecRepository.create(ingredient);
        if (addIngToRec) {
          successCount++;
        } else {
          console.error(`Failed to add ingredient: ${ingredient.id}`); // Log specific failures
        }
      } catch (err) {
        console.error(`Error adding ingredient ${ingredient.id}:`, err);
        // Consider whether to break here or continue adding other ingredients
      }
    }

    if (successCount === ingredientsToAdd.length) {
      // All were added successfully
      res.status(201).send("All ingredients added successfully");
    } else if (successCount > 0) {
      res
        .status(200)
        .send(
          `${successCount} of ${ingredientsToAdd.length} ingredients added successfully.`,
        ); // Partial success
    } else {
      res.status(500).send("Failed to add any ingredients."); // None were added
    }
  } catch (err) {
    res.status(500).send("A global error occurred adding ingredients."); // More general error message
  }
};

export default { browse, add };
