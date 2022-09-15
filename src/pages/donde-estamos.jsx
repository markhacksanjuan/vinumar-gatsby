import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/navbarIndex/NavbarIndex'
import Footer from '../components/footer/Footer'
import Situacion from '../components/situacion/Situacion'
import ReadMore from '../components/readMore/ReadMore'
import '../styles/pages/dondeEstamos.css'
import '../styles/pages/mediaQueries/donde-media.css'
import Head from '../components/Head/Head'

import headerImg from '../images/DEF/DJI_0705-2.jpg'
import dondeImg from '../images/ilustraciones/Vinumar_Ilustraciones_Mapa_2.jpg'
import dondeImg_en from '../images/ilustraciones/Vinumar_Ilustraciones_Mapa_3.jpg'
import ventaja1 from '../images/ilustraciones/Vinumar_Ilustraciones_Cercania.jpg'
import ventaja2 from '../images/ilustraciones/Vinumar_Ilustraciones_Rapidez.jpg'
import ventaja3 from '../images/ilustraciones/Vinumar_Ilustraciones_Innovacion.jpg'

import TextCentered from '../components/textCentered/TextCentered'
import Button from '../components/button/Button'

import { LangStateContext, LangDispatchContext } from '../components/GlobalContextProvider/GlobalContextProvider'
import { langText } from '../lang'
import CircularProgress from '@mui/material/CircularProgress';


const DondePage = ({ uri, location}) => {
    const { lang } = useContext(LangStateContext)
    const dispatch = useContext(LangDispatchContext)
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.screen.width : 1920)

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
    // useEffect(() => {
    //     if(typeof window !== 'undefined'){
    //         if(lang === 'en'){
    //             window.history.pushState({}, '', '/where-we-are')
    //         }else {
    //             window.history.pushState({}, '', uri)
    //         }
    //     }
    // }, [lang])

    const renderHeader = () => {
        return(
            <>
                <div className='donde-container-header'>
                    <img src={headerImg} alt="Donde estamos header" />
                    <div className='donde-container-header-h2'>
                        <h2>{langText.where.header[lang]}</h2>
                    </div>
                </div>
            </>
        )
    }

    const renderDonde = () => {
        return(
            <>
                <div className='donde-container-estamos'>
                    <div>
                        <h4>{langText.where.where.title[lang]}</h4>
                    </div>
                    <div className='donde-container-ubicacion'>
                        <div className='donde-container-ubicacion-text'>
                                <p>ctra. Munera, 5 02600 Villarrobledo Albacete, {langText.where.spain[lang]}</p>
                                <ReadMore width={screenWidth} lang={lang}>
                                    <div className='read-more-div'>
                                        {langText.where.where.text_top[lang]}
                                        <span className='parrafo'>{langText.where.where.text_bottom[lang]}</span>
                                    </div>
                                </ReadMore>
                        </div>
                        <img src={lang === 'es' ? dondeImg : dondeImg_en} alt="Donde estamos" />
                    </div>
                </div>
            </>
        )
    }
    const renderVentajas = () => {
        return(
            <>
                <div className='donde-container-ventajas'>
                    <h4>{langText.where.advantages.title[lang]}</h4>
                    <div className='donde-container-ventaja-card'>
                        <div className='donde-ventaja-card'>
                            <p>{langText.where.advantages.proximity[lang]}</p>
                            <img src={ventaja1} alt="ventaja 1" />
                        </div>
                        <div className='donde-ventaja-card'>
                            <p>{langText.where.advantages.speed[lang]}</p>
                            <img src={ventaja2} alt="ventaja 2" />
                        </div>
                        <div className='donde-ventaja-card'>
                            <p>{langText.where.advantages.innovation[lang]}</p>
                            <img src={ventaja3} alt="ventaja 3" />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <Head pageTitle={langText.head.where[lang]}/>
            <Navbar width='214px' />
            <div className='donde-container'>
                {headerImg ? renderHeader() : <CircularProgress />}
                <TextCentered>{langText.where.centered[lang]}</TextCentered>
                
                <Situacion />

                {renderDonde()}
                <Button style='red-button' goTo='/sobre-nosotros/valores'>{langText.where.button[lang]}</Button>
                {renderVentajas()}
            </div>

            <Footer />
        </>
    )
}
export default DondePage