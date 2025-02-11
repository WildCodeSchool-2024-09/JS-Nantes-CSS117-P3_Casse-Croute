import { Navigate } from "react-router-dom";
import UserRecipes from "../components/UserRecipes";
import UserRecipesDelete from "../components/UserRecipesDelete";
import UserRecipesModify from "../components/UserRecipesModify";
import ProtectedRoutes from "../components/protect-context/ProtectedRoutes";
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
import NotFound from "../pages/error/NotFound";

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
    element: (
      <ProtectedRoutes>
        <CreateRecipe />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/view-profile",
    element: (
      <ProtectedRoutes>
        <ViewProfile />
      </ProtectedRoutes>
    ),
  },
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
        element: (
          <ProtectedRoutes>
            <DashBoardUser />
          </ProtectedRoutes>
        ),
      },
      {
        path: "dashboard-recipes",
        element: (
          <ProtectedRoutes>
            <DashboardRecipes />
          </ProtectedRoutes>
        ),
      },
    ],
  },
  {
    path: "/legal-notices",
    element: <LegalNotices />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
