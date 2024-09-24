import "../styles/components/mainSectionTati.scss";
import logoTituloMain from "../assets/images/logoMain.png";
import ProfileMainImg from "../assets/images/ProfileMainImg.png";
import About from "./About";
import SchedulingSection from "./SchedulingSection";
import { ChevronDown } from "lucide-react";

const MainSectionTati = () => {

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<section >
			<div className="main-section">

			<div className="container">
				<img
					src={ProfileMainImg}
					className="imgMainProfile"
					alt="Imagem de perfil principal"
				/>
				<div className="text-container">
					<span className="title">Ceo Studio Tati Lima & Mentora</span>
					<img src={logoTituloMain} alt="Logo principal" className="logo" />
					<div className="scroll-down" onClick={() => scrollToSection('about-container')}>
						<ChevronDown className="animated-arrow"/>
						<span>Role para baixo</span>
					</div>
				</div>
			</div>
			</div>
		<About />
		<SchedulingSection/>

		</section>
		
	);
};

export default MainSectionTati;
