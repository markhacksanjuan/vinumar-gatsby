import React, { useContext } from 'react'
import { Link } from 'gatsby'
import './footer.css'

import avisoLegal from '../../legal/AVISO_LEGAL.pdf'
import cookies from '../../legal/COOKIES.pdf'
import fondo from '../../legal/FONDO.pdf'
import privacidad from '../../legal/PRIVACIDAD.pdf'

import { LangStateContext } from '../GlobalContextProvider/GlobalContextProvider'
import { langText_footer } from '../../lang/lang_footer'

const Footer = () => {
    const { lang } = useContext(LangStateContext)
    return(
        <>
            <div className='footer-container'>
                <div className='footer-block'>
                    <p className='footer-title'>{langText_footer.contact[lang]}</p>
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
                    <p className='footer-title'>{langText_footer.products.title[lang]}</p>
                    <div>
                        <ul className='footer-list'>
                            <li><Link to='/productos/ExtractosPiel'>{langText_footer.products.grape_skin[lang]}</Link></li>
                            <li><Link to='/productos/ExtractosVino'>{langText_footer.products.wine_extracts[lang]}</Link></li>
                            <li><Link to='/productos/Taninos'>{langText_footer.products.tannins[lang]}</Link></li>
                            <li><Link to='/productos/Alcoholes'>{langText_footer.products.alcohols[lang]}</Link></li>
                            <li><Link to='/productos/Pepita'>{langText_footer.products.grape_seed[lang]}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-title'>{langText_footer.about.title[lang]}</p>
                    <div>
                        <ul className='footer-list'>
                            <li><Link to='/nosotros/Recursos'>{langText_footer.about.resources[lang]}</Link></li>
                            <li><Link to='/nosotros/Historia'>{langText_footer.about.history[lang]}</Link></li>
                            <li><Link to='/nosotros/Valores'>{langText_footer.about.values[lang]}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-title-no-bottom'><Link to='/DondeEstamos'>{langText_footer.where[lang]}</Link></p>
                </div>
                <div className='footer-block'>
                    <p className='footer-title-no-bottom'><Link to='/Sostenibilidad'>{langText_footer.sustainability[lang]}</Link></p>
                </div>
                <div className='footer-block'>
                    <p className='footer-title'>{langText_footer.policy.title[lang]}</p>
                    <div>
                        <ul className='footer-list'>
                            <li><a href={cookies} target='_blank'>{langText_footer.policy.cookies[lang]}</a></li>
                            <li><a href={privacidad} target='_blank'>{langText_footer.policy.privacy[lang]}</a></li>
                            <li><a href={avisoLegal} target='_blank'>{langText_footer.policy.legal[lang]}</a></li>
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