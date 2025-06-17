import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Providers/UseAuth";

const UpdateJob = () => {
    const job=useLoaderData();
    const { user } = useAuth();
    const navigate=useNavigate()
   
    // console.log(job)
  // console.log(user);
  const handleUpdateJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const objectFormData = Object.fromEntries(formData.entries());
    // console.log(objectFormData)
    const { max, min, currency, ...JobData } = objectFormData;
    // console.log(max,min,currency,JobData)
    JobData.salaryRange = { max, min, currency };
    // console.log(JobData)
    JobData.responsibilities = JobData.responsibilities.split("\n");
    JobData.requirements = JobData.requirements.split("\n");
    // console.log(JobData);
    axios.patch(`https://job-hunter-server-pi.vercel.app/jobs/${job._id}`,JobData)
      .then((res) => {
      
      // Toast version
   if (res.data?.modifiedCount > 0 || res.status === 200) {
 
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Job Updated Successfully!',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    customClass: {
      popup: 'z-[9999]',
    },
  });
  navigate('/myPostedJobs')
 
}

      
    })
    .catch((err) => {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong while updating the job!',
      });
        
      });
  };
 
  
   return (
    <div className="max-w-4xl mx-auto mt-20 px-2 dark:bg-slate-50">
      <section className="p-8 text-gray-900 dark:text-white">
        <div className="text-center my-4">
          <h1 className="text-3xl font-bold text-gray-900">Update the Job</h1>
          <h2 className="text-xl text-gray-600">
            Fill the form with proper information to update job
          </h2>
        </div>
      

        <form
          onSubmit={handleUpdateJob}
          noValidate
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Job Overview */}
          <fieldset className="grid grid-cols-1 md:grid-cols-4 border border-blue-200 gap-6 p-6 bg-blue-50 dark:bg-blue-50 rounded-xl shadow">
            <div className="md:col-span-1 space-y-2">
              <h2 className="text-2xl text-blue-600 font-bold">Job Overview</h2>
              <p className="text-sm text-blue-700 dark:text-blue-900">
                Basic information about the job posting.
              </p>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">Job Title</label>
                <input
                  name="jobTitle"
                  type="text"
                  defaultValue={job.jobTitle}
                  placeholder="Enter Job Title"
                  className="input text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">Location</label>
                <input
                  name="location"
                  type="text"
                  defaultValue={job.location}
                  placeholder="Enter Location"
                  className="input text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">Job Type</label>
                <select
                  name="jobType"
                  defaultValue={job.jobType}
                  className="select border-gray-400 select-info text-gray-800"
                >
                  <option disabled>Select a Type </option>
                  <option>Remote</option>
                  <option>On Site</option>
                  <option>Hybrid</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">Category</label>
                <select
                  name="categories"
                  defaultValue={job.category}
                  className="select border-gray-400 select-info text-gray-800"
                >
                  <option value="" disabled>Select a category</option>
                  <option>Management</option>
                  <option>Marketing</option>
                  <option>Information Technology</option>
                </select>
              </div>
              {/* Salary Range */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">Salary Range</label>
                <div className="grid md:grid-cols-3 w-full gap-2">
                  <div>
                    <input
                      name="max"
                      type="text"
                      defaultValue={job.salaryRange?.max}
                      placeholder="maximum salary"
                      className="input text-gray-900"
                    />
                  </div>
                  <div>
                    <input
                      name="min"
                      type="text"
                      defaultValue={job.salaryRange?.min}
                      placeholder="minimum salary"
                      className="input text-gray-900"
                    />
                  </div>
                  <div>
                    <select
                      name="currency"
                      defaultValue={job.salaryRange?.currency}
                      className="select border-gray-400 select-info text-gray-800"
                    >
                      <option value="" disabled>Select Currency</option>
                      <option>BDT</option>
                      <option>USD</option>
                      <option>EUR</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">Application Deadline</label>
                <input
                  name="applicationDeadline"
                  type="date"
                  defaultValue={job.applicationDeadline}
                  className="input text-gray-900"
                />
              </div>
            </div>
          </fieldset>

          {/* Job Description */}
          <fieldset className="grid grid-cols-1 md:grid-cols-4 border border-blue-200 gap-6 p-6 bg-blue-50 dark:bg-blue-50 rounded-xl shadow">
            <div className="md:col-span-1 space-y-2">
              <h2 className="text-2xl text-blue-600 font-bold">Job Description</h2>
              <p className="text-sm text-blue-700 dark:text-blue-900">
                Details about the role and responsibilities.
              </p>
            </div>
            <div className="md:col-span-3 space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">Description</label>
                <textarea
                  name="description"
                  defaultValue={job.description}
                  className="input text-gray-900 h-24"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">Requirements</label>
                <textarea
                  name="requirements"
                  defaultValue={job.requirements?.join(', ')}
                  className="input text-gray-900 h-32"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">Responsibilities</label>
                <textarea
                  name="responsibilities"
                  defaultValue={job.responsibilities?.join(', ')}
                  className="input text-gray-900 h-32"
                />
              </div>
            </div>
          </fieldset>

          {/* Company Info */}
          <fieldset className="grid grid-cols-1 md:grid-cols-4 border border-blue-200 gap-6 p-6 bg-blue-50 dark:bg-blue-50 rounded-xl shadow">
            <div className="md:col-span-1 space-y-2">
              <h2 className="text-2xl text-blue-600 font-bold">Company Info</h2>
              <p className="text-sm text-blue-700 dark:text-blue-900">
                Details about the company and contact person.
              </p>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">Company Name</label>
                <input
                  name="companyName"
                  type="text"
                  defaultValue={job.companyName}
                  className="input text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">HR Name</label>
                <input
                  name="hr_name"
                  type="text"
                  defaultValue={job.hr_name || user?.displayName}
                  className="input text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">HR Email</label>
                <input
                  name="hr_email"
                  type="email"
                  defaultValue={job.hr_email || user?.email}
                  className="input text-gray-900"
                />
              </div>
              <div className="flex flex-col">
                <label className="block text-sm font-medium mb-1 text-blue-900 dark:text-blue-900">Company Logo</label>
                <input
                  type="text"
                  name="companyLogo"
                  defaultValue={job.companyLogo}
                  className="input text-gray-900"
                />
              </div>
            </div>
          </fieldset>

          {/* Submit Button */}
          <div className="text-center">
            <input
              type="submit"
              value="Submit"
              className="btn font-bold px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateJob;