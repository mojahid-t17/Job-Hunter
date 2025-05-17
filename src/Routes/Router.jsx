import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Jobs from "../Pages/Jobs/Jobs";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";



const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path: "/",
            element:<Home></Home>

        },
        {
            path:'/signIn',
            element:<SignIn></SignIn>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/jobs',
          element:<Jobs></Jobs>
        }
    ]
  },
]);

export default Router;