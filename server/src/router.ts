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

/* ************************************************************************* */

// Define casseCroute-related routes

import ingredientActions from "./modules/ingredient/ingredientActions";
import recetteActions from "./modules/recette/recetteActions";

// Routes pour les ingrédients
// Je laisse le Get par id et le delete à d'autre
router.get("/api/ingredient", ingredientActions.browse);
router.post("/api/ingredient", ingredientActions.add);
router.put("/api/ingredient/:id", ingredientActions.edit);
// router.delete("/api/ingredient/:id", ingredientActions.del);

// Routes liées aux recettes
//reste à créer des middlewares
router.get("/api/recette", recetteActions.browse); // Récupérer toutes les recettes (résumé)
router.get("/api/recette/:id", recetteActions.read); // Récupérer une recette spécifique (détail)
router.post("/api/recette", recetteActions.add); // Ajouter une recette
router.put("/api/recette/:id", recetteActions.edit); // Modifier une recette
router.delete("/api/recette/:id", recetteActions.del); // Supprimer une recette

export default router;
