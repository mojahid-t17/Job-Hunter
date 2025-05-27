import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const {user,logOut}=useContext(AuthContext);
  // console.log(user)

  // Handle scroll effect only on homepage
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Dynamic navbar background
  const navbarClasses = `fixed top-0 left-0 w-full px-4 z-50 transition-all duration-500 ${
    location.pathname === '/'
      ? scrolled
        ? 'bg-gray-100 shadow-md'
        : 'bg-blue-50'
      : 'bg-gray-100 shadow-md'
  }`;
// sign out method
  const handleSingOut=()=>{
    logOut()
  }
  // Navigation links
  const links = (
    <>
      <li><NavLink className={({isActive})=>(isActive?'text-blue-500 font-bold':' text-gray-800')} to="/">Home</NavLink></li>
      <li>
        <details>
          <summary>Pages</summary>
          <ul className="p-2">
            <li><NavLink to="/submenu1">Submenu 1</NavLink></li>
            <li><NavLink to="/submenu2">Submenu 2</NavLink></li>
          </ul>
        </details>
      </li>
      <li><NavLink className={({isActive})=>(isActive?'text-blue-500 font-bold':' text-gray-800')} to="/jobs">Jobs</NavLink></li>
    </>
  );

  return (
    <div className={`${navbarClasses}  `}>
      <div className="navbar px-4 py-2">
        {/* Left Side */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <NavLink to="/" className="flex items-center gap-2">
            <img className="h-12 w-14" src="/job-portal.png" alt="Logo" />
            <p className="text-xl text-black font-bold">JOB HUNTER</p>
          </NavLink>
        </div>

        {/* Center Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end">
         {
          user?  <Link onClick={handleSingOut} to="/signIn" className="btn bg-blue-600 text-white hover:bg-blue-950 transform hover:-translate-y-1 transition duration-200">
            Sign Out
          </Link> :  <Link to="/signIn" className="btn bg-blue-500 text-white hover:bg-blue-950 transform hover:-translate-y-1 transition duration-200">
            Sign In
          </Link>
         }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
