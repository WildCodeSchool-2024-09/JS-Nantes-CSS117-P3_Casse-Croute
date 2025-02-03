import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { Ingredient, IngredientToRecette } from "../ingredient/ingredient";

class IngToRecRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM ingredient_recette",
    );

    return rows as IngredientToRecette[];
  }

  async create(ingredient: IngredientToRecette) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO ingredient_recette (recette_ref, ingredient_id, quantite, unite) VALUES (?, ?, ?, ?)",
      [
        ingredient.recette_ref,
        ingredient.id,
        ingredient.quantite,
        ingredient.unite,
      ],
    );
    return result.affectedRows;
  }
}
export default new IngToRecRepository();
