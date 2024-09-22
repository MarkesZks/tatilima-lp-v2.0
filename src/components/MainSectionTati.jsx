import "../styles/components/mainSectionTati.scss";
import logoTituloMain from "../assets/images/logoMain.png";
import ProfileMainImg from "../assets/images/ProfileMainImg.png";
import { ArrowDown } from "lucide-react";

const MainSectionTati = () => {
	return (
		<section className="main-section">
			<div className="container">
				<img
					src={ProfileMainImg}
					className="imgMainProfile"
					alt="Imagem de perfil principal"
				/>
				<div className="text-container">
					<span className="title">Ceo Studio Tati Lima & Mentora</span>
					<img src={logoTituloMain} alt="Logo principal" className="logo" />
					<div className="scroll-down">
						<ArrowDown className="animated-arrow"/>
						<span>Role para baixo</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainSectionTati;
