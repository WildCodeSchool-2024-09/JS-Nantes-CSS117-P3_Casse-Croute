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

export default router;
