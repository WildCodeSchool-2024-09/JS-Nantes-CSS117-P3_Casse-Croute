import { Navigate } from "react-router-dom";
import CreateRecipe from "../pages/CreateRecipe/CreateRecipe";
import Home from "../pages/Home/Home";
import LegalNotices from "../pages/Legal-notices/LegalNotices";
import Login from "../pages/Login/AuthForm";
import ViewProfile from "../pages/ViewProfile/ViewProfile";
import Account from "../pages/account/Account";
import Catalogue from "../pages/catalogue/Catalogue";
import DashboardAdmin from "../pages/dashboard-admin/DashBoardAdmin";
import DashboardRecipes from "../pages/dashboard-admin/DashboardRecipes";
import DashBoardUser from "../pages/dashboard-admin/DashboardUser";

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
    path: "/dashboard-admin",
    element: <DashboardAdmin />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard-user" replace />,
      },
      {
        path: "dashboard-user",
        element: <DashBoardUser />,
      },
      {
        path: "dashboard-recipes",
        element: <DashboardRecipes />,
      },
    ],
  },
  {
    path: "/legal-notices",
    element: <LegalNotices />,
  },
];

export default routes;
