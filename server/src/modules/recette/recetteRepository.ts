import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { Recette } from "./recette";

class RecetteRepository {
  // Lire toutes les recettes
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM recette ORDER BY id",
    );
    return rows;
  }

  // Lire une recette par ID
  async readById(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
            SELECT 
                r.*, 
                GROUP_CONCAT(DISTINCT JSON_OBJECT('id', e.id, 'ordre', e.ordre, 'description', e.description)) AS etapes,
                GROUP_CONCAT(DISTINCT JSON_OBJECT('id', ir.ingredient_id, 'quantite', ir.quantite, 'unite', ir.unite)) AS ingredients,
                GROUP_CONCAT(DISTINCT JSON_OBJECT('id', a.id, 'note', a.note, 'commentaire', a.commentaire, 'date_avis', a.date_avis)) AS commentaires
            FROM recette r
            LEFT JOIN etape_preparation e ON r.id = e.recette_id
            LEFT JOIN ingredient_recette ir ON r.id = ir.recette_id
            LEFT JOIN avis a ON r.id = a.recette_id
            WHERE r.id = ?
            GROUP BY r.id
            `,
      [id],
    );

    if (rows.length > 0) {
      const recette = rows[0];
      // Parse les champs JSON (les champs joints comme étapes, ingrédients, et commentaires)
      recette.etapes = JSON.parse(`[${recette.etapes}]`);
      recette.ingredients = JSON.parse(`[${recette.ingredients}]`);
      recette.commentaires = JSON.parse(`[${recette.commentaires}]`);
      return recette;
    }
  }

  // Créer une recette
  async create(recette: Recette) {
    const [row] = await databaseClient.query<Result>(
      "INSERT INTO recette (titre, description, date_publication, image_url, saisonnalite, type_id, difficulte_id, temps_id, utilisateur_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        recette.titre,
        recette.description,
        recette.date_publication,
        recette.image_url,
        recette.saisonnalite,
        recette.type_id,
        recette.difficulte_id,
        recette.temps_id,
        recette.utilisateur_id,
      ],
    );
    return row.insertId;
  }

  // Mettre à jour une recette
  async update(recette: Recette) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE recette SET titre = ?, description = ?, date_publication = ?, image_url = ?, saisonnalite = ?, type_id = ?, difficulte_id = ?, temps_id = ?, utilisateur_id = ? WHERE id = ?",
      [
        recette.titre,
        recette.description,
        recette.date_publication,
        recette.image_url,
        recette.saisonnalite,
        recette.type_id,
        recette.difficulte_id,
        recette.temps_id,
        recette.utilisateur_id,
        recette.id,
      ],
    );
    return result.affectedRows;
  }

  // Supprimer une recette
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM recette WHERE id = ?",
      [id],
    );

    return result.affectedRows > 0;
  }
}

export default new RecetteRepository();
