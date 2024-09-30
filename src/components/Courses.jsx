import Card from "./Card";

import img from "../../src/assets/images/ProfileMainImg.png";
import "../styles/components/courses.scss";
import { faceToFaceCourses, onlineCourses } from "../utils/cart_content";

const Courses = () => {
	return (
		<div className="courses-container">
			<div className="face-to-face-courses" id="face-to-face-courses">
				<h2>Cursos presenciais</h2>
				<div>
          {faceToFaceCourses.map((course, index) => (
            <Card 
              key={course.title}
              title={course.title}
              content={course.content}
              buttonText={course.buttonText}
              image={course.image}
              url={course.url}
              isImageLeft={course.isImageLeft}
            />
          ))}
        </div>
			</div>
			<div className="online-courses" id="online-courses">
				<h2>Cursos online</h2>
				<div>
          {onlineCourses.map((course, index) => (
            <Card 
              key={course.title}
              title={course.title}
              content={course.content}
              buttonText={course.buttonText}
              image={course.image}
              url={course.url}
              isImageLeft={course.isImageLeft}
            />
          ))}
        </div>
			</div>
		</div>
	);
};

export default Courses;
