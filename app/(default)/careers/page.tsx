

import HeroBanner from "@/components/careersPage/HeroBanner";
import JobList from "@/components/careersPage/JobList";
import Footer from "@/components/ui/footer";


export const metadata = {
    title: "Careers",
    description: "Careers Page",
  };


interface Job {
    title: string;
    description: string;
    experience:number;
    location:string;
}

export default function CareersPage() {
    const jobs: Job[] = [
        { title: 'Frontend Developer', description: 'Develop and optimize front-end web applications...', location: "On-site", experience: 2 },
        { title: 'Backend Developer', description: 'Implement and maintain server-side logic...', location: "Remote", experience: 3 },
        { title: 'Full Stack Developer', description: 'Work on both frontend and backend of applications...', location: "Remote", experience: 4 },
        { title: 'Data Scientist', description: 'Analyze data and provide business insights...', location: "On-site", experience: 2 },
        { title: 'Machine Learning Engineer', description: 'Build and deploy ML models...', location: "Remote", experience: 0 },
        { title: 'Product Manager', description: 'Manage product life cycle from ideation to launch...', location: "On-site", experience: 3 },
        { title: 'UI/UX Designer', description: 'Design user-centered interfaces and experiences...', location: "Remote", experience: 2 },
        { title: 'DevOps Engineer', description: 'Optimize development pipelines and manage CI/CD...', location: "On-site", experience: 4 },
        { title: 'QA Engineer', description: 'Conduct automated and manual testing...', location: "Remote", experience: 1 },
        { title: 'Systems Analyst', description: 'Evaluate and improve system efficiency...', location: "On-site", experience: 6 },
        { title: 'Product Manager', description: 'Manage product life cycle from ideation to launch...', location: "On-site", experience: 1 },
        { title: 'UI/UX Designer', description: 'Design user-centered interfaces and experiences...', location: "Remote", experience: 2 },
        { title: 'DevOps Engineer', description: 'Optimize development pipelines and manage CI/CD...', location: "On-site", experience: 4 },
        { title: 'QA Engineer', description: 'Conduct automated and manual testing...', location: "Remote", experience: 1 },
        { title: 'Systems Analyst', description: 'Evaluate and improve system efficiency...', location: "On-site", experience: 5 }
    ];
    
  

    return (
        <div>
            <HeroBanner />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 my-24">
            <JobList jobs={jobs} />
            </div>
          
            <Footer/>
        </div>
    );
}
