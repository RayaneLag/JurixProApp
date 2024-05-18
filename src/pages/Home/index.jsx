import React from "react";
import { FaRegComments, FaRegCalendarCheck } from "react-icons/fa";
import classes from "./hero.module.css";
import { Chatbot } from "../../components/chatbot";
import { Sigma } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <div className={classes.beta}>
        <section className={classes.hero}>
          <div className={classes.backgroundImage} />
          <h1 className={classes.title}>JurixPro</h1>
          <p className={classes.subtitle}>
            "Révolutionnez votre gestion juridique avec l'intelligence
            artificielle, conçue spécialement pour les professionnels algériens.
            Découvrez comment simplifier vos processus légaux avec précision et
            efficacité"
          </p>
        </section>
      </div>

      <div className={classes.beta}>
        <Chatbot />
        <div className={classes.sigma}>
          <img
            src="/logo_jurixPro-removebg-preview.png"
            alt="logo"
            className={classes.logo}
          />
          <h2 className={classes.sigmaTitle}>
            L’information complète et à jour :
          </h2>
          <p className={classes.sigmaSubtitle}>
            JurixPro est une legaltech innovante dédiée à transformer le paysage
            juridique en Algérie. En combinant l'expertise juridique
            traditionnelle avec les dernières avancées technologiques, JurixPro
            offre des solutions intelligentes et efficaces pour les
            professionnels du droit.
          </p>
        </div>
      </div>

      <section className={classes.testimonialsSection}>
        <h2 className={classes.testimonialsTitle}>
          Une technologie sécurisée qui convainc <br /> déjà les meilleurs
          avocats et juristes du marché.
        </h2>
        <p>
          {" "}
          <strong>
            De l'avocat individuel aux plus grands cabinets d'affaires,
            directions juridiques de toutes tailles, ministères et organismes
            publics
          </strong>
        </p>
        <div className={classes.testimonialsContainer}>
          <div className={classes.testimonial}>
            <img
              src="https://www.algerie-eco.com/wp-content/uploads/2019/06/images-3.jpeg"
              alt="Témoignage 1"
              className={classes.testimonialPhoto}
            />
            <p>
              "Révolution Juridique : <br /> Les Tribunaux Algériens à l'Ère de
              l'Intelligence Artificielle"
            </p>
          </div>
          <div className={classes.testimonial}>
            <img
              src="https://avocatalgerien.com/wp-content/uploads/2015/01/avocate-1.jpg"
              alt="Témoignage 2"
              className={classes.testimonialPhoto}
            />
            <p>
              "Avocat et Technologie : <br /> Une Collaboration Gagnante avec
              JurixPro
            </p>
          </div>
          <div className={classes.testimonial}>
            <img
              src="https://www.algerie-focus.com/wp-content/uploads/2022/11/tribunal.jpg"
              alt="Témoignage 3"
              className={classes.testimonialPhoto}
            />
            <p>
              Innovation et Tradition : <br /> L'IA dans les Cabinets Juridiques
            </p>
          </div>
        </div>
      </section>
      <section className={classes.section}>
        <h2 className={classes.MyTeam}>Meet Our Team</h2>
        <div className={classes.teamMember}>
          <img
            src="https://cdn.discordapp.com/attachments/1229742101009272833/1241093431833526272/RA.jpg?ex=6648f1d4&is=6647a054&hm=7b7c963f382fe73b3681a2a517a60a5556bca7b9278bba26b5e1b4f5797894b7&"
            alt="Team Member"
          />
          <div className={classes.memberInfo}>
            <h3>LAGGOUN RAYANE</h3>
            <p>
              Un jeune diplômé de la Faculté de Droit avec un Master 2 en Droit
              Pénal et Sciences Criminelles. Il est également développeur
              fullstack junior, passionné par la fusion de son expertise
              juridique avec la technologie pour innover et améliorer le paysage
              de la legaltech.
            </p>
          </div>
        </div>
      </section>
      <footer className={classes.footer}>
        <p>&copy; 2024 JurixPro. All Rights Reserved.</p>
        <div className={classes.footerLinks}></div>
      </footer>
    </>
  );
};

export default HeroSection;
