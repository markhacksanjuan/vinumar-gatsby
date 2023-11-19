import React, { useContext } from 'react'
import { Link } from 'gatsby'
import './footer.css'
import './footer-media.css'

import avisoLegal from '../../legal/spanish/Aviso_legal_PDF.pdf'
import cookies from '../../legal/spanish/Política_de_cookies_PDF_2.pdf'
import privacidad from '../../legal/spanish/Política de privacidad_2_PDF.pdf'
import inocuidad from '../../legal/spanish/POLITICA_CALIDAD_E_INOCUIDAD_ALIMENTARIA_rev_05_es.pdf'

import fondo from '../../legal/Fondo_Europeo_de_Desarrollo_Regional_PDF_2023.pdf'

import legalNotice from '../../legal/english/Legal_Notice_PDF.pdf'
import cookiesPolicy from '../../legal/english/Cookies_Policy_PDF_2.pdf'
import privacyPolicy from '../../legal/english/Privacy_Policy_2_PDF.pdf'
import safety from '../../legal/english/POLITICA_CALIDAD_E_INOCUIDAD_ALIMENTARIA_rev_05_en.pdf'

import eu from '../../images/eu.png'

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
                            <li>Albacete, {langText.common.country[lang]}</li>
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
                            <li><Link className='footer-link' to={lang === 'es' ? '/producto/extracto-piel-uva' : '/en/product/grape-skin-extracts'}>{langText.footer.products.grape_skin[lang]}</Link></li>
                            <li><Link className='footer-link' to={lang === 'es' ? '/producto/extracto-vino' : '/en/product/wine-extracts'}>{langText.footer.products.wine_extracts[lang]}</Link></li>
                            <li><Link className='footer-link' to={lang === 'es' ? '/producto/taninos-uva' : '/en/product/grape-tannins'}>{langText.footer.products.tannins[lang]}</Link></li>
                            <li><Link className='footer-link' to={lang === 'es' ? '/producto/extracto-nutricion-animal' : '/en/product/extract-animal-nutrition'}>{langText.footer.products.nutri_animal[lang]}</Link></li>
                            <li><Link className='footer-link' to={lang === 'es' ? '/producto/extracto-de-semilla-de-uva' : '/en/product/grape-seed-extract'}>{langText.footer.products.seed_extract[lang]}</Link></li>
                            <li><Link className='footer-link' to={lang === 'es' ? '/producto/alcoholes' : '/en/product/alcohols'}>{langText.footer.products.alcohols[lang]}</Link></li>
                            <li><Link className='footer-link' to={lang === 'es' ? '/producto/pepita-de-uva' : '/en/product/grape-seed'}>{langText.footer.products.grape_seed[lang]}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-title'>{langText.footer.about.title[lang]}</p>
                    <div>
                        <ul className='footer-list'>
                            <li><Link className='footer-link' to={lang === 'es' ? '/sobre-nosotros/instalaciones' : '/en/about-us/facilities'}>{langText.footer.about.resources[lang]}</Link></li>
                            <li><Link className='footer-link' to={lang === 'es' ? '/sobre-nosotros/nuestra-historia' : '/en/about-us/history'}>{langText.footer.about.history[lang]}</Link></li>
                            <li><Link className='footer-link' to={lang === 'es' ? '/sobre-nosotros/valores' : '/en/about-us/values'}>{langText.footer.about.values[lang]}</Link></li>
                            <li><Link className='footer-link' to={lang === 'es' ? '/noticias' : '/en/news'}>{langText.footer.about.news[lang]}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-title-no-bottom'><Link className='footer-link-black' to={lang === 'es' ? '/donde-estamos' : '/en/where-we-are'}>{langText.footer.where[lang]}</Link></p>
                </div>
                <div className='footer-block'>
                    <p className='footer-title-no-bottom'><Link className='footer-link-black' to={lang === 'es' ? '/sostenibilidad' : '/en/sustainability'}>{langText.footer.sustainability[lang]}</Link></p>
                </div>
                <div className='footer-block'>
                    <p className='footer-title'>{langText.footer.policy.title[lang]}</p>
                    <div>
                        <ul className='footer-list'>
                            <li><a className='footer-link' href={lang === 'es' ? '/canal-etico' : '/canal-etico'}>{langText.footer.policy.ethic[lang]}</a></li>
                            <li><a className='footer-link' href={lang === 'es' ? cookies : cookiesPolicy} target='_blank'>{langText.footer.policy.cookies[lang]}</a></li>
                            <li><a className='footer-link' href={lang === 'es' ? privacidad : privacyPolicy} target='_blank'>{langText.footer.policy.privacy[lang]}</a></li>
                            <li><a className='footer-link' href={lang === 'es' ? avisoLegal : legalNotice} target='_blank'>{langText.footer.policy.legal[lang]}</a></li>
                            <li><a className='footer-link' href={lang === 'es' ? inocuidad : safety} target='_blank'>{langText.footer.policy.safety[lang]}</a></li>
                            <li><img src={eu} className='eu-logo' /><a className='footer-link' href={fondo} target='_blank'>{langText.footer.policy.found[lang]}</a></li>
                            <li>&copy; 2022 Vinumar</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer