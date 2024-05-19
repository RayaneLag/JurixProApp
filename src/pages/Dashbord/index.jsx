import React from "react";
import { FaChartLine, FaFileContract, FaUsers, FaTasks } from "react-icons/fa";
import "./dashbord.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashbord = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (props) => {
    navigate(`/${props}`);
  };

  return (
    <>
      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          <header className="dashboard-header">
            <h1>Tableau de Bord</h1>
            <p>Bienvenue dans votre tableau de bord JurixPro</p>
          </header>

          <section className="statistics">
            <div className="stat-card">
              <FaChartLine className="stat-icon" />
              <div onClick={() => handleClick("Stats")}>
                <h3>Statistiques</h3>
                <p>Consultez vos statistiques et performances juridiques.</p>
              </div>
            </div>
            <div className="stat-card">
              <FaFileContract className="stat-icon" />
              <div onClick={() => handleClick("contracts")}>
                <h3>Requete d'instance</h3>
                <p>Gérez vos requêtes facilement et efficacement.</p>
              </div>
            </div>
            <div className="stat-card">
              <FaUsers className="stat-icon" />
              <div onClick={() => handleClick("clients")}>
                <h3>Clients</h3>
                <p>Visualisez et gérez vos clients.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
