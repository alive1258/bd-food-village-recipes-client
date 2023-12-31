import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import RecipesLayout from "../layout/recipesLayout";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Terms from "../pages/Shared/Terms/Terms";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Chefs from "../pages/Chefs/Chefs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },

  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="recipes"></Navigate>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "recipe",
    element: (
      <PrivetRoute>
        <RecipesLayout></RecipesLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: ":id",
        element: <Chefs></Chefs>,
        loader: ({ params }) =>
         {
          console.log(params.id)
         
          return fetch(
            `https://recipes-bd-server-alive1258.vercel.app/recipes/${params.id}`
          )}
      },
    ],
  },
]);
export default router;
