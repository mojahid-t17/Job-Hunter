
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import banner1 from "../assets/banner-image/banner1.jpg";
import banner2 from "../assets/banner-image/banner2.jpg";
const Banner = () => {
  return (
    <div className="bg-blue-50  mt-16">
      <div className="hero min-h-screen max-w-6xl mx-auto">
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
            className="max-w-sm rounded-r-4xl rounded-t-4xl border-blue-600 border-l-6 border-b-6 shadow-2xl mx-auto"
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
            className="max-w-80 rounded-r-4xl rounded-t-4xl border-blue-600 border-l-6 border-b-6 shadow-2xl mx-auto"
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
            <button className="btn bg-blue-500 text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
