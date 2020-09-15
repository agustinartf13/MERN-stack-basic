import React from "react";
import {
  ICFacebook,
  ICGithub,
  ICInstagram,
  ICLinkedin,
} from "../../../assets";
import "./footer.scss";

// inisialisasi
const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-social" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
       
        <div className="social-wrapper">
          <Icon img={ICFacebook} alt="facebook" />
          <Icon img={ICInstagram} alt="instagram" />
          <Icon img={ICLinkedin} alt="linkend" />
          <Icon img={ICGithub} alt="github" />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright </p>
      </div>
    </div>
  );
};

export default Footer;
