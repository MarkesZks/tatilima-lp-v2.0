import { useRef } from "react";
import "../styles/components/about.scss";
import AboutInfo from "./AboutInfo";
import { useInView, motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div className="about-container" id="about-container">
			<motion.div
				className="about-content"
				ref={ref}
				initial={{ opacity: 0, y: 300 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 1, ease: "easeOut" }}
			>
				Tati Lima é Designer de Sobrancelhas, Mentora Marketeira, Educadora
				Beauty e a Rainha! Ela é referência em procedimentos naturais
				especialista em sobrancelhas e fala sobre marketing na área da beleza.
				<span className="jump-line"/>
				Iniciou na área da beleza com apenas 16 anos, em 2021, em meio à
				pandemia para conquistar sua independência financeira e ter um império
				na área da beleza. Atualmente, com 19 anos, possui seu Studio próprio
				com procedimentos especializados em naturalidade, sendo considerada a
				melhor Designer de Sobrancelhas em Ferraz de Vasconcelos em 2023
				<span className="jump-line"/>
				Tem	uma mentoria online para empresárias da beleza que tem o poder de
				direcionar seus conteúdos para post que vende sem mesmo postar todos os
				dias. os dias.
			</motion.div>
			<motion.div
				className="about-infos"
				ref={ref}
				initial={{ opacity: 0, x: -300 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 1.5, ease: "easeOut" }}
			>
				<AboutInfo link={""}>Agende seu momento de rainha</AboutInfo>
				<AboutInfo link={""} >Cursos online Marketing Beuty</AboutInfo>
				<AboutInfo link={""}>Inicie na area da beleza com sobrancelhas</AboutInfo>
				<AboutInfo link={""}>Palestras e eventos</AboutInfo>
			</motion.div>
		</div>
	);
};

export default About;
