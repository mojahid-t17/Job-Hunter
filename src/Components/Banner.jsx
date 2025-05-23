
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import banner1 from "../assets/banner-image/banner1.jpg";
import banner2 from "../assets/banner-image/banner2.jpg";
const Banner = () => {
  return (
    <div className="bg-blue-50  mt-16 ">
      <div className="hero min-h-screen max-w-6xl mx-auto px-4">
        <div className=" hero-content flex-col lg:flex-row-reverse ">
           <div className="w-1/2">
             <div
             
             >
                <motion.img 
                 animate={{
                y:[-50,0,-50],
                x:[-40]
              }}
              transition={{duration:6,repeat:Infinity}}
              
            src={banner1}
            className="md:max-w-sm max-w-52 rounded-r-4xl rounded-t-4xl border-blue-600 border-l-6 border-b-6 shadow-2xl mx-auto"
          />
             </div>
             <div>
               <motion.img
                animate={{
                x:[80,0,80],
                y:[-40
                ]
              }}
              transition={{duration:9,repeat:Infinity}} 
            src={banner2}
            className="md:max-w-80 max-w-52 rounded-r-4xl rounded-t-4xl border-blue-600 border-l-6 border-b-6 shadow-2xl mx-auto"
          />
             </div>
          </div>
          <div className="lg:w-1/2">
           
            <motion.h1
            initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
            className="text-5xl font-bold">
              Join us &
              <span className="text-blue-500">Explore Thousands </span> of Jobs
            </motion.h1>
            <p className="py-6">
              Find Jobs, Employment & Career Opportunities. Some of the
              companies we've helped recruit excellent applicants over the
              years.
            </p>
           
               <button href="#_" class="box-border relative z-30 inline-flex items-center justify-center w-auto px-5 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
    <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
    <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
    <span class="relative z-20 flex items-center text-sm">
        <svg class="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        Get Started 
    </span>
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
