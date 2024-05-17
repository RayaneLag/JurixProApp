import React from "react";
import classes from "./Stud.module.css";

const StudPage = () => {
  return (
    <div className={classes.studContainer}>
      <header className={classes.header}>
        <h1>JurixPro for Students</h1>
        <p>Empowering the next generation of legal professionals</p>
      </header>

      <section className={classes.section}>
        <h2 className={classes.title}>Explore Our Features</h2>
        <div className={classes.features}>
          <div className={classes.feature}>
            <img
              src="https://www.bnf.fr/sites/default/files/2018-12/BNF_ENN_5343-2_FB.jpg"
              alt="Library Access"
            />
            <h3>Library Access</h3>
            <p>Get unlimited access to a wide range of legal resources.</p>
          </div>
          <div className={classes.feature}>
            <img
              src="https://www.reussirmavie.net/photo/art/grande/26022650-26974763.jpg?v=1538512863"
              alt="Online Courses"
            />
            <h3>Online Courses</h3>
            <p>
              Join courses from leading legal experts to enhance your knowledge.
            </p>
          </div>
          <div className={classes.feature}>
            <img
              src="https://storage.letudiant.fr/mediatheque/letudiant/9/6/2742896-jeune-juriste-lisant-a-un-bureau-dans-une-bibliotheque-de-droit-610x370.jpg"
              alt="Internship Programs"
            />
            <h3>Internship Programs</h3>
            <p>Find internships that give you real-world legal experience.</p>
          </div>
        </div>
      </section>

      <section className={classes.section}>
        <h2 className={classes.title}>How We Help</h2>
        <div className={classes.helpSections}>
          <div className={classes.helpItem}>
            <h3>Study Materials</h3>
            <p>Access notes, case studies, and articles to aid your studies.</p>
          </div>
          <div className={classes.helpItem}>
            <h3>Mentorship</h3>
            <p>Connect with experienced lawyers for guidance and advice.</p>
          </div>
          <div className={classes.helpItem}>
            <h3>Networking Events</h3>
            <p>
              Attend events to meet peers and professionals in the legal field.
            </p>
          </div>
        </div>
      </section>

      <section className={classes.section}>
        <h2 className={classes.title}>Student Testimonials</h2>
        <div className={classes.testimonials}>
          <div className={classes.testimonial}>
            <p>
              "JurixPro has been a game-changer in my legal studies. The
              resources are top-notch!"
            </p>
            <strong>- Ali, Law Student</strong>
          </div>
          <div className={classes.testimonial}>
            <p>
              "The mentorship program connected me with professionals who have
              guided me through my career decisions."
            </p>
            <strong>- Fatima, Law Student</strong>
          </div>
        </div>
      </section>

      <footer className={classes.footer}>
        <p>&copy; 2024 JurixPro. All Rights Reserved.</p>
        <div className={classes.footerLinks}></div>
      </footer>
    </div>
  );
};

export default StudPage;
