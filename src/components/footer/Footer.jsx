import React, { useContext } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import './footer.css'
import './footer-media.css'

import avisoLegal from '../../legal/spanish/Aviso_legal_PDF.pdf'
import cookies from '../../legal/spanish/Política_de_cookies_PDF_2.pdf'
import privacidad from '../../legal/spanish/Política de privacidad_2_PDF.pdf'
import inocuidad from '../../legal/spanish/POLITICA_INOCUIDAD_ALIMENTARIA_rev_02.pdf'

import fondo from '../../legal/Fondo_Europeo_de_Desarrollo_Regional_PDF.pdf'

import legalNotice from '../../legal/english/Legal_Notice_PDF.pdf'
import cookiesPolicy from '../../legal/english/Cookies_Policy_PDF_2.pdf'
import privacyPolicy from '../../legal/english/Privacy_Policy_2_PDF.pdf'
import safety from '../../legal/english/POLITICA_INOCUIDAD_ALIMENTARIA_rev_02_en.pdf'

import eu from '../../images/eu.png'

import { LangStateContext } from '../GlobalContextProvider/GlobalContextProvider'
import { langText } from '../../lang'

import { graphql } from 'gatsby'
import { Link, useI18next, Trans } from 'gatsby-plugin-react-i18next'

const Footer = () => {
    const { lang } = useContext(LangStateContext)
    const { t } = useI18next()
    console.log(t('footer:fondo'))
    console.log(t('footer.fondo'))
    return(
        <>
            <div className='footer-container'>
                <div className='footer-block'>
                    <p className='footer-title'>{t('Contacto')}</p>
                    <div>
                        <ul className='footer-list-contact'>
                            <li>ctra. Munera, 5</li>
                            <li>02600 Villarrobledo</li>
                            <li>Albacete, {t('pais')}</li>
                        </ul>
                        <ul className='footer-list-contact'>
                            <li>T +34 967141500</li>
                            <li>F +34 967144111</li>
                        </ul>
                        <p className='email'>vinumar@vinumar.es</p>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-title'>{t('Productos')}</p>
                    <div>
                        <ul className='footer-list'>
                            <li><Link className='footer-link' to='/producto/extracto-piel-uva'>{t('data:extractos_piel')}</Link></li>
                            <li><Link className='footer-link' to='/producto/extracto-vino'>{t('common:extractos_vino')}</Link></li>
                            <li><Link className='footer-link' to='/producto/taninos-uva'>{t('taninos')}</Link></li>
                            <li><Link className='footer-link' to='/producto/extracto-de-semilla-de-uva'>{t('extractos_semilla')}</Link></li>
                            <li><Link className='footer-link' to='/producto/alcoholes'>{t('alcoholes')}</Link></li>
                            <li><Link className='footer-link' to='/producto/pepita-de-uva'>{t('pepita')}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-title'>{t('nosotros')}</p>
                    <div>
                        <ul className='footer-list'>
                            <li><Link className='footer-link' to='/sobre-nosotros/instalaciones'>{t('recursos')}</Link></li>
                            <li><Link className='footer-link' to='/sobre-nosotros/nuestra-historia'>{t('historia')}</Link></li>
                            <li><Link className='footer-link' to='/sobre-nosotros/valores'>{t('valores')}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-block'>
                    <p className='footer-title-no-bottom'><Link className='footer-link-black' to='/donde-estamos'>{t('donde')}</Link></p>
                </div>
                <div className='footer-block'>
                    <p className='footer-title-no-bottom'><Link className='footer-link-black' to='/sostenibilidad'>{t('Sostenibilidad')}</Link></p>
                </div>
                <div className='footer-block'>
                    <p className='footer-title'>{t('privacidad')}</p>
                    <div>
                        <ul className='footer-list'>
                            <li><a className='footer-link' href={lang === 'es' ? cookies : cookiesPolicy} target='_blank'>{t('cookies')}</a></li>
                            <li><a className='footer-link' href={lang === 'es' ? privacidad : privacyPolicy} target='_blank'>{t('privacidad')}</a></li>
                            <li><a className='footer-link' href={lang === 'es' ? avisoLegal : legalNotice} target='_blank'>{t('legal')}</a></li>
                            <li><a className='footer-link' href={lang === 'es' ? inocuidad : safety} target='_blank'>{t('calidad')}</a></li>
                            <li><img src={eu} className='eu-logo' /><a className='footer-link' href={fondo} target='_blank'>{t('common:fondo')}</a></li>
                            <li>&copy; 2022 Vinumar</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer

export const query = graphql`
    query ($language: String!) {
        locale: allLocale(filter: {ns: {eq: "common"}, language: {eq: $language}}) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`