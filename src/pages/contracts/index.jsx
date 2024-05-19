import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "./contracts.module.css";

// Enregistrer les composants Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const Contracts = () => {
  const data = {
    labels: ["Actifs", "Expirés", "En Attente"],
    datasets: [
      {
        label: "Requetes",
        data: [50, 20, 15],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className={styles.contractsContainer}>
      <h1 className={styles.myH2}>Gérez vos requête introductive d'instance</h1>

      <div className={styles.summaryContainer}>
        <h2>Résumé des demandes d'instance </h2>
        <div className={styles.summaryItem}>
          <h3>requêtes Actifs</h3>
          <p>50</p>
        </div>
        <div className={styles.summaryItem}>
          <h3>requêtes Expirés</h3>
          <p>20</p>
        </div>
        <div className={styles.summaryItem}>
          <h3>requêtes en Attente</h3>
          <p>15</p>
        </div>
      </div>

      <div className={styles.chartContainer}>
        <h2>Répartition des requêtes</h2>
        <div className={styles.chartWrapper}>
          <Doughnut data={data} options={options} />
        </div>
      </div>

      <div className={styles.contractListContainer}>
        <h2 className={styles.myH2}>Liste des Contrats</h2>
        <div className={styles.contractItem}>
          <h3 className={styles.myH3} >Requête 1</h3>
          <p>
            Requête deposer le 01/01/2023 a 12:00 PM au tribunal de Cheraga :
            Affaire 0723045
          </p>
        </div>
        <div className={styles.contractItem}>
          <h3 className={styles.myH3}> Requête 2</h3>
          <p>
            Requête deposer le 30/04/2024 a 12:00 PM au tribunal de BirMourad
            Rais: Affaire 032615
          </p>
        </div>
      </div>

      <div className={styles.contractDetailsContainer}>
        <h2 className={styles.myH2}>Détails des Affaires</h2>
        <div className={styles.detailsItem}>
          <h3 className={styles.myH3}>Affaire 1</h3>
          <p>
            Monsieur x est armé entre dans une bijouterie, menace le bijoutier
            et vole des bijoux. Il s'enfuit rapidement, mais est identifié et
            arrêté grâce aux caméras de surveillance et aux témoins..
          </p>
        </div>
        <div className={styles.detailsItem}>
          <h3 className={styles.myH3}>Affaire 2</h3>
          <p>
            Madame x demande le Divorce. Ils se disputent sur la garde des
            enfants et le partage des biens. Le tribunal tranche en faveur d'une
            garde partagée et divise les biens équitablement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contracts;
