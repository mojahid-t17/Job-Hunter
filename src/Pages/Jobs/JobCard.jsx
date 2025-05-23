import { CiBookmark } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
const JobCard = ({ job }) => {
  const {
    _id,
    jobType,
    company_logo,
    company,
    title,
    description,
    requirements,
    location,
    salaryRange,
  } = job;

  return (
    <div className="mx-auto card max-w-96  bg-[#f2f5fa] hover:bg-base-100 shadow-sm  border border-blue-200 hover:border-blue-300">
      <div className="card-body flex-col">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div>
              <div className="max-w-12">
                <img src={company_logo} alt="" />
              </div>
            </div>
            <div>
              <div>
                <p className="text-xl  ">{company}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <p>
                  <IoLocation />
                </p>
                <p>{location}</p>
              </div>
            </div>
          </div>
          <Link>
             <span className="text-xl hover:text-blue-500">
            <CiBookmark />
          </span>
          </Link>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-xs flex-grow">
          <div className="flex items-center space-x-2">
            <div>
              <span className="badge badge-xs badge-warning badge-soft">
                {jobType}
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-xs text-gray-400 font-bold">{description}</p>
          </div>
          <div className="flex gap-2 flex-wrap mt-4">
            {requirements.map((requirement) => (
              <Link>
                {" "}
                <p className="text-gray-500 font-semibold hover:text-blue-500 rounded-md px-2 py-2 text-center bg-slate-200">
                  {requirement}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-2 flex items-center">
          <p className="text-gray-400 font-bold">${salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
         <Link to={`/job/${_id}`}> <button className="btn bg-blue-100 hover:bg-blue-800 text-blue-700 hover:text-white ">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
