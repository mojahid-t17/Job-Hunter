import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(null);
  // create a user with email and password
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // log in with email and password
  const logInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
//  signIn with gogle
  const signInwithGogle=()=>{
     return signInWithPopup(auth,provider)
  }

  
  // set the current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // validate user with jwt http cookies
      
      if(currentUser?.email){
        const user={email: currentUser.email}
         axios.post('https://job-hunter-server-pi.vercel.app/jwt',user,{
          withCredentials:true
         })
         .then(res=>{
          console.log(res.data)
           setLoader(false);
         })
      }
      // clear the token
     else{
       axios.post('https://job-hunter-server-pi.vercel.app/logOut',{},{
        withCredentials:true
       })
       .then(res=>{
        console.log("session ended",res.data)
         setLoader(false);
        
       })
     }
      
     
    });
    return () => unsubscribe();
  }, []);
  //   signout method
  const logOut = () => {
    setLoader(true);
    signOut(auth).then(console.log("logged out successfully"));
  };
  const AuthInfo = {
    user,
    createUser,
    logInUser,
    loader,
    logOut,
    signInwithGogle,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
