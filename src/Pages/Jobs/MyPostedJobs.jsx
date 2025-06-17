import axios from "axios";
import { useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Providers/UseAuth";

const MyPostedJobs = () => {
  

    const {user}=useAuth();
    const [jobs,setJobs]= useState([]);
    const handleDeleteJob=(_id)=>{
    
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    axios.delete(`https://job-hunter-server-pi.vercel.app/jobs/${_id}`)
    .then(res=>{
    
      // console.log(res.data);
      if(res.data){
        if(res.data.deletedCount>0){
          const remJObs=jobs.filter(job=>job._id!=_id);
          setJobs(remJObs)
        }
         Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
      }
    })
    
   
  }
});
    }
    
    // console.log(jobs)
    useEffect(()=>{
     
      axios.get(`https://job-hunter-server-pi.vercel.app/jobs?email=${user.email}`)
      .then(res=>setJobs(res.data))
    
    },[])
    
    return (
        <div className='max-w-6xl mx-auto mt-20'>
            <h1 className="text-center font-bold text-3xl my-5">Your posted jobs </h1>
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
                <td className="flex gap-2">
                  <button onClick={()=>handleDeleteJob(job._id)} className="btn">X</button>
                  
                  <Link to={`/editJob/${job._id}`}><button  className="btn"><MdModeEdit /></button></Link>
                </td>
                <th>
                  <Link to={`/job/${job._id}`} className="btn btn-ghost btn-xs">Details</Link>
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