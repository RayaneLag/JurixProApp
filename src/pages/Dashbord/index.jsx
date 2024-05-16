import React from "react";
import "./dashboard.css";
import Slide from "../../components/Slide";

// const images = [
//   "https://www.cidj.com/sites/default/files/styles/full_article/public/2017-12/5.50-nicolas-joses-chirado-fotolia.jpg?itok=r8pL-BuN",
//   "https://www.cidj.com/sites/default/files/styles/full_article/public/2017-12/5.50-nicolas-joses-chirado-fotolia.jpg?itok=r8pL-BuN",
//   "https://www.cidj.com/sites/default/files/styles/full_article/public/2017-12/5.50-nicolas-joses-chirado-fotolia.jpg?itok=r8pL-BuN",
// ];

// const textOverlay = [
//   "Texte pour image 1",
//   "Texte pour image 2",
//   "Texte pour image 3",
// ];

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="flex-container">
          <div className="content">
            <div>Jurix-Chat</div>
            <div>Jurix-Planner</div>
            <div>Jurix-Clients</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
