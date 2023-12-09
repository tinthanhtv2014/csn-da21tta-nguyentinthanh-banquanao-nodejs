import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons"; // Cập nhật dòng này
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Thêm dòng này

import "./styleFooter.css";

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer_Footer">
        <div className="container_Footer">
          <div className="row_Footer">
            <div className="W30__Footer">
              <h6>About</h6>
              <p className="text-justify_Footer">
                Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative
                to help the upcoming programmers with the code. Scanfcode
                focuses on providing the most efficient code or snippets as the
                code wants to be simple. We will help programmers build up
                concepts in different programming languages that include C, C++,
                Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
                Algorithm.
              </p>
            </div>

            <div className="W30__Footer">
              <h6>Categories</h6>
              <ul className="footer-links_Footer">
                <li>
                  <a href="http://scanfcode.com/category/c-language/">C</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                    UI Design
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                    PHP
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/java-programming-language/">
                    Java
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/android/">Android</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/templates/">
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div className="W30__Footer">
              <h6>Quick Links</h6>
              <ul className="footer-links_Footer">
                <li>
                  <a href="http://scanfcode.com/about/">About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Contact Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contribute-at-scanfcode/">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>

          <hr />
        </div>
        <div className="container_Footer">
          <div className="row_Footer">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text_Footer">
                Copyright &copy; 2017 All Rights Reserved by
                <a href="#">Scanfcode</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons_Footer">
                <li>
                  <a className="facebook" href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <FontAwesomeIcon icon={faDribbble} />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
