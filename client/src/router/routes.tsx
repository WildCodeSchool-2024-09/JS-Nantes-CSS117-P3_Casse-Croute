import UserRecipes from "../components/UserRecipes";
import UserRecipesDelete from "../components/UserRecipesDelete";
import UserRecipesModify from "../components/UserRecipesModify";
import CreateRecipe from "../pages/CreateRecipe/CreateRecipe";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/AuthForm";
import ViewProfile from "../pages/ViewProfile/ViewProfile";
import Account from "../pages/account/Account";
import Catalogue from "../pages/catalogue/Catalogue";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/catalogue",
    element: <Catalogue />,
  },
  {
    path: "/create-recipe",
    element: <CreateRecipe />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/view-profile", element: <ViewProfile /> },
  {
    path: "/user-recipes",
    element: <UserRecipes />,
    children: [
      {
        path: "modify",
        element: <UserRecipesModify />,
      },
      {
        path: "delete",
        element: <UserRecipesDelete />,
      },
    ],
  },
];

export default routes;
