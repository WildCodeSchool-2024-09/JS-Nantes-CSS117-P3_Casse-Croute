import CreateRecipe from "../pages/CreateRecipe/CreateRecipe";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/AuthForm";
import ViewProfile from "../pages/ViewProfile/ViewProfile";
import Account from "../pages/account/Account";
import Catalogue from "../pages/catalogue/Catalogue";
import DashboardUser from "../pages/dashboard-admin/DashBoardUser";

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
    path: "/dashboard-user",
    element: <DashboardUser />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/view-profile", element: <ViewProfile /> },
];

export default routes;
