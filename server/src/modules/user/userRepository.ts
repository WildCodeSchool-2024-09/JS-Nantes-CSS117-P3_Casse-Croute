import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

export type User = {
  id?: number;
  pseudo?: string | null;
  mot_de_passe: string;
  email: string;
  date_inscription?: string | null;
  photo_profil?: string | null;
  est_admin?: boolean | null;
};

class userRepository {
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific user by ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from item where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the user
    return rows[0] as User;
  }

  async updateAdmin(user: User) {
    const [result] = await databaseClient.query<Result>(
      "update utilisateur set est_admin = ? WHERE id = ?",
      [user.est_admin, user.id],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM utilisateur WHERE id = ?",
      [id],
    );
    return result.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "utilisateur" table
    const [rows] = await databaseClient.query<Rows>(
      "select id, pseudo, email, photo_profil, est_admin from utilisateur",
    );

    // Return the array of users
    return rows as User[];
  }

  async readUserRecipes(userId: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT u.id, u.pseudo, u.email, u.photo_profil, u.est_admin, r.id AS recette_id, r.titre, r.description FROM utilisateur u JOIN recette r ON r.utilisateur_id = u.id WHERE u.id = ?",
      [userId],
    );
    return rows as User[];
  }

  async create(user: User) {
    // Execute the SQL INSERT query to create a new user
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO utilisateur (pseudo, email, date_inscription, photo_profil, mot_de_passe) values (?, ?, ?, ?, ?)",
      [
        user.pseudo,
        user.email,
        user.date_inscription,
        user.photo_profil,
        user.mot_de_passe,
      ],
    );

    // Return the ID of the newly created user
    return result.insertId;
  }
  async getUserByEmail(email: string) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from utilisateur where email = ?",
      [email],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as User;
  }

  async verifiedEmail(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from utilisateur where email = ?",
      [email],
    );
    return rows[0] as User;
  }
}
export default new userRepository();
