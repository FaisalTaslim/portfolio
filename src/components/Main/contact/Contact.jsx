import CapsuleText from "../../user-interface/Capsule-Text.jsx";
import HeaderCard from "../../user-interface/cards/HeaderCard.jsx";
import { ContactsData } from "../../../data/card-data.js";

import "../../user-interface/cards/Card.css";
import "../../user-interface/Capsule-Text.css";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contact contact-item" data-aos="fade-up">
          <CapsuleText text="— GET IN TOUCH" override={true} />
          <div className="divide-headers">
            <h2>Let's Build Something</h2>
            <h2 className="contact-highlight-header">Amazing Together</h2>
          </div>
          <p>
            I'm currently open to new opportunities and exciting projects.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you.
          </p>
          <div className="contacts-list">
            {ContactsData.map((contact) => (
              <HeaderCard
                key={contact.heading}
                icon={contact.icon}
                heading={contact.heading}
                caption={contact.caption}
              />
            ))}
          </div>
        </div>
        <div className="contact-form">
          <HeaderCard
            icon="fa-regular fa-file"
            heading="Send Me a Message"
            caption="Fill out the form below and I'll get back to you as soon as possible."
          />

          <form
            className="pform"
            action="https://formspree.io/f/xqeonzla"
            method="POST"
            target="_top"
          >
            <div className="pform-row">
              <div className="pform-field">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="pform-field">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div className="pform-field pform-full">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>

            <div className="pform-field pform-full">
              <textarea
                id="message"
                name="message"
                rows="8"
                placeholder="Your Message"
                required
              />
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className="socials">
        <div className="socials-left">
          <h3>Let's connect</h3>
          <p>Find me on these platforms</p>
        </div>

        <div className="divider"></div>

        <div className="socials-right">
          <a href="#" className="social-btn">
            <i className="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>

          <a href="#" className="social-btn">
            <i className="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>

          <a href="#" className="social-btn">
            <i className="fa-brands fa-x-twitter"></i>
            <span>Twitter</span>
          </a>

          <a href="#" className="social-btn">
            <i className="fa-brands fa-instagram"></i>
            <span>Instagram</span>
          </a>

          <a href="#" className="social-btn">
            <i className="fa-regular fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
