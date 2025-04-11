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
            href="https://wa.me/5511959047302?text=Ol%C3%A1%21%20Me%20chamo%20%28coloque%20seu%20nome%20aqui%29%2C%20gostaria%20de%20agendar%20meu%20hor%C3%A1rio%20de%20rainha%21%20%F0%9F%91%B8%F0%9F%8F%BB"
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
