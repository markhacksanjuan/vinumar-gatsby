import React, { useEffect, useState } from 'react'
import '../../styles/pages/valores.css'
import '../../styles/pages/mediaQueries/valores-media.css'
import TextCentered from '../textCentered/TextCentered'
import Button from '../button/Button'
import ReadMore from '../readMore/ReadMore'
import Head from '../Head/Head'
import Layout from '../Layout/Layout'

import headerImg from '../../images/selected/Principal DSC00902.jpg'
import valores1 from '../../images/ilustraciones/Vinumar_Ilustraciones_Tecnologia.jpg'
import valores2 from '../../images/ilustraciones/Vinumar_Ilustraciones_Reactividad.jpg'
import valores3 from '../../images/ilustraciones/Vinumar_Ilustraciones_Confianza.jpg'
import valores4 from '../../images/ilustraciones/Vinumar_Ilustraciones_Experiencia.jpg'
import valores5 from '../../images/ilustraciones/Vinumar_Ilustraciones_Sostenibilidad.jpg'

import { langText } from '../../lang'
import { useLang } from '../../hook/useLang'

const Valores = ({ location }) => {
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.screen.width : 1920)
    const lang = useLang(location)
    const resizeFunction = () => {
        setScreenWidth(window.screen.width)
    }
    useEffect(() =>{
        if(typeof window !== 'undefined'){
            window.addEventListener('resize', resizeFunction)
          }
        return(() => {
            window.removeEventListener('resize', resizeFunction)
        })
    }, [])
    
    const renderHeader = () => {
        return(
            <>
                <div className="valores-container-header">
                    <img className='no-click-events' src={headerImg} alt="Valores" />
                    <p>{langText.values.header[lang]}</p>
                </div>
            </>
        )
    }
    const renderContent = () => {
        return(
            <>
                <div className="valores-content-container">
                    <h4>{langText.values.values.title[lang]}</h4>
                    <div>
                        <div>
                            <p className='valores-content-title'>{langText.values.values.tech.title[lang]}</p>
                            <img className='no-click-events' src={valores1} alt="Valores" />
                            <ReadMore width={screenWidth} className='valores-content-description' lang={lang}>
                                <p className='valores-content-description'>{langText.values.values.tech.text_1[lang]}
                                    <br/>
                                    <br/>
                                    {langText.values.values.tech.text_2[lang]}
                                </p>
                            </ReadMore>
                        </div>
                        <div>
                            <div className='valores-content-card'>
                                <div>
                                    <p className='valores-content-title'>{langText.values.values.reactivity.title[lang]}</p>
                                    <img className='no-click-events' src={valores2} alt="Valores" />
                                </div>
                                <ReadMore width={screenWidth} lang={lang}>
                                    <p>
                                        {langText.values.values.reactivity.text_1[lang]}
                                        <br/>
                                        <br/>
                                        {langText.values.values.reactivity.text_2[lang]}
                                    </p>
                                </ReadMore>
                            </div>
                            <div className='valores-content-card'>
                                <div>
                                    <p className='valores-content-title'>{langText.values.values.confidence.title[lang]}</p>
                                    <img className='no-click-events' src={valores3} alt="Valores" />
                                </div>
                                <ReadMore width={screenWidth} lang={lang}>
                                    {langText.values.values.confidence.text[lang]}
                                </ReadMore>
                            </div>
                            <div className='valores-content-card'>
                                <div>
                                    <p className='valores-content-title'>{langText.values.values.experience.title[lang]}</p>
                                    <img className='no-click-events' src={valores4} alt="Valores" />
                                </div>
                                <p>{langText.values.values.experience.text[lang]}</p>
                            </div>
                            <div className='valores-content-card'>
                                <div>
                                    <p className='valores-content-title'>{langText.values.values.sustainability.title[lang]}</p>
                                    <img src={valores5} alt="Valores" />
                                </div>
                                <p>{langText.values.values.sustainability.text[lang]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>
            <Head pageTitle={langText.head.values[lang]}/>
            <Layout pageLocation={location}>
                {renderHeader()}
                <TextCentered>{langText.values.centered[lang]}</TextCentered>
                {renderContent()}
                <Button style='red-button' width='270px' goTo={lang === 'es' ? '/contacto' : '/en/contact-us'}>{langText.values.button[lang]}</Button>
            </Layout>
        </>
    )
}
export default Valores