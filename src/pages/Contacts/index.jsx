import React from "react";
import classes from "./Contacts.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <>
      <div className={classes.contactContainer}>
        <h2>Contact Us</h2>

        <div className={classes.gridContainer}>
          <form
            className={classes.contactForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className={classes.contactDetails}>
            <div>
              <FaMapMarkerAlt />
              <p>16029, Birkhadem, Algerie</p>
            </div>
            <div>
              <FaPhone />
              <p>0794806315</p>
            </div>
            <div>
              <FaEnvelope />
              <p>contact@JurixPro.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.additionalSection}>
        <h3>Business Hours</h3>
        <p>Monday - Friday: 9am - 6pm</p>
        <p>Saturday: 10am - 4pm</p>
        <p>Sunday: Closed</p>
      </div>

      <footer className={classes.footer}>
        <p>&copy; 2024 JurixPro. All Rights Reserved.</p>
        <div className={classes.footerLinks}></div>
      </footer>
    </>
  );
};

export default ContactPage;
