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

          <div className={classes.mapContainer}>
            <h3>Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0029000334226!2d-77.03687068464788!3d38.90719207957018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b9b11b11b49b%3A0x9757b25b4aa5c99a!2sWhite%20House!5e0!3m2!1sen!2sus!4v1606853442246!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>

          <div className={classes.contactDetails}>
            <div>
              <FaMapMarkerAlt />
              <p>1234 Street Name, City, Country</p>
            </div>
            <div>
              <FaPhone />
              <p>+123 456 7890</p>
            </div>
            <div>
              <FaEnvelope />
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
