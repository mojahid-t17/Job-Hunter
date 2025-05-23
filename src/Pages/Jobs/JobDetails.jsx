import { CiClock2 } from "react-icons/ci";
import { TiShoppingBag } from "react-icons/ti";
import { Link, useLoaderData } from "react-router-dom";
import officeBanner from "../../assets/banner-image/office.jpg";
const JobDetails = () => {
  const job = useLoaderData();
  console.log(job);
  const activstatusClass =
    job.status === "active"
      ? "bg-green-100 text-green-500"
      : "bg-blue-100 text-blue-500";
  return (
    <div className="max-w-4xl mx-auto mt-20 px-2">
      {/* details page top banner */}
      <div>
        <img className="max-h-96 w-full rounded-lg" src={officeBanner} alt="" />
      </div>
      <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 ">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              Job Title: {job.title}
            </h1>
            
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
              <div className="flex text-xl items-center md:space-x-2">
                <p className=" ">
                  <TiShoppingBag />
                </p>
                <p className="">{job.jobType}</p>
                <p>
                  <CiClock2 />
                </p>
                <p className={`${activstatusClass} px-2 py-1 rounded-md`}>
                  {job.status}
                </p>
              </div>
              <div className="flex-shrink-0 mt-3 text-sm md:mt-0">
                <div className="mt-2 flex items-center">
                  <Link>
                    {" "}
                    <button className="btn bg-blue-600 hover:bg-blue-900 px-8 text-white ">
                      Apply
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
        {/* job information section */}
        <div>
          <div className=" py-6 gap-2 border-t border-dashed border-slate-400">
            <div className="text-gray-600">
              <p className="text-xl font-bold text-sky-500">Employment Information</p>
              <hr className="mt-4" />
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
              <div className="grid grid-cols-[130px_1fr]">
                <h2 className="font-semibold text-gray-500">Company:</h2>
                <span>{job.company}</span>
              </div>
              <div className="grid grid-cols-[130px_1fr]">
                <h2 className="font-semibold text-gray-500">Salary:</h2>
                <span>
                  {job.salaryRange.min} {job.salaryRange.currency} -{" "}
                  {job.salaryRange.max} {job.salaryRange.currency}
                </span>
              </div>
              <div className="grid grid-cols-[130px_1fr]">
                <h2 className="font-semibold text-gray-500">Job Category:</h2>
                <span>{job.category}</span>
              </div>
              <div className="grid grid-cols-[130px_1fr]">
                <h2 className="font-semibold text-gray-500">Deadline:</h2>
                <span>{job.applicationDeadline}</span>
              </div>
              <div className="grid grid-cols-[130px_1fr]">
                <h2 className="font-semibold text-gray-500">Location:</h2>
                <span>{job.location}</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Requirements</h4>
            <ul className="ml-4 space-y-1 list-disc">
             {
              job.requirements.map(req=> <li className="text-gray-500">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  
                >
                  {req}
                </a>
              </li>)
             }
              
            </ul>
          </div>
          <div className="space-y-2 mt-5">
            <h4 className="text-lg font-semibold">Responsibilities</h4>
            <ul className="ml-4 space-y-1 list-disc">
             {
              job.responsibilities.map(res=> <li className="text-gray-500">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  
                >
                  {res}
                </a>
              </li>)
             }
              
            </ul>
          </div>
        </div>
        <hr />
        <div className="space-x-4">
          <button className="btn bg-blue-400 text-white hover:bg-blue-900"> Apply Now</button>
          <button className="btn btn-outline btn-info">Save job</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
