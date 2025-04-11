import React from "react";
import logo from "../assets/images/footerImg.png";
import "../styles/components/footer.scss";
import {
	FaInstagram,
	FaWhatsapp,
	FaPinterest,
	FaSpotify,
} from "react-icons/fa";
import { scrollToSection } from "../utils/scroll_to_section";
const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className="footer">
			<a href="/" onClick={scrollToTop}>
				<img src={logo} alt="Tati Lima Logo" />
			</a>
			<div className="conteudos-container">
				<nav className="navbar-footer">
					<li
						onClick={() => scrollToSection("header")}
						onKeyUp={() => scrollToSection("header")}
					>
						Tati Lima
					</li>
					<li
						onClick={() => scrollToSection("about-container")}
						onKeyUp={() => scrollToSection("about-container")}
					>
						Sobre
					</li>
					<li
						onClick={() => scrollToSection("face-to-face-courses")}
						onKeyUp={() => scrollToSection("face-to-face-courses")}
					>
						Cursos Presenciais
					</li>
					<li
						onClick={() => scrollToSection("online-courses")}
						onKeyUp={() => scrollToSection("online-courses")}
					>
						Cursos Online
					</li>
				</nav>
				<p>
					&copy; 2024 Empresa tatiliimasobrancelhass. Todos os direitos
					reservados.{" "}
				</p>
			</div>
			<div className="icons">
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
				<a href="https://pin.it/2RVahrrdS" target="_blank"
          rel="noreferrer"
        >
					<FaPinterest />
				</a>
				<a href="https://open.spotify.com/playlist/49uZny6BbYPK0tZ9D5x7vo?si=285d4f3d26244a0c" target="_blank"
        rel="noreferrer"
        >
					<FaSpotify />
				</a>
			</div>
			{
				console.log('Feito por Web4u')
			}
		</footer>
	);
};

export default Footer;
