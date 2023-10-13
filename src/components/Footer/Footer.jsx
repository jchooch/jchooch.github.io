import homeIcon from "../../assets/footer/home.png";
import emailIcon from "../../assets/footer/email.png";
import linkedinIcon from "../../assets/footer/linkedin.png";
import githubIcon from "../../assets/footer/github.png";
import twitterIcon from "../../assets/footer/twitter.png";
import cvIcon from "../../assets/footer/cv.png";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer({ home }) {
  return (
    <>
      <ul className="footer-list">
        {home && (
          <li className="footer-card footer-card--home">
            <img src={homeIcon} alt="home" className="footer-card__logo" />{" "}
            London, UK
          </li>
        )}
        <li className="footer-card">
          <a href="mailto:joechoochoy@gmail.com">
            <img src={emailIcon} alt="email" className="footer-card__logo" />{" "}
            joechoochoy
          </a>
        </li>
        <li className="footer-card">
          <a href="https://www.linkedin.com/in/joe-choo-choy/">
            <img
              src={linkedinIcon}
              alt="linkedin"
              className="footer-card__logo"
            />{" "}
            joe-choo-choy
          </a>
        </li>
        <li className="footer-card">
          <a href="https://github.com/jchooch">
            <img src={githubIcon} alt="github" className="footer-card__logo" />{" "}
            jchooch
          </a>
        </li>
        <li className="footer-card">
          <a href="https://twitter.com/joechoochoy">
            <img
              src={twitterIcon}
              alt="twitter"
              className="footer-card__logo"
            />{" "}
            joechoochoy
          </a>
        </li>
        {home && (
          <li className="footer-card">
            <Link to="/cv">
              <img src={cvIcon} alt="cv" className="footer-card__logo" /> CV
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}

export default Footer;
