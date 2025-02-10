import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import { getSeason } from "../../utils/helpers";
import type { Recette } from "./recette";

class RecetteRepository {
  // Lire toutes les recettes
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM recette ORDER BY id",
    );
    return rows;
  }
  async seasonReadAll() {
    const currentSeason = getSeason();
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM recette WHERE saison = ? ORDER BY description ASC LIMIT 6",
      [currentSeason],
    );
    return rows;
  }

  // Recipes Users

  async userRecipes() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM recette JOIN utilisateur WHERE utilisateur.id",
    );
    return rows;
  }

  async lastReadFour() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM recette ORDER BY date_publication DESC LIMIT 4",
    );
    return rows;
  }

  // Lire une recette par ID
  async readById(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT 
          r.id,
          r.titre,
          r.description,
          r.date_publication,
          r.image_url,
          r.saison,
          t.nom AS categorie, -- Récupération de la catégorie
          (SELECT JSON_ARRAYAGG(JSON_OBJECT('id', e.id, 'ordre', e.ordre, 'description', e.description)) 
           FROM etape_preparation e WHERE e.recette_id = r.id) AS etapes,
          (SELECT JSON_ARRAYAGG(JSON_OBJECT('id', ir.ingredient_id, 'quantite', ir.quantite, 'unite', ir.unite)) 
           FROM ingredient_recette ir WHERE ir.recette_id = r.id) AS ingredients,
          (SELECT JSON_ARRAYAGG(JSON_OBJECT('id', a.id, 'note', a.note, 'commentaire', a.commentaire, 'date_avis', a.date_avis)) 
           FROM avis a WHERE a.recette_id = r.id) AS commentaires
      FROM recette r
      LEFT JOIN type_recette t ON r.type_id = t.id -- Jointure avec type_recette
      WHERE r.id = ?;
    `,
      [id],
    );

    if (rows.length > 0) {
      return rows[0];
    }
  }

  // Créer une recette
  async create(recette: Recette) {
    const [row] = await databaseClient.query<Result>(
      "INSERT INTO recette (titre, recette_ref, description, date_publication, image_url, saison, type_id, difficulte_id, temps_id, utilisateur_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        recette.titre,
        recette.recette_ref,
        recette.description,
        recette.date_publication,
        recette.image_url,
        recette.saison,
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
      "UPDATE recette SET titre = ?, description = ?, date_publication = ?, image_url = ?, saison = ?, type_id = ?, difficulte_id = ?, temps_id = ?, utilisateur_id = ? WHERE id = ?",
      [
        recette.titre,
        recette.description,
        recette.date_publication,
        recette.image_url,
        recette.saison,
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
