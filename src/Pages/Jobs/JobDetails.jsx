import { CiClock2 } from "react-icons/ci";
import { TiShoppingBag } from "react-icons/ti";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import officeBanner from "../../assets/banner-image/office.jpg";
import useAuth from "../../Providers/UseAuth";

const JobDetails = () => {

   
  // Load job data from the route loader
  const job = useLoaderData();
  // console.log(job);

  // Determine the class for status label
  const activstatusClass =
    job.status === "active"
      ? "bg-green-100 text-green-500"
      : "bg-blue-100 text-blue-500";

  // Get user information from custom auth hook
  const { user } = useAuth();
  // console.log(user);

  // Handle job application form submission
  const handleJobApplication = (e) => {
    e.preventDefault();
    const job_id = job._id;
    const applicantEmail = user.email;
    const form = e.target;
    const github = form.github.value;
    const linkedin = form.linkedin.value;
    const resume = form.resume.value;

    const applicationData = {
      github,
      linkedin,
      resume,
      job_id,
      applicantEmail,
    };

    // console.log(applicationData);
  
    // Send POST request to submit application
    fetch("http://localhost:5000/applied-jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "applied") {
          // console.log(data.message);
          
          toast.error('Already Applied for the job')
          
          
          document.getElementById("my_modal_5").close()

        } else {
          console.log("Application submitted:", data);
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 px-2">
      <ToastContainer  />

      {/* Top Banner */}
      <div>
        <img
          className="max-h-96 w-full rounded-lg"
          src={officeBanner}
          alt="Office Banner"
        />
      </div>

      {/* Job Content */}
      <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
        {/* Main Job Info */}
        <article className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              Job Title: {job.title}
            </h1>

            {/* Job type, status, etc. */}
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
              <div className="flex text-xl items-center md:space-x-2">
                <p>
                  <TiShoppingBag />
                </p>
                <p>{job.jobType}</p>
                <p>
                  <CiClock2 />
                </p>
                <p className={`${activstatusClass} px-2 py-1 rounded-md`}>
                  {job.status}
                </p>
              </div>

              {/* Apply Button */}
              <div className="flex-shrink-0 mt-3 text-sm md:mt-0">
                <div className="mt-2 flex items-center">
                  <Link>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                      className="btn bg-blue-600 hover:bg-blue-900 px-8 text-white"
                    >
                      Apply
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Employment Information Section */}
        <div className="py-6 gap-2 border-t border-dashed border-slate-400">
          <div className="text-gray-600">
            <p className="text-xl font-bold text-sky-500">
              Employment Information
            </p>
            <hr className="mt-4" />
          </div>

          {/* Job Information Grid */}
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

        {/* Requirements List */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Requirements</h4>
          <ul className="ml-4 space-y-1 list-disc">
            {job.requirements.map((req, idx) => (
              <li key={idx} className="text-gray-500">
                {req}
              </li>
            ))}
          </ul>
        </div>

        {/* Responsibilities List */}
        <div className="space-y-2 mt-5">
          <h4 className="text-lg font-semibold">Responsibilities</h4>
          <ul className="ml-4 space-y-1 list-disc">
            {job.responsibilities.map((res, idx) => (
              <li key={idx} className="text-gray-500">
                {res}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <hr />
        <div className="space-x-4">
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn bg-blue-400 text-white hover:bg-blue-900"
          >
            Apply Now
          </button>
          <button className="btn btn-outline btn-info">Save job</button>
        </div>
      </div>

      {/* Application Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Application Form</h3>
          <form
            method="dialog"
            onSubmit={handleJobApplication}
            className="space-y-4"
          >
            {/* GitHub URL */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                GitHub Link
              </label>
              <input
                type="url"
                name="github"
                placeholder="https://github.com/yourprofile"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* LinkedIn URL */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                LinkedIn Link
              </label>
              <input
                type="url"
                name="linkedin"
                placeholder="https://linkedin.com/in/yourprofile"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Resume URL */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Resume URL
              </label>
              <input
                type="url"
                name="resume"
                placeholder="https://yourwebsite.com/yourresume.pdf"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit & Close Buttons */}
            <div className="modal-action">
              <input
                type="submit"
                className="btn bg-blue-600 text-white hover:bg-blue-800"
                value="Submit"
              />
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default JobDetails;
