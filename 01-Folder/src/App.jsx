import React from "react";
import "./App.css";
import Card from "./components/Card";

const jobs = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Menlo Park, USA",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$50/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Los Gatos, USA",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    companyName: "NVIDIA",
    datePosted: "4 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    companyName: "Adobe",
    datePosted: "10 days ago",
    post: "UI/UX Developer",
    tag1: "Hybrid",
    tag2: "Junior Level",
    pay: "$58/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    companyName: "Uber",
    datePosted: "3 weeks ago",
    post: "Java Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    companyName: "OpenAI",
    datePosted: "1 day ago",
    post: "AI Software Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "San Francisco, USA",
  },
];

const App = () => {
  return (
    <div className="card-container">
      {
        jobs.map((elem, idx) => {
          return (
            <div key={idx}>
              <Card
                  brandLogo={elem.brandLogo} 
                  companyName={elem.companyName} 
                  datePosted={elem.datePosted} 
                  post={elem.post} 
                  tag1={elem.tag1} 
                  tag2={elem.tag2} 
                  pay={elem.pay} 
                  location={elem.location}
              />
            </div>
          )
        })
      }
    </div>
  );
};

export default App;