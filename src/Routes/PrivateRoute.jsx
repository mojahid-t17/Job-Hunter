import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    if(user){
        return children
    }
    if(loader){
          return <div className='text-center mt-20'>
            <span className="loading text-blue-700 loading-bars loading-xl  my-10"></span>
          </div>
    }
    return (
        <Navigate to="/signIn"></Navigate>
    );
};

export default PrivateRoute;