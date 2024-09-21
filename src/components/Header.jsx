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
      <header className="header">
        <img src={logo} alt/>
        <div className="navbar">
          <a href="" target="_blank">
            <FaInstagram />
          </a>
          <a href="" target="_blank">
            <FaWhatsapp />
          </a>
          <a href="" target="_blank">
            <FaPinterest />
          </a>
          <a href="" target="_blank">
            <FaSpotify />
          </a>
        </div>
      </header>
      <div className="line-container">
        <span></span>
      </div>
    </>
  );
};

export default Header;
