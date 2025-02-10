import argon2 from "argon2";
import type { RequestHandler } from "express";
import userRepository from "./userRepository";
import type { User } from "./userRepository";

// Import access to data
// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all users
    const users = await userRepository.readAll();

    // Respond with the users in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    // Create a new user object
    const newUser: User = {
      email: req.body.email,
      mot_de_passe: req.body.password,
      pseudo: req.body.pseudo,
    };
    // Insert the new user into the database
    const insertedUser = await userRepository.create(newUser);
    res.status(201).json({ insertedUser });
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const user = {
      id: Number(req.params.id),
      pseudo: req.body.pseudo,
      email: req.body.email,
      mot_de_passe: req.body.mot_de_passe,
      date_inscription: req.body.date_inscription,
      photo_profil: req.body.photo_profil,
      est_admin: req.body.est_admin,
    };
    const affectedRows = await userRepository.updateAdmin(user);
    if (affectedRows === 0) {
      res.status(404).json({
        error: "Erreur lors de la mise à jour des droits administrateur.",
      });
    } else {
      res
        .status(204)
        .json({ error: "Rôle de l'utilisateur mis à jour avec succès 🎉" });
    }
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number(req.params.id);
    if (!userId) {
      res.status(400).json({ error: "L'ID utilisateur est invalide" });
    }
    const result = await userRepository.delete(userId);
    if (result >= 0) {
      res.sendStatus(204);
    } else {
      res
        .status(404)
        .json({ error: "Utilisateur non trouvé ou déjà supprimé" });
    }
  } catch (err) {
    next(err);
  }
};

const hashPassword: RequestHandler = async (req, res, next) => {
  //Definir les options de hashage
  const hashOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 17,
    hashLength: 50,
    parallelism: 1,
    iteration: 2,
  };
  try {
    const { password } = req.body; //recuperer le mot de passe en destructurant l'ojet req.body

    const hash = await argon2.hash(password, hashOptions); //hasher le mot de passe
    if (hash) {
      req.body.password = hash; //remplacer le mot de passe par le hash
      next(); // continue vers la prochaine fonction (add)
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    next(err);
  }
};
const verified: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existe = await userRepository.verifiedEmail(email);
    if (existe) {
      res.status(409).send("Email déjà utilisé");
      return;
    }
    next();
  } catch (err) {
    console.error(err);
  }
};

//addition of image
const imageUpload: RequestHandler = async (req, res) => {
  try {
    res.status(200).send({ message: `${req.file?.filename} a été crée` });
  } catch (err) {
    console.error(err);
  }
};

export default {
  browse,
  add,
  hashPassword,
  verified,
  imageUpload,
  edit,
  destroy,
};
