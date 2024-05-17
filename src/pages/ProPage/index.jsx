import React from "react";
import classes from "./Pro.module.css";

const ProPage = () => {
  return (
    <div className={classes.proContainer}>
      <header className={classes.header}>
        <h1>Welcome to JurixPro</h1>
        <p>Your trusted partner in legal technology</p>
      </header>

      <section className={classes.section}>
        <h2 className={classes.title}>Our Services</h2>
        <div className={classes.serviceCards}>
          <div className={classes.card}>
            <img
              src="https://plus.unsplash.com/premium_photo-1661333820879-517c5e808bfe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZvY2F0fGVufDB8fDB8fHww"
              alt="Service 1"
            />
            <h3>Document Automation</h3>
            <p>
              Automate your legal documents with our cutting-edge technology.
            </p>
          </div>
          <div className={classes.card}>
            <img
              src="https://media.istockphoto.com/id/1456104141/fr/photo/avocat-qui-fournit-des-conseils-juridiques-dans-le-bureau-homme-daffaires-et-avocat-se.webp?b=1&s=170667a&w=0&k=20&c=XTaQ0V-IvbUGj1elHyKr-THQE4JA_0RXBraocCx0BVg="
              alt="Service 2"
            />
            <h3>Contract Management</h3>
            <p>
              Manage your contracts efficiently with our comprehensive solution.
            </p>
          </div>
          <div className={classes.card}>
            <img
              src="https://www.avocats-tours.eu/wp-content/uploads/2022/09/avocat-paris-678x381.jpeg"
              alt="Service 3"
            />
            <h3>Compliance Tracking</h3>
            <p>Ensure compliance with our easy-to-use tracking tools.</p>
          </div>
        </div>
      </section>

      <section className={classes.section}>
        <h2 className={classes.title}>Why Choose Us?</h2>
        <div className={classes.features}>
          <div className={classes.feature}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBsaNB0fO_IAJsS0it0u5cvu3DbisDRqEzjxZYuqXLBzmk0YWHbSTldwUiHCtqy3dAja8&usqp=CAU"
              alt="Feature 1"
            />
            <h3>Expert Support</h3>
            <p>
              Our team of experts is here to support you every step of the way.
            </p>
          </div>
          <div className={classes.feature}>
            <img
              src="https://www.legalprod.com/wp-content/uploads/2023/07/femme-tapant-ordinateur-portable-au-bureau-genere-par-ia-1.jpg"
              alt="Feature 2"
            />
            <h3>Innovative Solutions</h3>
            <p>We provide innovative solutions tailored to your needs.</p>
          </div>
          <div className={classes.feature}>
            <img
              src="https://media.licdn.com/dms/image/D4E10AQFgks2RMLiiEQ/image-shrink_1280/0/1706728476980?e=2147483647&v=beta&t=ijvSJZvlQCUyx1w1JKOEBTPue3_E5tQdt3vplIXAo0E"
              alt="Feature 3"
            />
            <h3>Cost Effective</h3>
            <p>
              Our solutions are designed to be cost-effective and efficient.
            </p>
          </div>
        </div>
      </section>

      <section className={classes.section}>
        <h2 className={classes.title}>Testimonials</h2>
        <div className={classes.testimonials}>
          <div className={classes.testimonial}>
            <p>
              "JurixPro has transformed the way we handle legal documents.
              Highly recommended!"
            </p>
            <strong>- Omar, Corporate Lawyer</strong>
          </div>
          <div className={classes.testimonial}>
            <p>
              "The compliance tracking feature is a game-changer for our firm."
            </p>
            <strong>- Ahmed, Legal Advisor</strong>
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

export default ProPage;
