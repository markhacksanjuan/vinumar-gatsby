import React from 'react'
import { Link } from 'gatsby'
import './footer.css'

import avisoLegal from '../../legal/AVISO_LEGAL.pdf'
import cookies from '../../legal/COOKIES.pdf'
import fondo from '../../legal/FONDO.pdf'
import privacidad from '../../legal/PRIVACIDAD.pdf'

const Footer = () => {
    return(
        <>
            <div className='footer-container'>
                <div className='footer-block'>
                    <p className='footer-title'>Contacto</p>
                    <div>
                        <ul className='footer-list-contact'>
                            <li>ctra. Munera, 5</li>
                            <li>02600 Villarrobledo</li>
                            <li>Albacete, España</li>
                        </ul>
                        <ul className='footer-list-contact'>
                            <li>T +34 967141500</li>
                            <li>F +34 967144111</li>
                        </ul>
                        <p className='email'>vinumar@vinumar.es</p>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-title'>Productos</p>
                    <div>
                        <ul className='footer-list'>
                            <li><Link to='/productos/ExtractosPiel'>Extractos de piel de uva</Link></li>
                            <li><Link to='/productos/ExtractosVino'>Extractos de vino</Link></li>
                            <li><Link to='/productos/Taninos'>Taninos de uva</Link></li>
                            <li><Link to='/productos/Alcoholes'>Alcoholes</Link></li>
                            <li><Link to='/productos/Pepita'>Pepita de uva</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-title'>Sobre Nosotros</p>
                    <div>
                        <ul className='footer-list'>
                            <li><Link to='/nosotros/Recursos'>Recursos técnicos y humanos</Link></li>
                            <li><Link to='/nosotros/Historia'>Historia</Link></li>
                            <li><Link to='/nosotros/Valores'>Valores</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-title-no-bottom'><Link to='/DondeEstamos'>Dónde Estamos</Link></p>
                </div>
                <div className='footer-block'>
                    <p className='footer-title-no-bottom'><Link to='/Sostenibilidad'>Sostenibilidad</Link></p>
                </div>
                <div className='footer-block'>
                    <p className='footer-title'>Política de Privacidad</p>
                    <div>
                        <ul className='footer-list'>
                            <li><a href={cookies} target='_blank'>Política de cookies</a></li>
                            <li><a href={privacidad} target='_blank'>Política de privacidad</a></li>
                            <li><a href={avisoLegal} target='_blank'>Aviso legal</a></li>
                            <li><a href={fondo} target='_blank'>Fondo Europeo de Desarrollo Regional</a></li>
                            <li>&copy; 2022 Vinumar</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer