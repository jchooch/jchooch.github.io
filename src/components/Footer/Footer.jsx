import homeIcon from "../../assets/footer/home.png";
import emailIcon from "../../assets/footer/email.png";
import linkedinIcon from "../../assets/footer/linkedin.png";
import githubIcon from "../../assets/footer/github.png";
import twitterIcon from "../../assets/footer/twitter.png";
import cvIcon from "../../assets/footer/cv.png";
import "./Footer.scss";

function Footer({ thisPage }) {

  return (
    <>
      <ul className="footer-list">
        {thisPage === "home" && (
          <li className="footer-card footer-card--home">
            <img src={homeIcon} alt="home" className="footer-card__logo" />{" "}
            UK
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
        <li className="footer-card">
          <a href="../../assets/cv.pdf">
            <img src={cvIcon} alt="cv" className="footer-card__logo" /> CV
          </a>
        </li>
      </ul>
    </>
  );
}

export default Footer;
