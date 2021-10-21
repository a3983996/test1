import React from "react";
import logoW from "../img/logoW.png";
import callW from "../img/callW.svg";
import emailW from "../img/emailW.svg";
import pinW from "../img/pinW.svg";
import fb from "../img/facebookW.svg";
import line from "../img/lineW.svg";
import ig from "../img/instagramW.svg";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logoW} alt={logoW} />
      </div>
      <div className="concat">
        <div>
          <img src={callW} alt={callW} />
          <h4>07-5507639</h4>
        </div>
        <div>
          <img src={emailW} alt={emailW} />
          <h4>abc123@gmail.com</h4>
        </div>
        <div>
          <img src={pinW} alt={pinW} />
          <h4>高雄市美濃區中興路二段45號</h4>
        </div>
      </div>
      <div className="fanPages">
        <img src={fb} alt={fb} />
        <img src={line} alt={line} />
        <img src={ig} alt={ig} />
      </div>
      <div className="copyright">
        <h4>COPYRIGHT 人晨國際 2020 ALL Rights Reserved</h4>
      </div>
    </footer>
  );
};

export default Footer;
