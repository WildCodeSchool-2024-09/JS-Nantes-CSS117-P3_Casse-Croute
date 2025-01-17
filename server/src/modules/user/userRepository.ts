import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  pseudo: string;
  email: string;
  date_inscription: string;
  photo_profil: string;
  profilePic: string;
  est_admin: boolean;
};

class userRepository {
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from item where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as User;
  }

  async readAll(where = {}) {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>(
      "select * from utilisateur",
    );

    // Return the array of items
    return rows as User[];
  }
}
export default new userRepository();
