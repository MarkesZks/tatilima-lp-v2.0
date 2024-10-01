import "../styles/components/header.scss";
import logo from "../assets/images/logoHeader.png";
import {
  FaInstagram,
  FaWhatsapp,
  FaPinterest,
  FaSpotify,
} from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className="navbar">
          <a
            href="https://www.instagram.com/tatiliimasobrancelhass"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://api.whatsapp.com/message/UIZEK5CFNJBVL1?autoload=1&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a href="https://pin.it/2RVahrrdS" target="_blank" rel="noreferrer">
            <FaPinterest />
          </a>
          <a href="https://open.spotify.com/playlist/49uZny6BbYPK0tZ9D5x7vo?si=285d4f3d26244a0c " target="_blank" rel="noreferrer">
            <FaSpotify />
          </a>
        </div>
      </header>
      <div className="line-container">
        <span/>
      </div>
    </>
  );
};

export default Header;
