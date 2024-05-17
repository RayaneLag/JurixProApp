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
          <button className={classes.freeTrialButton}>
            Tester gratuitement
          </button>
        </section>
      </div>

      <div className={classes.beta}>
        <Chatbot />
        <div className={classes.sigma}>
          <h2>L’information complète et à jour</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            dolor, voluptatem quae mollitia explicabo error! Magni ad quaerat
            ipsam ipsa necessitatibus explicabo nesciunt,
            <br /> praesentium modi maiores ullam, expedita iure deleniti neque
            voluptates enim vel totam mollitia saepe, eligendi obcaecati quae
            ab. Animi officia voluptate exercitationem voluptatum quo laborum
            necessitatibus deserunt!
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
    </>
  );
};

export default HeroSection;
