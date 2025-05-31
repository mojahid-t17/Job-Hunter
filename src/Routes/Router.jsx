import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Addjob from "../Pages/Jobs/Addjob";
import JobDetails from "../Pages/Jobs/JobDetails";
import Jobs from "../Pages/Jobs/Jobs";
import MyApplication from "../Pages/Jobs/MyApplication";
import MyPostedJobs from "../Pages/Jobs/MyPostedJobs";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";



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
          element:<PrivateRoute><Jobs></Jobs></PrivateRoute>,
          
        },
        {
          path:'/job/:id',
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: '/addJob',
          element:<PrivateRoute> <Addjob></Addjob></PrivateRoute>
        },
        {
           path:'/myApplications',
           element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        },
        {
          path:'/myPostedJobs',
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        }
    ]
  },
]);

export default Router;