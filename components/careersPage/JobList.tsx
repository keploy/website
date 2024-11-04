"use client";

import { useState } from "react";
import FilterSection from "./FilterSection";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface Job {
    title: string;
    description: string;
    experience: number;
    location: string;
}

interface JobListProps {
    jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
    const [filterjobs, setFilterjobs] = useState(jobs);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5; // Number of jobs per page

    const handleSearch = (filters: { location: string; experience: number | null }) => {
        const filterData = jobs.filter((job) => {
            const matchesLocation = filters.location ? job.location.toLowerCase() === filters.location.toLowerCase() : true;
            const matchesExperience = filters.experience ? job.experience === filters.experience - 1 : true;
            return matchesLocation && matchesExperience;
        });

        setFilterjobs(filterData);
        setCurrentPage(1); // Reset to the first page when a new filter is applied
    };

    // Pagination logic
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filterjobs.slice(indexOfFirstJob, indexOfLastJob);

    const totalPages = Math.ceil(filterjobs.length / jobsPerPage);

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <FilterSection onSearch={handleSearch} />

            <section className="bg-[#F5F5F5] p-5" id="open-positions">
                <h2 className="text-2xl font-bold text-[#00163D] mb-8">Open Positions</h2>
                <div className="flex flex-wrap gap-6 justify-center lg:justify-between  items-center">
                    {currentJobs.map((job, index) => (
                        <div
                            key={index}
                            className="p-5 bg-white w-full sm:w-[500px] shadow-lg rounded-md border border-[#D9CD9C] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <h3 className="text-xl font-semibold text-[#5F3131]">{job.title}</h3>
                            <p className="text-[#00163D] mt-2">{job.description}</p>
                            <p className="mt-2 text-sm text-[#16704C]">Experience: {job.experience}+ years</p>
                            <p className="text-[#00163D] mt-2">
                                <LocationOnIcon /> {job.location}
                            </p>
                            <button className="bg-[#FF914D] text-white py-2 px-4 rounded-md mt-4 hover:bg-[#E35134] transition duration-200">
                                Apply
                            </button>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => goToPage(i + 1)}
                            className={`px-4 py-2 rounded-md ${
                                currentPage === i + 1 ? "bg-[#FF914D] text-white" : "bg-white text-[#00163D] border border-[#D9CD9C]"
                            } hover:bg-[#E35134] transition duration-200`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </section>
        </>
    );
}
