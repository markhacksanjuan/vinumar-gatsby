import React, { useContext } from 'react'
import { Link } from 'gatsby'
import './footer.css'

import avisoLegal from '../../legal/AVISO_LEGAL.pdf'
import cookies from '../../legal/COOKIES.pdf'
import fondo from '../../legal/FONDO.pdf'
import privacidad from '../../legal/PRIVACIDAD.pdf'

import { LangStateContext } from '../GlobalContextProvider/GlobalContextProvider'
import { langText } from '../../lang'

const Footer = () => {
    const { lang } = useContext(LangStateContext)
    return(
        <>
            <div className='footer-container'>
                <div className='footer-block'>
                    <p className='footer-title'>{langText.footer.contact[lang]}</p>
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
                    <p className='footer-title'>{langText.footer.products.title[lang]}</p>
                    <div>
                        <ul className='footer-list'>
                            <li><Link to='/productos/ExtractosPiel'>{langText.footer.products.grape_skin[lang]}</Link></li>
                            <li><Link to='/productos/ExtractosVino'>{langText.footer.products.wine_extracts[lang]}</Link></li>
                            <li><Link to='/productos/Taninos'>{langText.footer.products.tannins[lang]}</Link></li>
                            <li><Link to='/productos/Alcoholes'>{langText.footer.products.alcohols[lang]}</Link></li>
                            <li><Link to='/productos/Pepita'>{langText.footer.products.grape_seed[lang]}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-title'>{langText.footer.about.title[lang]}</p>
                    <div>
                        <ul className='footer-list'>
                            <li><Link to='/nosotros/Recursos'>{langText.footer.about.resources[lang]}</Link></li>
                            <li><Link to='/nosotros/Historia'>{langText.footer.about.history[lang]}</Link></li>
                            <li><Link to='/nosotros/Valores'>{langText.footer.about.values[lang]}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-title-no-bottom'><Link to='/DondeEstamos'>{langText.footer.where[lang]}</Link></p>
                </div>
                <div className='footer-block'>
                    <p className='footer-title-no-bottom'><Link to='/Sostenibilidad'>{langText.footer.sustainability[lang]}</Link></p>
                </div>
                <div className='footer-block'>
                    <p className='footer-title'>{langText.footer.policy.title[lang]}</p>
                    <div>
                        <ul className='footer-list'>
                            <li><a href={cookies} target='_blank'>{langText.footer.policy.cookies[lang]}</a></li>
                            <li><a href={privacidad} target='_blank'>{langText.footer.policy.privacy[lang]}</a></li>
                            <li><a href={avisoLegal} target='_blank'>{langText.footer.policy.legal[lang]}</a></li>
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