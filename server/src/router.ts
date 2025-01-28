import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

// Define user-related routes
import authActions from "./modules/auth/authActions";
import userActions from "./modules/user/userActions";

//User related routes

//Retrieve user data
router.get("/api/users", userActions.browse);
//Add user data
router.post("/api/users", userActions.hashPassword, userActions.add);
//Login
router.post("/api/users/login", authActions.login);

/* ************************************************************************* */

// Define casseCroute-related routes
import ingredientActions from "./modules/ingredient/ingredientActions";
import recetteActions from "./modules/recette/recetteActions";

// Routes pour les ingrédients
router.get("/api/ingredient", ingredientActions.browse);

// Routes liées aux recettes
router.get("/api/recette", recetteActions.browse);
router.get("/api/daterecette", recetteActions.browseLatestArrival);
router.get("/api/recette/:id", recetteActions.read);

/* ************************************************************************* */
// !!!!!!!!!!!!!!!!!!!!!!!!!!VERIFICATION WALL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
/* ************************************************************************* */
router.use(authActions.verifyToken);

router.post("/api/recette", recetteActions.add);
router.put("/api/recette/:id", recetteActions.edit);
router.delete("/api/recette/:id", recetteActions.del);

router.post("/api/ingredient", ingredientActions.add);
router.put("/api/ingredient/:id", ingredientActions.edit);

export default router;
