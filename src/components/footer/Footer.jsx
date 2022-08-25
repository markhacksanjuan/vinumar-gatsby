import React, { useContext } from 'react'
import { Link } from 'gatsby'
import './footer.css'
import './footer-media.css'

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
                            <li><Link className='footer-link' to='/producto/extracto-piel-uva'>{langText.footer.products.grape_skin[lang]}</Link></li>
                            <li><Link className='footer-link' to='/producto/extracto-vino'>{langText.footer.products.wine_extracts[lang]}</Link></li>
                            <li><Link className='footer-link' to='/producto/taninos-uva'>{langText.footer.products.tannins[lang]}</Link></li>
                            <li><Link className='footer-link' to='/producto/alcoholes'>{langText.footer.products.alcohols[lang]}</Link></li>
                            <li><Link className='footer-link' to='/producto/pepita-de-uva'>{langText.footer.products.grape_seed[lang]}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-title'>{langText.footer.about.title[lang]}</p>
                    <div>
                        <ul className='footer-list'>
                            <li><Link className='footer-link' to='/sobre-nosotros/instalaciones'>{langText.footer.about.resources[lang]}</Link></li>
                            <li><Link className='footer-link' to='/sobre-nosotros/nuestra-historia'>{langText.footer.about.history[lang]}</Link></li>
                            <li><Link className='footer-link' to='/sobre-nosotros/valores'>{langText.footer.about.values[lang]}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-title-no-bottom'><Link className='footer-link-black' to='/donde-estamos'>{langText.footer.where[lang]}</Link></p>
                </div>
                <div className='footer-block'>
                    <p className='footer-title-no-bottom'><Link className='footer-link-black' to='/sostenibilidad'>{langText.footer.sustainability[lang]}</Link></p>
                </div>
                <div className='footer-block'>
                    <p className='footer-title'>{langText.footer.policy.title[lang]}</p>
                    <div>
                        <ul className='footer-list'>
                            <li><a className='footer-link' href={cookies} target='_blank'>{langText.footer.policy.cookies[lang]}</a></li>
                            <li><a className='footer-link' href={privacidad} target='_blank'>{langText.footer.policy.privacy[lang]}</a></li>
                            <li><a className='footer-link' href={avisoLegal} target='_blank'>{langText.footer.policy.legal[lang]}</a></li>
                            <li><a className='footer-link' href={fondo} target='_blank'>Fondo Europeo de Desarrollo Regional</a></li>
                            <li>&copy; 2022 Vinumar</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer