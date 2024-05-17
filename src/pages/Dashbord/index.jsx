import React from "react";
import {
  FaChartLine,
  FaFileContract,
  FaUsers,
  FaComments,
  FaTasks,
} from "react-icons/fa";
import "./dashbord.css";

const Dashbord = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Tableau de Bord</h1>
        <p>Bienvenue dans votre tableau de bord JurixPro</p>
      </header>

      <section className="statistics">
        <div className="stat-card">
          <FaChartLine className="stat-icon" />
          <div>
            <h3>Statistiques</h3>
            <p>Consultez vos statistiques et performances juridiques.</p>
          </div>
        </div>
        <div className="stat-card">
          <FaFileContract className="stat-icon" />
          <div>
            <h3>Contrats</h3>
            <p>Gérez vos contrats facilement et efficacement.</p>
          </div>
        </div>
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <div>
            <h3>Clients</h3>
            <p>Visualisez et gérez vos clients.</p>
          </div>
        </div>
        <div className="stat-card">
          <FaComments className="stat-icon" />
          <div>
            <h3>Chat</h3>
            <p>Communiquez avec vos clients et votre équipe.</p>
          </div>
        </div>
        <div className="stat-card">
          <FaTasks className="stat-icon" />
          <div>
            <h3>Planification</h3>
            <p>Planifiez et suivez vos tâches.</p>
          </div>
        </div>
      </section>

      <section className="charts">
        <div className="chart-card">
          <h3>Performance des Contrats</h3>
          <img
            src="path/to/chart1.png"
            alt="Graphique de performance des contrats"
          />
        </div>
        <div className="chart-card">
          <h3>Interaction avec les Clients</h3>
          <img
            src="path/to/chart2.png"
            alt="Graphique d'interaction avec les clients"
          />
        </div>
      </section>

      <footer className="dashboard-footer">
        <p>&copy; 2024 JurixPro. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Dashbord;
