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
					alt="perfil main imagem"
				/>
				<div className="textContainer">
					<span>Ceo Studio Tati Lima & Mentora</span>
					<img src={logoTituloMain} alt="logo titulo main" />
					<div className="scrollDown">
						<ArrowDown />
						<span>Role para baixo</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainSectionTati;
