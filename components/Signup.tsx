import React from "react";
import Image from "next/image";
function Signup() {
  return (
    <div className="joinback">
      <div className="contactus">
        <div className="title">
          <h2>Get in Touch</h2>
        </div>
        <div className="box">
          <div className="contact form">
            <h3>Send a Message</h3>
            <form>
              <div className="formBx">
                <div className="row50">
                  <div className="inputBox">
                    <span>First Name</span>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="inputBox">
                    <span>Last Name</span>
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>
                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input type="text" placeholder="Ex: johndoe@email.com" />
                  </div>
                  <div className="inputBox">
                    <span>Mobile</span>
                    <input type="text" placeholder="+91 987 654 3210" />
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <span>Message</span>
                    <textarea placeholder="Write your message here..."></textarea>
                  </div>
                </div>
                <div className="row100">
                  <div className="inputBox">
                    <input type="submit" value="Send" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="contact info">
            <h3>Contact Info</h3>
            <div className="infoBox">
              <div>
                <span>
                  {" "}
                  <Image
                    src="/join/location.png"
                    alt="Image"
                    width={35}
                    height={35}
                  />
                </span>
                <p>
                  Cannaught Palace, New Delhi
                  <br />
                  India
                </p>
              </div>
              <div>
                <span>
                  <Image
                    src="/join/mail.png"
                    alt="Image"
                    width={35}
                    height={35}
                  />
                </span>
                <a href="mailto:loremipsum@dolar.sit">loremipsum@dolar.sit</a>
              </div>
              <div>
                <span>
                  {" "}
                  <Image
                    src="/join/call.png"
                    alt="Image"
                    width={35}
                    height={35}
                  />
                </span>
                <a href="tel:+919876543210">+91 987 654 3210</a>
              </div>
              <ul className="sci">
                <li>
                  <a href="#">
                    <Image
                      src="/join/1.png"
                      alt="Image"
                      width={35}
                      height={35}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/join/2.png"
                      alt="Image"
                      width={35}
                      height={35}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/join/3.png"
                      alt="Image"
                      width={35}
                      height={35}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/join/4.png"
                      alt="Image"
                      width={35}
                      height={35}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/join/5.png"
                      alt="Image"
                      width={35}
                      height={35}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114827184252!2d77.20653218124517!3d28.6289017187057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1632359812844!5m2!1sen!2sin"
              //   allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      {/* <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> */}
    </div>
  );
}

export default Signup;
