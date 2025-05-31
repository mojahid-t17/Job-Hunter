import { useEffect, useState } from "react";
import useAuth from "../../Providers/UseAuth";

const MyPostedJobs = () => {
    const {user}=useAuth();
    const [jobs,setJobs]= useState([]);
    console.log(jobs)
    useEffect(()=>{
       fetch(`http://localhost:5000/jobs?email=${user.email}`)
       .then(res=>res.json())
       .then(data=>{
         setJobs(data)
       })
    },[])
    return (
        <div className='max-w-6xl mx-auto mt-20'>
            <h1>My posted jobs are here:{jobs.length}</h1>
              <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
               <th>Company Name</th>
              <th>Job Title</th>
             
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {jobs.map((job, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.companyLogo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"> {job.companyName}</div>
                      <div className="text-sm opacity-50">{}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.jobTitle}
                  <br />
                  {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                </td>
                <td>
                  <button className="btn">X</button>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">Details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyPostedJobs;