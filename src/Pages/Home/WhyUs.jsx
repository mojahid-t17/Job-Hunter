import { CgSandClock } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { MdArrowRightAlt, MdOutlineAddIcCall } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
const WhyUs = () => {
  return (
    <div className="max-w-6xl mx-auto mb-8 px-2">
      <div className="max-w-4xl mx-auto my-8">
        <h1 className="text-center text-3xl font-bold ">
          Here's why you'll love it Job Hunter
        </h1>
        <p className="text-gray-400 font-semibold  text-center my-3">
          Search all the open positions on the web. Get your own personalized
          salary estimate. Read reviews on over 30000+ companies worldwide.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
        <div className="text-center max-w-72 bg-white shadow p-9 space-y-3 relative overflow-hidden hover:bg-sky-50 group hover:scale-95 transition-all duration-300 mx-auto">
          <div className="w-14 mx-auto rounded pr-14 ps-4 py-4 text-blue-700 bg-blue-50 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
            <MdOutlineAddIcCall className="text-4xl mx-auto" />
          </div>

          <h1 className="font-bold text-xl">24/7 Support</h1>
          <p className="text-sm text-zinc-500 leading-6">
            Many desktop publishing now use and a search for job
          </p>
          <h4 className="flex items-center justify-center gap-1 text-blue-600 hover:underline cursor-pointer">
            Read More
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <MdArrowRightAlt />
            </span>
          </h4>
        </div>
        <div className="text-center max-w-72 bg-white shadow p-9 space-y-3 relative overflow-hidden hover:bg-sky-50 group  hover:scale-95 transition-all duration-300 mx-auto">
          <div className="w-14 mx-auto rounded pr-14 ps-4 py-4 text-blue-700 bg-blue-50 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
            <FaReact className="text-4xl mx-auto" />
          </div>

          <h1 className="font-bold text-xl">Tech & Startup Jobs</h1>
          <p className="text-sm text-zinc-500 leading-6">
            Many desktop publishing now use and a search for job
          </p>
          <h4 className="flex items-center justify-center gap-1 text-blue-600 hover:underline cursor-pointer">
            Read More
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <MdArrowRightAlt />
            </span>
          </h4>
        </div>
        <div className="text-center max-w-72 bg-white shadow p-9 space-y-3 relative overflow-hidden hover:bg-sky-50 group hover:scale-95 transition-all duration-300 mx-auto">
          <div className="w-14 mx-auto rounded pr-14 ps-4 py-4 text-blue-700 bg-blue-50 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
            <RiContactsLine className="text-4xl mx-auto" />
          </div>

          <h1 className="font-bold text-xl">Quick & Easy</h1>
          <p className="text-sm text-zinc-500 leading-6">
            Many desktop publishing now use and a search for job
          </p>
          <h4 className="flex items-center justify-center gap-1 text-blue-600 hover:underline cursor-pointer">
            Read More
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <MdArrowRightAlt />
            </span>
          </h4>
        </div>
        <div className="max-w-72 bg-white shadow p-9 space-y-3 relative overflow-hidden hover:bg-sky-50 group hover:scale-95 transition-all duration-300 mx-auto text-center">
          <div className="w-14 mx-auto rounded pr-14 ps-4 py-4 text-blue-700 bg-blue-50 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
            <CgSandClock className="text-4xl mx-auto" />
          </div>

          <h1 className="font-bold text-xl ">Save Time</h1>
          <p className="text-sm text-zinc-500 leading-6">
            Many desktop publishing now use and a search for job
          </p>
          <h4 className="flex items-center justify-center gap-1 text-blue-600 hover:underline cursor-pointer">
            Read More
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <MdArrowRightAlt />
            </span>
          </h4>
        </div>

        
      </div>
    </div>
  );
};

export default WhyUs;
