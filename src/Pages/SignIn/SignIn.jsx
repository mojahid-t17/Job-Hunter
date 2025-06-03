import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logInAnimation from "../../assets/lotties/signIn.json";
import { AuthContext } from "../../Providers/AuthProvider";

const SignIn = () => {
  const navigate=useNavigate();
  
  const {logInUser, signInwithGogle}=useContext(AuthContext);
  const [signInError,setSignInerror]=useState('');
  // handle signin with email and password
  const handleSignIn=e=>{
    e.preventDefault();
    const form= e.target;
    const email=form.email.value;
    const password=form.password.value;
    // console.log(email,password)
    logInUser(email,password)
    .then(result=>{
      // console.log(result.user.photoURL)
      console.log(result)
      // const user={email:email}
      // axios.post('http://localhost:5000/jwt',user, {withCredentials:true})
      // .then(res=>{console.log(res.data)})
      // navigate('/jobs')
       
    })
    .catch(err=>{
      console.log(err.message)
      setSignInerror('Invalid Email or password !! Try Again..')
    })

  }
  // handle signin with gogle
   const handleGogleSignIn=()=>{
      signInwithGogle()
      .then(res=>{
        console.log(res)
         navigate('/jobs')
      })
      .catch(err=>{
        console.log(err)
      })
      
   }
  return (
    <div className="hero min-h-screen max-w-5xl mx-auto p-4">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/2">
          <div className="mt-4 ">
            <Lottie animationData={logInAnimation}></Lottie>
          </div>
        </div>
        <div className="card bg-blue-50 w-full max-w-sm shrink-0 shadow-2xl">
          <p className="text-center font-bold my-2 pt-4">
            Sign In with your Email and Password
          </p>
        
            <div className="card-body">
                <form onSubmit={handleSignIn}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
                <p className="text-red-500 font-bold">{signInError}</p>
              <input value="SignIn" type="submit" className="btn btn-neutral mt-4"/>
            </fieldset>
            <div>
                
              <p>Don't have an account?? <Link to="/signUp" className="text-blue-400">Sign Up</Link></p>
            </div>
               </form>
            {/* log in with social account */}
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
              <h5 className="px-2 text-sm text-gray-400">
                Login with social accounts </h5>
              <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div>
                            <div className="mx-auto">
                              <button onClick={handleGogleSignIn} className="btn    text-black border-[#e5e5e5]">
                  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Login with Google
                </button>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default SignIn;
