import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "./stats.module.css";

// Enregistrer les composants Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Stats = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Performances Mensuelles",
        data: [65, 59, 80, 81, 56, 55, 40, 80, 95, 100, 85, 90],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={styles.statsContainer}>
      <h1>Statistiques et Performances Juridiques du cabinet</h1>

      <div className={styles.summaryContainer}>
        <h2>Résumé</h2>
        <div className={styles.summaryItem}>
          <h3>Cas Traités</h3>
          <p>150</p>
        </div>
        <div className={styles.summaryItem}>
          <h3>Cas Gagnés</h3>
          <p>120</p>
        </div>
        <div className={styles.summaryItem}>
          <h3>Taux de Réussite</h3>
          <p>80%</p>
        </div>
      </div>

      <div className={styles.performanceChartContainer}>
        <h2>Performances Mensuelles</h2>
        <div className={styles.chartWrapper}>
          <Line data={data} options={options} />
        </div>
      </div>

      <div className={styles.recentCasesContainer}>
        <h2>Cas Récents</h2>
        <div className={styles.caseItem}>
          <h3>
            <strong> Affaire 0723045</strong>
          </h3>
          <p>vol a main armée</p>
        </div>
        <div className={styles.caseItem}>
          <h3>
            <strong> Affaire 032615</strong>
          </h3>
          <p>Divorce et separation</p>
        </div>
        <div className={styles.caseItem}>
          <h3>
            <strong> Affaire 072683</strong>
          </h3>
          <p>licenciement abusif</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
