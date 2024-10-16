import "../styles/components/SchedulingSection.scss";
import React, { useRef } from "react";
import logo from "../assets/images/logoAboutMain.png";
import clientImg from "../assets/images/ClientImageMain.png";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const SchedulingSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section className="container">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, x: -300 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 2, ease: "easeOut" }}
			>
				<img src={clientImg} alt="" className="clientImg" />
			</motion.div>
			<div className="container-itens">
				<img src={logo} alt="" className="logoImg" />

				<motion.div
					initial={{ opacity: 0, x: 300 }}
					animate={isInView ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 2, ease: "easeOut" }}
				>
					<p>
						Studio Especializado em <span className="span-text">Sobrancelhas</span> com procedimentos naturais do
						essencial para o poderoso!<br/><br/> <span className="span-text">Referencia: </span>1° em Ferraz de Vasconcelos -
						SP.<br/><br/>Agende seu momento de Rainha no <span className="span-text">link abaixo:</span>
					</p>
					<div className="btn-container">
					<button type="button" className="card-button">
						<a
							href="https://api.whatsapp.com/message/UIZEK5CFNJBVL1?autoload=1&app_absent=0"
							target="_blank"
							rel="noreferrer"
						>
							Seu momento de 👑
						</a>
					</button>

					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default SchedulingSection;
