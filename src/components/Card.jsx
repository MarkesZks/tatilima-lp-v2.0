import { useState } from "react";
import "../styles/components/card.scss";
import "../styles/components/button.scss";

// Todo: toggle to choose the image size
const Card = ({ image, title, content, buttonText, url, isImageLeft }) => {
	return (
		<div
			className={`card-container ${isImageLeft ? "left-image" : "right-image"}`}
		>
			<img src={image} alt={title} className="card-image" />
			<div className="card-content">
				<span className="card-title">{title}</span>
				<p>{content}</p>
				<button type="button" className="card-button">
					<a href={url} target="_blank" rel="noreferrer">
						{buttonText}
					</a>
				</button>
			</div>
		</div>
	);
};

export default Card;
