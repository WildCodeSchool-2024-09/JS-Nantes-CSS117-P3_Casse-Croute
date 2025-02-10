import ProtectedRoutes from "../components/protect-context/ProtectedRoutes";
import CreateRecipe from "../pages/CreateRecipe/CreateRecipe";
import Home from "../pages/Home/Home";
import LegalNotices from "../pages/Legal-notices/LegalNotices";
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
    path: "/legal-notices",
    element: <LegalNotices />,
  },
];

export default routes;
