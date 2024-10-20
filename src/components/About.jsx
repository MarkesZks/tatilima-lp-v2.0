import { useRef } from "react";
import "../styles/components/about.scss";
import AboutInfo from "./AboutInfo";
import { useInView, motion } from "framer-motion";
import { scrollToSection } from "../utils/scroll_to_section";
import { MoveUpRight } from "lucide-react";
import smLogo from "../assets/images/small_logo.png";

const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const eventUrl = "https://api.whatsapp.com/send/?phone=5511959047302&text=Ol%C3%A1%2C+tudo+bem%3F+Me+chamo+%28nome%29+e+sou+do+evento+%28nome+do+evento%29%21%0A%0AGostaria+de+saber+como+fa%C3%A7o+para+te+ter+em+nosso+evento+como+%28palestrante+ou+premia%C3%A7%C3%A3o%29%3F%0A%0AQuero+saber+mais%21&type=phone_number&app_absent=0" 

	return (
		<div className="about-container" id="about-container">
			<div className="about-content">
				Tati Lima é Designer de Sobrancelhas, Mentora Marketeira, Educadora
				Beauty e a Rainha! Ela é referência em procedimentos naturais
				especialista em sobrancelhas e fala sobre marketing na área da beleza.
				<span className="jump-line" />
				Iniciou na área da beleza com apenas 16 anos, em 2021, em meio à
				pandemia para conquistar sua independência financeira e ter um império
				na área da beleza. Atualmente, com 19 anos, possui seu Studio próprio
				com procedimentos especializados em naturalidade, sendo considerada a
				melhor Designer de Sobrancelhas em Ferraz de Vasconcelos em 2023
				<span className="jump-line" />
				Tem uma mentoria online para empresárias da beleza que tem o poder de
				direcionar seus conteúdos para post que vende sem mesmo postar todos os
				dias. os dias.
			</div>
			<motion.div
				className="about-infos"
				ref={ref}
				initial={{ opacity: 0, x: -300 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 1.5, ease: "easeOut" }}
			>
				<AboutInfo link={"https://api.whatsapp.com/message/UIZEK5CFNJBVL1?autoload=1&app_absent=0"}>Agende seu momento de rainha</AboutInfo>
				<div>
					<div className="about-info-container">
						<img src={smLogo} alt="small logo" className="sm-logo" />
						<div
							className="about-links"
							onClick={() => scrollToSection("online-courses")}
							onKeyUp={() => scrollToSection("online-courses")}
						>
							<p>Cursos online Marketing Beauty</p>
							<MoveUpRight className="icon" size={20} />
						</div>
					</div>
					<span className="bottom-line" />
				</div>
				<div>
					<div className="about-info-container">
						<img src={smLogo} alt="small logo" className="sm-logo" />
						<div
							className="about-links"
							onClick={() => scrollToSection("face-to-face-courses")}
							onKeyUp={() => scrollToSection("face-to-face-courses")}
						>
							<p>Inicie na area da beleza com sobrancelhas</p>
							<MoveUpRight className="icon" size={20} />
						</div>
					</div>
					<span className="bottom-line" />
				</div>
				<AboutInfo link={"https://wa.me/5511959047302?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Me%20chamo%20%28nome%29%20e%20sou%20do%20evento%20%28nome%20do%20evento%29%21%0A%0AGostaria%20de%20saber%20como%20fa%C3%A7o%20para%20te%20ter%20em%20nosso%20evento%20como%20%28palestrante%20ou%20premia%C3%A7%C3%A3o%29%3F%0A%0AQuero%20saber%20mais%21"}>Palestras e eventos</AboutInfo>
			</motion.div>
		</div>
	);
};

export default About;
