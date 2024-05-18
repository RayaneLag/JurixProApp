import React from "react";
import classes from "./Fonctionnalité.module.css";

const FonctionnalitePage = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>Nos Fonctionnalités</h1>
        <p>
          Découvrez comment JurixPro révolutionne le monde juridique avec ses
          fonctionnalités innovantes.
        </p>
      </header>

      <section className={classes.features}>
        <div className={`${classes.featureCard} ${classes.fadeIn}`}>
          <img
            src="https://hubcollab.com/wp-content/uploads/2022/03/5-facons-de-faire-gagner-du-temps-et-de-largent-a-votre-organisation-grace-a-lautomatisation-du-flux-de-documents-1080x675.jpg"
            alt="Automatisation des Documents"
          />
          <h3>
            <strong> Automatisation des Documents </strong>
          </h3>
          <p>
            Découvrez comment gérer vos contrats avec efficacité grâce à notre
            solution complète. Suivez chaque étape, recevez des alertes
            automatiques et assurez une transparence totale dans la gestion de
            vos documents juridiques.
          </p>
        </div>
        <div
          className={`${classes.featureCard} ${classes.fadeIn}`}
          style={{ animationDelay: "0.2s" }}
        >
          <img
            src="https://s3.eu-west-3.amazonaws.com/quai-des-entrepreneurs.com/wp-content/uploads/2021/04/18155049/Les_fondamentaux_de_la_gestion_des_contrats.jpg"
            alt="Gestion de Contrats"
          />
          <h3>
            {" "}
            <strong> Gestion de Contrats</strong>
          </h3>
          <p>
            Gérez vos contrats de manière efficace avec notre solution complète.
            De la création à la signature, suivez les obligations, recevez des
            alertes automatiques et maintenez une transparence totale, assurant
            ainsi une gestion sans faille de vos documents juridiques.
          </p>
        </div>
        <div
          className={`${classes.featureCard} ${classes.fadeIn}`}
          style={{ animationDelay: "0.4s" }}
        >
          <img
            src="https://aware-commons.s3.amazonaws.com/static-files/sf-website/articles/legal-chatbots-in-2020.png"
            alt="Suivi de la Conformité"
          />
          <h3>
            {" "}
            <strong> ChatBot</strong>
          </h3>
          <p>
            Notre chatbot intelligent offre une assistance juridique
            instantanée. Disponible 24/7, il répond à vos questions, vous guide
            dans les processus légaux et vous aide à trouver des ressources
            spécifiques, rendant le droit accessible à tout moment.
          </p>
        </div>
        <div
          className={`${classes.featureCard} ${classes.fadeIn}`}
          style={{ animationDelay: "0.6s" }}
        >
          <img
            src="https://www.osezvosdroits.com/wp-content/uploads/2023/08/adobestock-574549902.jpg"
            alt="Recherche Juridique"
          />
          <h3>
            {" "}
            <strong>Recherche Juridique</strong>
          </h3>
          <p>
            Gérez vos contrats de manière efficace et transparente avec notre
            solution complète. Suivez chaque étape du cycle de vie, recevez des
            alertes automatiques et assurez une conformité totale.
          </p>
        </div>
      </section>
      <footer className={classes.footer}>
        <p>&copy; 2024 JurixPro. All Rights Reserved.</p>
        <div className={classes.footerLinks}></div>
      </footer>
    </div>
  );
};

export default FonctionnalitePage;
