import React from "react";
import Image from "next/image";
function join() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="contactinfo">
            <div>
              <h2>Contact Info</h2>
              <ul className="info">
                <li>
                  <span>
                    <Image
                      src="/join/location.png"
                      alt="Image"
                      width={300}
                      height={300}
                    />
                  </span>
                  <span>
                    2912 Meadowbr/ook Road
                    <br />
                    Los Angeles, CA
                    <br />
                    90017
                  </span>
                </li>
                <li>
                  <span>
                    <Image
                      src="/join/mail.png"
                      alt="Image"
                      width={300}
                      height={300}
                    />
                  </span>
                  <span>lorem@ipsum.com</span>
                </li>
                <li>
                  <span>
                    <Image
                      src="/join/call.png"
                      alt="Image"
                      width={300}
                      height={300}
                    />
                  </span>
                  <span>310-386-1623</span>
                </li>
              </ul>
            </div>
            <ul className="sci">
              <li>
                <a href="#">
                  <Image
                    src="/join/1.png"
                    alt="Image"
                    width={300}
                    height={300}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src="/join/2.png"
                    alt="Image"
                    width={300}
                    height={300}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src="/join/3.png"
                    alt="Image"
                    width={300}
                    height={300}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src="/join/4.png"
                    alt="Image"
                    width={300}
                    height={300}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src="/join/5.png"
                    alt="Image"
                    width={300}
                    height={300}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="contactForm">
            <h2>Send a Message</h2>
            <div className="formBox">
              <div className="inputBox w50">
                <input type="text" name="" required />
                <span>First Name</span>
              </div>
              <div className="inputBox w50">
                <input type="text" name="" required />
                <span>Last Name</span>
              </div>
              <div className="inputBox w50">
                <input type="text" name="" required />
                <span>Email Address</span>
              </div>
              <div className="inputBox w50">
                <input type="text" name="" required />
                <span>Mobile Number</span>
              </div>
              <div className="inputBox w100">
                <textarea name="" required></textarea>
                <span>Write your message here...</span>
              </div>
              <div className="inputBox w100">
                <input type="submit" value="Send" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default join;
