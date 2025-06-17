import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Providers/UseAuth";

const MyApplication = () => {
  
  const axiosInstanc = useAxiosSecure()
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  // console.log(jobs)

  // console.log(user.email);

  useEffect(() => {
    // fetch(`https://job-hunter-server-pi.vercel.app/applied-jobs?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //     console.log(data);
    //   });
   axiosInstanc.get(`/applied-jobs?email=${user.email}`)
   .then(res=>{
      setJobs(res.data)
   })
   
  }, []);
  return (
    <div className="max-w-6xl mt-18 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Job Title</th>
              <th>Company Name</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {jobs.map((job, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"> {job.company}</div>
                      <div className="text-sm opacity-50">{}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.title}
                  <br />
                  {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                </td>
                
                <th>
                  <Link to={`/job/${job.job_id}`}>
                  <button className="btn btn-ghost btn-xs">Details</button>
                  </Link>
                  
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
