import express from "express";
import multer from "multer";

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
router.post(
  "/api/users",
  userActions.verified,
  userActions.hashPassword,
  userActions.add,
);
//Login
router.post("/api/users/login", authActions.login);
// addition of a file - this allows an upload to be placed in the public folder, and is renamed, adding the date in miliseconds to the filename
const storage = multer.diskStorage({
  destination: "./public/assets/images",
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

//upload route
router.post(
  "/api/users/upload",
  upload.single("file"),
  userActions.imageUpload,
); //'file' corresponds to the name of the input from the client side of the site

/* ************************************************************************* */

// Define casseCroute-related routes
import ingToRecActions from "./modules/ingToRec/ingToRecActions";
import ingredientActions from "./modules/ingredient/ingredientActions";
import recetteActions from "./modules/recette/recetteActions";
import stepActions from "./modules/steps/stepActions";

// Routes pour les ingrédients
router.get("/api/ingredient", ingredientActions.browse);
router.get("/api/ingredients-season", ingredientActions.browseSeason);

// Routes liées aux recettes
router.get("/api/recette", recetteActions.browse);
router.get("/api/date-recette", recetteActions.browseLatestArrival);
router.get("/api/recette-saison", recetteActions.browseSeason);
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

//Routes pour ajouter une ingredient à une recette
router.get("/api/ingredientsAdded", ingToRecActions.browse);
router.post("/api/ingredientsAdded", ingToRecActions.add);

//Routes pour ajouter des étapes aux recettes
router.get("/api/stepsAdded", stepActions.browse);
router.post("/api/stepsAdded", stepActions.add);

export default router;
