import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { Ingredient } from "./ingredient";

class IngredientRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM ingredient");

    return rows as Ingredient[];
  }

  async create(ingredient: Ingredient) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO ingredient (nom, categorie, saisonnalite, icone_categorie) VALUES (?, ?, ?, ?)",
      [
        ingredient.nom,
        ingredient.categorie,
        ingredient.saisonnalite,
        ingredient.icone_categorie,
      ],
    );
    return result.insertId;
  }

  async update(ingredient: Ingredient) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE ingredient SET nom = ?, categorie = ?, saisonnalite = ?, icone_categorie = ?) WHERE id = ?",
      [
        ingredient.nom,
        ingredient.categorie,
        ingredient.saisonnalite,
        ingredient.icone_categorie,
        ingredient.id,
      ],
    );

    return result.affectedRows;
  }
}

export default new IngredientRepository();
