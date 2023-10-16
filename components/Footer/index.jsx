import React from "react";
import { images } from "@/next.config";
import Layout from "../../Layout";
function Footer() {
  return (
    <Layout>
      <footer className="">
        <div className="container">
          <h3>
            <img src="unenbat.png" width={200} height={120} />
          </h3>
          <div className="ftr">
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
          </div>
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
                <a href="#"></a>HarDar
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
    </Layout>
  );
}
export default Footer;
