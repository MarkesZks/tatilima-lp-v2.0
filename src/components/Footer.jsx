import React from 'react'
import logo from '../assets/images/footerImg.png'
import '../styles/components/footer.scss'
import {
    FaInstagram,
    FaWhatsapp,
    FaPinterest,
    FaSpotify,
  } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='footer'>
        <img src={logo} alt="Tati Lima Logo" />
        <div className='conteudos-container'>
            <nav className='navbar-footer'>
              <a href="">Sobre</a>
                <a href="">Procedimentos</a>
                <a href="">Cursos</a>
                <a href="">FAQ</a>
                <a href="">Seja uma beauty</a>
            </nav>
            <p>&copy; 2024 Empresa tatiliimasobrancelhass. Todos os direitos reservados. </p>
        </div>
        <div className="icons">
          <a href="" target="_blank">
            <FaInstagram />
          </a>
          <a href="" target="_blank">
            <FaWhatsapp />
          </a>
          <a href="" target="_blank">
            <FaPinterest />
          </a>
          <a href="" target="_blank">
            <FaSpotify />
          </a>
        </div>
        
    </footer>
  )
}

export default Footer
