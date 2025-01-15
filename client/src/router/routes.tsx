import CreateRecipe from "../pages/CreateRecipe/CreateRecipe";
import Login from "../pages/Login/Login";
import ViewProfile from "../pages/ViewProfile/ViewProfile";
import About from "../pages/about/About";
import Account from "../pages/account/Account";
import Catalogue from "../pages/catalogue/Catalogue";

const routes = [
  {
    path: "/about",
    element: <About />,
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
