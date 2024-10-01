import smLogo from "../assets/images/small_logo.png";

import "../styles/components/aboutInfo.scss";

const AboutInfo = ({ children }) => {
  return (
    <>
      <div className="about-info-container">
        <img src={smLogo} alt="small logo" className="sm-logo" />
        <p>{children}</p>
      </div>
        <span className="bottom-line"/>
    </>
  );
};

export default AboutInfo;
