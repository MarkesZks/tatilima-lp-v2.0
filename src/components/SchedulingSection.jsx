import '../styles/components/SchedulingSection.scss'
import React from 'react'
import logo from '../assets/images/logoAboutMain.png'
import clientImg from '../assets/images/ClientImageMain.png'
import { MoveUpRight  } from "lucide-react";

const SchedulingSection = () => {
  return (
   <section className='container'>

    <img src={clientImg} alt="" className='clientImg'/>
    <div className='container-itens'>
        <img src={logo} alt="" className='logoImg' />
        <p>Studio Especializado em Sobrancelhas com procedimentos naturais do essencial para o poderoso!
            Referencia 1° em Ferraz de Vasconcelos - SP.Agende seu momento de Rainha no link abaixo:</p>
            <a href="">Seu momento de 👑<MoveUpRight size={18}/></a>
    </div>
   </section>
  )
}

export default SchedulingSection
