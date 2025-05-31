import Swal from "sweetalert2";
import useAuth from "../../Providers/UseAuth";

const Addjob = () => {
  const { user } = useAuth();
  // console.log(user);
  const handleAddJob = (e) => {
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
    console.log(JobData);
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(JobData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Good job!",
          text: "Job Added Succesfully!",
          icon: "success",
        });
        e.target.reset();
        console.log(data);
      });
  };
  return (
    <div className="max-w-4xl mx-auto mt-20 px-2 dark:bg-slate-50">
      <section className="p-8  text-gray-900 dark:text-white">
        <div className="text-center my-4">
          <h1 className="text-3xl font-bold text-gray-900">Add New Job</h1>
          <h2 className="text-xl text-gray-600">
            Fill the form with proper information to add new job
          </h2>
        </div>
        <form
          onSubmit={handleAddJob}
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
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">
                  Job Title
                </label>
                <input
                  name="jobTitle"
                  type="text"
                  placeholder="Enter Job Title"
                  className="input text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">
                  Location
                </label>
                <input
                  name="location"
                  type="text"
                  placeholder="Enter Location"
                  className="input text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">
                  Job Type
                </label>
                <select
                  name="jobType"
                  defaultValue="Select a Type"
                  className="select border-gray-400 select-info text-gray-800"
                >
                  <option disabled>Select a Type </option>
                  <option>Remote</option>
                  <option>On Site </option>
                  <option>Hybrid</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">
                  Category
                </label>
                <select
                  defaultValue=""
                  name="categories"
                  className="select border-gray-400 select-info text-gray-800"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option>Management</option>
                  <option>Marketing</option>
                  <option>Information Technology</option>
                </select>
              </div>
              {/* salary Range */}
              <div className="md:col-span-2 ">
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">
                  Salary Range
                </label>
                <div className="grid md:grid-cols-3 w-full gap-2">
                  <div>
                    <input
                      name="max"
                      type="text"
                      placeholder="maximum salary"
                      className="input text-gray-900"
                    />
                  </div>
                  <div>
                    <input
                      name="min"
                      type="text"
                      placeholder="minimum salary"
                      className="input text-gray-900"
                    />
                  </div>
                  <div>
                    <select
                      name="currency"
                      defaultValue=""
                      className="select border-gray-400 select-info text-gray-800"
                    >
                      <option value="" disabled>
                        Select Currency
                      </option>
                      <option>BDT</option>
                      <option>USD</option>
                      <option>EUR</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">
                  Application Deadline
                </label>
                <input
                  name="applicationDeadline"
                  type="date"
                  className="input text-gray-900"
                />
              </div>
            </div>
          </fieldset>

          {/* Job Description */}
          <fieldset className="grid grid-cols-1 md:grid-cols-4 border border-blue-200 gap-6 p-6 bg-blue-50 dark:bg-blue-50 rounded-xl shadow">
            <div className="md:col-span-1 space-y-2">
              <h2
                className="text-2xl text-blue-600 font-bold
"
              >
                Job Description
              </h2>
              <p className="text-sm text-blue-700 dark:text-blue-900">
                Details about the role and responsibilities.
              </p>
            </div>
            <div className="md:col-span-3 space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Enter job description..."
                  className="input text-gray-900 h-24"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">
                  Requirements
                </label>
                <textarea
                  name="requirements"
                  placeholder="Enter job Requirements... "
                  className="input text-gray-900 h-32"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">
                  Responsibilities
                </label>
                <textarea
                  name="responsibilities"
                  placeholder="Enter job Responsibilities..."
                  className="input text-gray-900 h-32"
                />
              </div>
            </div>
          </fieldset>

          {/* Company Information */}
          <fieldset className="grid grid-cols-1 md:grid-cols-4 border border-blue-200 gap-6 p-6 bg-blue-50 dark:bg-blue-50 rounded-xl shadow">
            <div className="md:col-span-1 space-y-2">
              <h2
                className="text-2xl text-blue-600 font-bold
"
              >
                Company Info
              </h2>
              <p className="text-sm text-blue-700 dark:text-blue-900">
                Details about the company and contact person.
              </p>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">
                  Company Name
                </label>
                <input
                  name="companyName"
                  type="text"
                  placeholder="Enter Company Name"
                  className="input text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">
                  HR Name
                </label>
                <input
                  defaultValue={user.displayName}
                  name="hr_name"
                  type="text"
                  placeholder="Enter HR Name"
                  className="input text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900 dark:text-blue-900">
                  HR Email
                </label>
                <input
                  defaultValue={user.email}
                  name="hr_email"
                  type="email"
                  placeholder="Enter HR Email"
                  className="input text-gray-900"
                />
              </div>
              <div className="flex flex-col">
                <label className="block text-sm font-medium mb-1 text-blue-900 dark:text-blue-900">
                  Company Logo
                </label>
                <input
                  type="text"
                  name="companyLogo"
                  className="input text-gray-900"
                  id=""
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

export default Addjob;
