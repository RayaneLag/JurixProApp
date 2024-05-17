import React from "react";
import styles from "./avocat.module.css";

const CabinetAvocat = () => {
  return (
    <div className={styles.container}>
      <header className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Bienvenue chez JurixPro</h1>
        <p className={styles.heroSubtitle}>
          Révolutionner le monde juridique algérien avec l'IA
        </p>
      </header>

      <section className={styles.aboutSection}>
        <img
          className={styles.logo}
          src="/logo_jurixPro-removebg-preview.png"
          alt="Logo"
        />
        <p className={styles.sectionDescription}>
          JurixPro est une legal tech innovante qui utilise l'intelligence
          artificielle pour optimiser les services juridiques en Algérie. Nos
          solutions permettent aux cabinets d'avocats de travailler plus
          efficacement et de se concentrer sur ce qui compte vraiment.
        </p>
      </section>

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Pour vous !</h2>
        <div className={styles.serviceCards}>
          <div className={styles.serviceCard}>
            <p>
              Interagissez directement avec le Code algérien grâce à notre
              plateforme innovante. Explorez, consultez et appliquez les lois en
              toute simplicité avec JurixPro.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Gestion Documentaire</h3>
            <p>
              Optimisez la gestion de vos documents légaux avec nos outils
              intelligents.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Analyse de Contrats</h3>
            <p>Analysez et vérifiez vos contrats en un clin d'œil.</p>
          </div>
        </div>
      </section>

      <footer className={styles.footerSection}>
        <p>&copy; 2024 JurixPro. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default CabinetAvocat;
