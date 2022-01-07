import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./Contact.css";
import { IoIosSend } from "react-icons/io";

function Contact() {
  return (
    <>
      <ScrollToTop
        smooth
        top="30"
        color="white"
        style={{ background: "#b0b0b0" }}
      />
      <div className="container-contact">
        <div className="contact-top">
          <div className="contact-title">Stay Tuned</div>
          <div className="contact-line"> </div>
          <div className="contact-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim
            ad minim veniam.
          </div>
        </div>
        <div className="contact-bottom">
          <div className="contact-box">
            <div className="contact-box-first">
              <div className="contact-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt expedita hic, sint quibusdam nemo nihil. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna.
              </div>
              <ul>
                <li>
                  <div className="contact-icons">
                    <i class="fas fa-home"></i>
                  </div>
                  <div>Beirut, Barbour main street, DC 2002</div>
                </li>
                <li>
                  <div className="contact-icons">
                    <i class="fas fa-phone-alt"></i>
                  </div>
                  <div>+1 230 456 789-012 345 6789</div>
                </li>
                <li>
                  <div className="contact-icons">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div>exampledomain@domain.com</div>
                </li>
              </ul>
            </div>
            <div className="contact-box-second">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea
                className="textarea"
                cols="30"
                rows="8"
                placeholder="Message"
              ></textarea>
              <button className="contact-msg">
                <IoIosSend />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
