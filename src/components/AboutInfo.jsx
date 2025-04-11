import smLogo from "../assets/images/small_logo.png";
import { MoveUpRight } from "lucide-react";
import "../styles/components/aboutInfo.scss";

const AboutInfo = ({ children, link }) => {
	return (
		<div>
			<div className="about-info-container">
				<img src={smLogo} alt="small logo" className="sm-logo" />
				<a href={link} target="_blank" rel="noreferrer" className="about-links">
					<p>{children}</p>
					<MoveUpRight className="icon" size={20} />
				</a>
			</div>
			<span className="bottom-line" />
		</div>
	);
};

export default AboutInfo;
