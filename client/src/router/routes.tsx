import Accueil from "../pages/Accueil/Accueil";
import CreateRecipe from "../pages/CreateRecipe/CreateRecipe";
import Login from "../pages/Login/AuthForm";
import ViewProfile from "../pages/ViewProfile/ViewProfile";
import Account from "../pages/account/Account";
import Catalogue from "../pages/catalogue/Catalogue";

const routes = [
  {
    path: "/",
    element: <Accueil />,
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
];

export default routes;
