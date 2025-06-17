import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import JobCard from "./jobCard";

const Jobs = () => {
   const [jobs, setJobs] = useState([]);
   const { count } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  const itemPerPage = 8;
  const numOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numOfPages).keys()];

  //  console.log(pages,count,numOfPages)

  const handleNextBtn = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousBtn = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    fetch(`https://job-hunter-server-pi.vercel.app/jobs?page=${currentPage}&limit=${itemPerPage}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage, itemPerPage]);
  return (
    
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

        <div className="pagination-container mx-auto max-w-4xl my-5">
          <div className="flex justify-center space-x-1 text-gray-800">
            <Link
              onClick={handlePreviousBtn}
              title="previous"
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-white border-gray-200"
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </Link>

            {pages.map((page) => (
              <Link
                onClick={() => setCurrentPage(page)}
                type="button"
                title="Page 1"
                className={
                  currentPage === page
                    ? "text-violet-600 border-violet-600 border inline-flex items-center justify-center w-8 h-8 text-sm font-semiboldrounded shadow-md bg-white"
                    : "inline-flex items-center justify-center w-8 h-8 text-sm font-semiboldrounded shadow-md bg-white "
                }
              >
                {page + 1}
              </Link>
            ))}

            <Link
              onClick={handleNextBtn}
              title="next"
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-white border-gray-200"
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    
  );
};

export default Jobs;
