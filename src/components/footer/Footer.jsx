import React from 'react'
import { Link } from 'gatsby'
import './footer.css'

const Footer = () => {
    return(
        <>
            <div className='footer-container'>
                <div className='footer-black'>
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
                            <li>Extracto de piel de uva</li>
                            <li>Extracto de vino</li>
                            <li>Taninos de uva</li>
                            <li>Alcoholes</li>
                            <li>Pepita de uva</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-title'>Sobre Nosotros</p>
                    <div>
                        <ul className='footer-list'>
                            <li>Recursos técnicos y humanos</li>
                            <li>Historia</li>
                            <li>Valores</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-title-no-bottom'>Dónde Estamos</p>
                </div>
                <div className='footer-block'>
                    <p className='title-no-bottom'>Sostenibilidad</p>
                </div>
                <div className='footer-block'>
                    <p className='footer-title'>Política de Privacidad</p>
                    <div>
                        <ul className='footer-list'>
                            <li>Política de cookies</li>
                            <li>Política de privacidad</li>
                            <li>Aviso legal</li>
                            <li>Fondo Europeo de Desarrollo Regional</li>
                            <li>2022 Vinumar</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer