import "../styles/components/about.scss";
import AboutInfo from './AboutInfo';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        Tati Lima é Designer de Sobrancelhas, Mentora Marketeira, Educadora
        Beauty e a Rainha! Ela é referência em procedimentos naturais e
        marketeria na área da beleza. 
        <span className="jump-line"></span>
        Iniciou na área da beleza com apenas 16
        anos, em 2021, em meio à pandemia para conquistar sua independência
        financeira e ter um império na área da beleza. 
        <span className="jump-line"></span>
        Atualmente, com 19 anos, possui seu Studio próprio com procedimentos especializados em
        naturalidade, sendo considerada a melhor Designer de Sobrancelhas em
        Ferraz de Vasconcelos 23, idealizadora de uma Imersão na área da beleza
        com 30 alunas formadas, mentoria online que tem o poder de direcionar
        seus conteúdos para post que vende sem mesmo postar todos os dias.
      </div>
      <div className="about-infos">
        <AboutInfo>Agende seu horários</AboutInfo>
        <AboutInfo>Cursos online</AboutInfo>
        <AboutInfo>Cursos presenciais</AboutInfo>
        <AboutInfo>Palestras e eventos</AboutInfo>
      </div>
    </div>
  );
};

export default About;
