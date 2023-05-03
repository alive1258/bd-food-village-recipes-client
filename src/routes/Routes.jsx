import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Recipes from "../pages/Home/Recipes/Recipes";
import RecipesLayout from "../layout/recipesLayout";
import ChefDetail from "../pages/Home/ChefDetail/ChefDetail";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News";
import Footer from "../pages/Shared/Footer/Footer";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path:'detail',
        element:<ChefDetail></ChefDetail>
      }
      ,

      {
        path: "recipes/:id",
        element: <Footer></Footer>,

      },
    ],
  },
    {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/',
        element:<Navigate to='recipes'></Navigate>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]
  }
  ,

  {
    path: "news",
    element: <RecipesLayout></RecipesLayout>,
    children: [
      {
        path: ":id",
        element: <News></News>,
        loader:({params})=>fetch(`http://localhost:5000/recipes/${params.id}`)
     
      },
    ],
  },
]);
export default router;
