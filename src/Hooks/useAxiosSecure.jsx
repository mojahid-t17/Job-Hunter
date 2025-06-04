import axios from 'axios';
import useAuth from '../Providers/UseAuth';

const axiosInstance=axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true
})

const useAxiosSecure = () => {
    const {logOut}=useAuth();
 
    axiosInstance.interceptors.response.use(response=>{
       return response
    },error=>{
        // console.log(error)
         if(error.status===401 || error.status ===403){
             console.log('sign out success from axis interceptors');
             logOut()
            
         }
        return Promise.reject(error)
    })
   return axiosInstance
};

export default useAxiosSecure;

