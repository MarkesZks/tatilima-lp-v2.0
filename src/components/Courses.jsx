import Card from "./Card"

import img from '../../src/assets/images/ProfileMainImg.png'
import '../styles/components/courses.scss'


const Courses = () => {
  return (
    <div className="courses-container">
      <div className="online-courses">
        <h2>Cursos online</h2>
        <div>
          <Card title="Curso 1" content="Lorem ipsum lorem ipsum" buttonText="Garanta já" image={img} />
          <Card title="Curso 1" content="Lorem ipsum lorem ipsum" buttonText="Garanta já" image={img} />
          <Card title="Curso 1" content="Lorem ipsum lorem ipsum" buttonText="Garanta já" image={img} />
          <Card title="Curso 1" content="Lorem ipsum lorem ipsum" buttonText="Garanta já" image={img} />
          <Card title="Curso 1" content="Lorem ipsum lorem ipsum" buttonText="Garanta já" image={img} />
        </div>
      </div>
      <div  className="face-to-face-courses">
          <h2>Cursos presenciais</h2>
          <div>
          <Card title="Curso 1" content="Lorem ipsum lorem ipsum" buttonText="Garanta já" image={img} />
          <Card title="Curso 1" content="Lorem ipsum lorem ipsum" buttonText="Garanta já" image={img} />
          <Card title="Curso 1" content="Lorem ipsum lorem ipsum" buttonText="Garanta já" image={img} />
          <Card title="Curso 1" content="Lorem ipsum lorem ipsum" buttonText="Garanta já" image={img} />
          <Card title="Curso 1" content="Lorem ipsum lorem ipsum" buttonText="Garanta já" image={img} />
        </div>
      </div>
    </div>
  )
}

export default Courses