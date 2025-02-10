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

  async readAll(where = {}) {
    // Execute the SQL SELECT query to retrieve all users from the "utilisateur" table
    const [rows] = await databaseClient.query<Rows>(
      "select * from utilisateur",
    );

    // Return the array of users
    return rows as User[];
  }

  async create(user: User) {
    // Execute the SQL INSERT query to create a new user
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO utilisateur (pseudo, email, date_inscription, photo_profil, est_admin, mot_de_passe) values (?, ?, ?, ?, ?, ?)",
      [
        user.pseudo,
        user.email,
        user.date_inscription,
        user.photo_profil,
        user.est_admin,
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
