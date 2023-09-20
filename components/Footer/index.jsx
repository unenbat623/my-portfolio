import React from "react";
import styles from "./style.module.css";
import style from "@/components/Footer/";
function Footer() {
  return (
    <footer>
      <div className="container">
        <h3>
          <img
            src="https://www.pngmart.com/files/13/Supernatural-Logo-PNG-Transparent-Image.png"
            width={300}
            height={160}
          />
        </h3>
        <ul className="contents">
          <h3 className="social">Social</h3>
          <li>
            <a href="#"></a>Instagram
          </li>
          <li>
            <a href="#"></a>Facebook
          </li>
          <li>
            <a href="#"></a>Twitter
          </li>
          <li>
            <a href="#"></a>Youtube
          </li>
        </ul>
        <div className="ftr">
          <h3>Use Cases</h3>
          <ul className="contents">
            <li>
              <a href="#"></a>UI Design
            </li>
            <li>
              <a href="#"></a>UX Design
            </li>
            <li>
              <a href="#"></a>Prototyping
            </li>
            <li>
              <a href="#"></a>UA Design
            </li>
          </ul>
        </div>
        <div className="ftr">
          <h3>Explore</h3>
          <ul className="contents">
            <li>
              <a href="#"></a>Figma
            </li>
            <li>
              <a href="#"></a>Customers
            </li>
            <li>
              <a href="#"></a>Why i love Pincone
            </li>
            <li>
              <a href="#"></a>Why i love Full stack
            </li>
          </ul>
        </div>
        <div className="ftr">
          <h3>Resources</h3>
          <ul className="contents">
            <li>
              <a href="#"></a>Community Resources
            </li>
            <li>
              <a href="#"></a>Support
            </li>
            <li>
              <a href="#"></a>Education
            </li>
            <li>
              <a href="#"></a>minii nudruu har
            </li>
          </ul>
        </div>
        <div className="ftr">
          <h3>Subscribe to our newsletter</h3>
          <form action="#">
            <input type="Email" placeholder="Email" required />
            <div className="bttn">
              <input type="submit" value="Enter" />
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
