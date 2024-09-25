import { useState } from "react";
import '../styles/components/card.scss'
import '../styles/components/button.scss'


// Todo: toggle to choose the image size
const Card = ({ image, title, content, buttonText }) => {
  const [leftImage, setLeftImage] = useState(true);

  return (
    <div className="card-container">
      <img src={image} alt={title} className="card-image"/>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{content}</p>
        <button className="card-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
