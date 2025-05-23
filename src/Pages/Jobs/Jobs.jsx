import { useEffect, useState } from "react";
import JobCard from "./jobCard";

const Jobs = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
         fetch('http://localhost:5000/jobs')
         .then(res=>
           res.json()
         )
         .then(data=>{
            setJobs(data)
         })
         .catch(err=>{console.log(err)})
    },[])
    console.log(jobs)
    return (
        <div className="mt-20">
             <div className="text-center max-w-3xl mx-auto mt-4 mb-4">
                <h1 className="text-3xl font-bold text-center">Popular Jobs</h1>
                <p className="text-gray-400">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
             </div>
             <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 px-4 max-w-5xl mx-auto grid-cols-1 ">
              {
                jobs.map((job,idx)=><JobCard job={job} key={idx}></JobCard>)
              }
             </div>
            
        </div>
    );
};

export default Jobs;