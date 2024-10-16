import { useRef } from "react";
import "../styles/components/coursesCard.scss";
import "../styles/components/button.scss";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const CoursesCard = ({ image, title, content, buttonText, url, isImageLeft }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div
			className={`card-container ${isImageLeft ? "left-image" : "right-image"}`}
		>
			<motion.img
				ref={ref}
				initial={{ opacity: 0, x: -300 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 1.5, ease: "easeOut" }}
				src={image}
				alt={title}
				className="card-image"
			/>
			<motion.div
			ref={ref}
			initial={{ opacity: 0, x: 300 }}
			animate={isInView ? { opacity: 1, x: 0 } : {}}
			transition={{ duration: 1.5, ease: "easeOut" }}
			 className="card-content">
				<span className="card-title">{title}</span>
				<p>{content}</p>
				<button type="button" className="card-button">
					<a href={url} target="_blank" rel="noreferrer">
						{buttonText}
					</a>
				</button>
			</motion.div>
		</div>
	);
};

export default CoursesCard;
