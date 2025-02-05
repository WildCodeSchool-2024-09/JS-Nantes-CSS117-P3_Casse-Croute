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
import ingToRecActions from "./modules/ingToRec/ingToRecActions";
import ingredientActions from "./modules/ingredient/ingredientActions";
import recetteActions from "./modules/recette/recetteActions";
import stepActions from "./modules/steps/stepActions";

// Routes pour les ingrédients
router.get("/api/ingredient", ingredientActions.browse);
router.post("/api/ingredient", ingredientActions.add);
router.put("/api/ingredient/:id", ingredientActions.edit);

// Routes liées aux recettes
router.get("/api/recette", recetteActions.browse);
router.get("/api/daterecette", recetteActions.browseLatestArrival);
router.get("/api/recette/:id", recetteActions.read);
router.post("/api/recette", recetteActions.add);
router.put("/api/recette/:id", recetteActions.edit);
router.delete("/api/recette/:id", recetteActions.del);

//Routes pour ajouter une ingredient à une recette
router.get("/api/ingredientsAdded", ingToRecActions.browse);
router.post("/api/ingredientsAdded", ingToRecActions.add);

//Routes pour ajouter des étapes aux recettes
router.get("/api/stepsAdded", stepActions.browse);
router.post("/api/stepsAdded", stepActions.add);

export default router;
