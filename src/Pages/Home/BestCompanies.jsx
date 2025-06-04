import { motion } from "motion/react";
import { MdArrowRightAlt } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import amazon from "../../assets/company-logo/amazon_social media_icon.png";
import android from "../../assets/company-logo/android.png";
import facebook from "../../assets/company-logo/facebook logo_icon.png";
import gogle from "../../assets/company-logo/google_g_icon.png";
import linkedIn from "../../assets/company-logo/linkedin_social_icon.png";
import spotify from "../../assets/company-logo/spotify_social media_icon.png";
import office1 from "../../assets/picture/office1.jpg";
import office2 from "../../assets/picture/office2.jpg";

const BestCompanies = () => {
  const isMdUp = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div className="max-w-6xl mx-auto flex  px-2 flex-col-reverse md:flex-row">
      <div className="md:w-1/2 flex flex-col px-3">
        <div className="md:mt-8">
          <h1 className="text-3xl font-bold ">Find Best Companies.</h1>
          <p className="text-gray-500 md:my-8  my-4">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>
        <div className="grid gap-5 grid-cols-2 mt-4">
          <div className="card max-w-80 bg-slate-50 card-xs shadow-sm">
            <div className="flex items-center ms-6">
              <div className="max-w-12">
                <img src={gogle} alt="" />
              </div>
              <div className="card-body mx-2 ">
                <Link>
                 <h2 className="card-title text-xl hover:text-blue-500 font-bold">Gogle</h2>
                </Link>
                <p className="font-semibold text-sm text-blue-400">2 Vacancy</p>
              </div>
            </div>
          </div>
          <div className="card max-w-80 bg-slate-50 card-xs shadow">
            <div className="flex items-center ms-6">
              <div className="max-w-8">
                <img src={amazon} alt="" />
              </div>
              <div className="card-body mx-2">
               <Link>
                 <h2 className="card-title text-xl hover:text-blue-500 font-bold">Amazon</h2>
               </Link>
                <p className="font-semibold text-sm text-blue-400">2 Vacancy</p>
              </div>
            </div>
          </div>
          <div className="card max-w-80 bg-slate-50 card-xs shadow-sm">
            <div className="flex items-center ms-6">
              <div className="max-w-10">
                <img src={android} alt="" />
              </div>
              <div className="card-body mx-2">
               <Link>
                <h2 className="card-title text-xl hover:text-blue-500 font-bold">Android</h2>
               </Link>
                <p className="font-semibold text-sm text-blue-400">2 Vacancy</p>
              </div>
            </div>
          </div>
          <div className="card max-w-80 bg-slate-50 card-xs shadow-sm">
            <div className="flex items-center ms-6">
              <div className="max-w-9">
                <img src={facebook} alt="" />
              </div>
              <div className="card-body mx-2">
               <Link>
                 <h2 className="card-title text-xl hover:text-blue-500 font-bold">Facebook</h2>
               </Link>
                <p className="font-semibold text-sm text-blue-400">2 Vacancy</p>
              </div>
            </div>
          </div>
          <div className="card max-w-80 bg-slate-50 card-xs shadow-sm">
            <div className="flex items-center ms-6">
              <div className="max-w-10">
                <img src={spotify} alt="" />
              </div>
              <div className="card-body mx-2">

                <Link>
                <h2 className="card-title text-xl hover:text-blue-500 font-bold">Spotify</h2></Link>
                <p className="font-semibold text-sm text-blue-400">2 Vacancy</p>
              </div>
            </div>
          </div>
          <div className="card max-w-80 bg-slate-50 card-xs shadow-sm">
            <div className="flex items-center ms-6">
              <div className="max-w-12">
                <img src={linkedIn} alt="" />
              </div>
              <div className="card-body mx-2">
                <Link>
                  <h2 className="card-title text-xl  hover:text-blue-500 font-bold">
                    LinkedIn
                  </h2>
                </Link>
                <p className="font-semibold text-sm text-blue-400">2 Vacancy</p>
              </div>
            </div>
          </div>
        </div>
        <h4
  className="relative mt-5 inline-flex items-center gap-1 text-gray-500 hover:text-blue-600 cursor-pointer
             after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-blue-600 
             after:transition-all after:duration-300 hover:after:w-1/3"
>
  See More Companies..
  <span>
    <MdArrowRightAlt />
  </span>
</h4>

      </div>
      <div className="md:w-1/2 mx-auto  h-[400px] md:h-[600px]">
        <div className="">
          <motion.img
            animate={isMdUp ? { x: 150 } : { x: 20, y: 20 }}
            className="md:max-w-96 max-w-48 rounded "
            src={office1}
            alt=""
          />
        </div>
        <div className="">
          <motion.img
            animate={isMdUp ? { y: -300, x: 70 } : { y: -100, x: -40 }}
            src={office2}
            className="md:max-w-72 max-w-40  border-6 border-blue-100 rounded"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BestCompanies;
