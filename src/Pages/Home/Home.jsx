import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../Components/Banner";
import JobCard from "../Jobs/jobCard";
import BestCompanies from "./BestCompanies";
import CompanyHighlights from "./CompanyHighlights";
import WhyUs from "./WhyUs";

const Home = () => {
  
  const [jobs, setJobs] = useState([]);
  // const { count } = useLoaderData();
  // const [currentPage, setCurrentPage] = useState(0);
  // const itemPerPage = 8;
  // const numOfPages = Math.ceil(count / itemPerPage);
  // const pages = [...Array(numOfPages).keys()];

  //  console.log(pages,count,numOfPages)

  // const handleNextBtn = () => {
  //   if (currentPage < pages.length - 1) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };
  // const handlePreviousBtn = () => {
  //   if (currentPage > 0) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?page=1&limit=4`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <CompanyHighlights></CompanyHighlights>

      {/* /jobs Container */}
      <div className="mt-20">
      <div className="text-center max-w-3xl mx-auto mt-4 mb-4">
        <h1 className="text-3xl font-bold text-center">Popular Jobs</h1>
        <p className="text-gray-400">
          Search all the open positions on the web. Get your own personalized
          salary estimate. Read reviews on over 30000+ companies worldwide.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 px-4 max-w-5xl mx-auto grid-cols-1 ">
        {jobs.map((job, idx) => (
          <JobCard job={job} key={idx}></JobCard>
        ))}
      </div>
      
        <div className="text-center my-5">
          <Link to="/jobs"> 
        <button 
        className="btn text-center px-6 bg-blue-500  hover:bg-blue-800  text-white ">See More</button></Link>
        </div>
    
    </div>
      
      <BestCompanies></BestCompanies>
      <WhyUs></WhyUs>
    </div>
  );
};

export default Home;
