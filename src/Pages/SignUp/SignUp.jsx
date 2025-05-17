import { updateProfile } from "firebase/auth";
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import signUpAnimation from '../../assets/lotties/signUp.json';
import { AuthContext } from "../../Providers/AuthProvider";
const SignUp = () => {
  const navigate=useNavigate();
  const {createUser}=useContext(AuthContext)
  const [errMessage,SetErrMessage]=useState('');
  const handleSignup = (e) => {
    e.preventDefault();
      const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    // const newUser={name,email,password,photoUrl}
    // console.log(user)
    if(password.length <6){
       SetErrMessage('Password Should be 6 character or more')
       return;
       
    }
    else if(!/[A-Z]/.test(password)){
      SetErrMessage('Password should have at least one uppercase')
      return;
    }
    else if(!/[0-9]/.test(password)){
        SetErrMessage('Password shold have at least one number')
        return;
    } SetErrMessage("")
    createUser(email,password)
    .then(res=>{
    
      updateProfile(res.user,
      {
        displayName: name,
        photoURL: photoUrl,
      }
      )
      navigate('/signIn')
      Swal.fire({
  title: "Account Created Successfully!",
  text: "Your can Sign In Now!",
  icon: "success"
});
      console.log(res)
    })
    .catch(err=>{
      if(err.message=='Firebase: Error (auth/email-already-in-use).' )
      {
       SetErrMessage('User Already EXist!!!!')
      }
      
    })
  };
console.log(errMessage)
  return (
    
      <div className="hero min-h-screen max-w-5xl mx-auto p-4 mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left  lg:w-1/3">
            <h1 className="text-5xl font-bold">Join Now!</h1>
            <div className="py-6">
                <Lottie  animationData={signUpAnimation}></Lottie>
            </div>
          </div>
          <div className="bg-sky-100  card  lg:w-1/2 w-full max-w-xl shrink-0 ">
            <div className="w-full  p-8 space-y-3 rounded-xl  ">
              <h1 className="text-2xl font-bold text-center">Sign Up</h1>
              <form onSubmit={handleSignup} className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label htmlFor="Name" className="block text-gray-400">
                    Enter Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="your name"
                    className="w-full px-4 py-3 rounded-md border-gray-700 border"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="Email" className="block text-gray-400">
                    Your Email
                  </label>
                  <input
                    required
                    type="text"
                    name="email"
                    id="email"
                    placeholder="name@gmail.com"
                    className="w-full px-4 py-3 rounded-md border-gray-700 border"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="password" className="block text-gray-400">
                    Password
                  </label>
                  <div className="relative w-full">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="w-full px-4 py-3 pr-12 rounded-md border border-gray-700 focus:ring-2 focus:ring-blue-500"
                    />
                    {/* Eye Icon */}
                  </div>
                   <p className="text-red-500">{errMessage}</p>
                  <p className="text-gray-400">Password should be at least:</p>
                  <ul className="list-disc text-gray-400 ms-4">
                    <li className="item">6 Characters</li>
                    <li>one ulipercase letter</li>
                    <li>Shold have at least one number.</li>
                  </ul>
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="PhotoUrl" className="block text-gray-400">
                    Enter a Phot Url
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    id="photUrl"
                    placeholder="Photo Url"
                    className="w-full px-4 py-3 rounded-md border-gray-700 border "
                  />
                </div>
                <input
                  type="submit"
                  className="block w-full p-3 text-center rounded-sm text-gray-900 bg-blue-300"
                  value="Sign Up"
                />
              </form>

              <p className="text-xs text-center sm:px-6 ">
                Already have an account?
                <Link className="underline  text-blue-400" to="/signIn">
                  Sign In
                </Link>
              </p>
              
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default SignUp;
