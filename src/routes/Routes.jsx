import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";

import RecipesLayout from "../layout/recipesLayout";

import News from "../pages/News/News";
import Footer from "../pages/Shared/Footer/Footer";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
// import BdChefDetails from "../pages/BdChefDetails/BdChefDetails";
import PrivetRoute from "./PrivetRoute";
import Terms from "../pages/Shared/Terms/Terms";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
 
   
   
      {
        path: "recipes/:id",
        element: <Footer></Footer>,
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
        path:'about',
        element:<About></About>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'contact',
        element:<Contact></Contact>
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
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`https://recipes-bd-server-alive1258.vercel.app/recipes/${params._id}`),
      },
    ],
  },
]);
export default router;
