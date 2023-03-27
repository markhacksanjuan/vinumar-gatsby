import React, { useContext, useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import '../../styles/pages/historia.css'
import '../../styles/pages/mediaQueries/historia-media.css'
import '../../styles/pages/historia-crono2.css'
import SimpleImageSlider from 'react-simple-image-slider'
import Button from '../../components/button/Button'
import ReadMore from '../../components/readMore/ReadMore'
import Head from '../../components/Head/Head'
import Layout from '../../components/Layout/Layout'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

import headerImg from '../../images/DEF/historicas/AA15-1 V2.jpg'

import img1 from '../../images/DEF/historicas/img060.jpg'
import img2 from '../../images/DEF/historicas/img139.jpg'
// import img3 from '../../images/selected/Historia-3IND2001-061.jpg'

import imgInst1 from '../../images/DEF/BL8A7370.jpg'
import imgInst2 from '../../images/DEF/DJI_0559.jpg'
import imgInst3 from '../../images/DEF/BL8A7156.jpg'
import imgInst4 from '../../images/DEF/DJI_0551.jpg'

import { LangStateContext, LangDispatchContext } from '../../components/GlobalContextProvider/GlobalContextProvider'
import { langText } from '../../lang'
import { historyState } from '../../helpers/historyState'


const Historia = (props) => {
    const { t } = useTranslation()
    const { lang } = useContext(LangStateContext)
    const dispatch = useContext(LangDispatchContext)
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.screen.width : 1920)

    const resizeFunction = () => {
        setScreenWidth(window.screen.width)
    }
    useEffect(() =>{
        if(typeof window !== 'undefined') {
            window.addEventListener('resize', resizeFunction)
        }
        return(() => {
            window.removeEventListener('resize', resizeFunction)
        })
    }, [])
    // useEffect(() => {
    //     if(typeof window !== 'undefined'){
    //         if(lang === 'en'){
    //             window.history.pushState({}, '', '/about-us/our-history')
    //         }else {
    //             window.history.pushState({}, '', props.uri)
    //         }
    //     }
    // }, [lang])

    const images = [
        { 
            original: img1, 
            originalHeight: 600,
            originalClass: 'slideClass',
        },
        { 
            original: img2,
            originalHeight: 600,
            originalClass: 'slideClass',
         }
    ]
    const imagesHist = [
        { 
            original: imgInst1, 
            originalHeight: 600,
            originalClass: 'slideClass',
        },
        { 
            original: imgInst2,
            originalHeight: 600,
            originalClass: 'slideClass',
         },
        { 
            original: imgInst3,
            originalHeight: 600,
            originalClass: 'slideClass',
         },
         { 
             original: imgInst4,
             originalHeight: 600,
             originalClass: 'slideClass',
          }
    ]


    const renderHeader = () => {
        return(
            <>
                <div className="historia-container-header">
                    <img src={headerImg} alt="historia" />
                    <h2 className='historia-h2'>{t('header')}</h2>
                </div>
            </>
        )
    }
    const renderVinumar = () => {
        return(
            <>
                <div className="historia-vinumar-container">
                    <div>
                        <h4>{t('vinumar.titulo')}</h4>
                        <ReadMore width={screenWidth} lang={lang}>
                            <p>
                                {t('vinumar.texto_1')}
                                <span className="parrafo">{t('vinumar.texto_2')}</span>
                            </p>
                        </ReadMore>
                    </div>
                    {/* {images && <SimpleImageSlider 
                        images={images}
                        width='72.82%'
                        height={600}
                        showNavs={true}
                        showBullets={true}
                        autoPlay={true}
                        autoPlayDelay={4}
                    />} */}
                    {images && <ImageGallery
                        items={images}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showBullets={true}
                        autoPlay={true}
                    />}
                </div>
            </>
        )
    }

    const renderCronologia = () => {
        return(
            <>
                <div className="historia-crono-container">
                    <div>
                        <h4>{t('cronologia.titulo')}</h4>
                    </div>
                    <div>
                        <div>
                            <div id='div-1955' style={{ height: '130px' }}>
                                <p>{t('cronologia.1955')}</p>
                                <p>1955</p>
                            </div>
                            <div id='div-1970' className='two-years' style={{ height: '130px' }}>
                                <p>{t('cronologia.1970')}</p>
                                <p style={{ width: '50%'}}>1970-79</p>
                            </div>
                            <div id='div-1993' style={{ height: '115px' }}>
                                <p>{t('cronologia.1993')}</p>
                                <p>1993</p>
                            </div>
                            <div id='div-2005' style={{ height: '130px' }}> 
                                <p>{t('cronologia.2005')}</p>
                                <p>2005</p>
                            </div>
                            <div style={{ paddingBottom: '10px'}}>
                                <p>{t('cronologia.2018')}</p>
                                <p>2018</p>
                            </div>
                            <div style={{ paddingBottom: '10px', paddingTop: '10px'}}>
                                <p>{t('cronologia.2020_1')}</p>
                                <p>2020</p>
                            </div>
                            <div style={{ borderRight: 'none' }}>
                                <p>{t('cronologia.2021')}</p>
                                <p>2021</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ height: '150px' }}>
                                <p>1965</p>
                                <p>{t('cronologia.1965')}</p>
                            </div>
                            <div id='div-1989' style={{ height: '65px' }}>
                                <p>1989</p>
                                <p>{t('cronologia.1989')}</p>
                            </div>
                            <div id='div-1994' style={{ height: '150px' }}>
                                <p>1994</p>
                                <p>{t('cronologia.1994')}</p>
                            </div>
                            <div style={{ height: '90px' }}>
                                <p>2013</p>
                                <p>{t('cronologia.2013')}</p>
                            </div>
                            <div id='div-2019' style={{ height: '60px' }}>
                                <p>2019</p>
                                <p>{t('cronologia.2019')}</p>
                            </div>
                            <div id='div-2020-2'>
                                <p>2020</p>
                                <p>{t('cronologia.2020_2')}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
    const renderCronologia2 = () => {
        return(
            <>
                <div className="historia-crono2-container">
                    <div>
                        <h4>{t('cronologia.titulo')}</h4>
                    </div>
                    <div>
                        <div>
                            <div className='crono2-div'>
                                <p>1955</p>
                                <p>{t('cronologia.1955')}</p>
                            </div>
                            <div className='crono2-div'>
                                <p>1965</p>
                                <p>{t('cronologia.1965')}</p>
                            </div>
                            <div className='two-years crono2-div'>
                                <p style={{ width: '50%'}}>1970-79</p>
                                <p>{t('cronologia.1970')}</p>
                            </div>
                            <div className='crono2-div'>
                                <p>1989</p>
                                <p>{t('cronologia.1989')}</p>
                            </div>
                            <div className='crono2-div'>
                                <p>1993</p>
                                <p>{t('cronologia.1993')}</p>
                            </div>
                            <div className='crono2-div'>
                                <p>1994</p>
                                <p>{t('cronologia.1994')}</p>
                            </div>
                            <div className='crono2-div'> 
                                <p>2005</p>
                                <p>{t('cronologia.2005')}</p>
                            </div>
                            <div className='crono2-div'>
                                <p>2013</p>
                                <p>{t('cronologia.2013')}</p>
                            </div>
                            <div className='crono2-div'>
                                <p>2018</p>
                                <p>{t('cronologia.2018')}</p>
                            </div>
                            <div className='crono2-div'>
                                <p>2019</p>
                                <p>{t('cronologia.2019')}</p>
                            </div>
                            <div className='crono2-div'>
                                <p>2020</p>
                                <p>{t('cronologia.2020_1')}</p>
                            </div>
                            <div className='crono2-div'>
                                <p>2020</p>
                                <p>{t('cronologia.2020_2')}</p>
                            </div>
                            <div className='crono2-div'>
                                <p>2021</p>
                                <p>{t('cronologia.2021')}</p>
                            </div>
                        </div>
                        <div>
                        </div>

                    </div>
                </div>
            </>
        )
    }

    const renderHistoria = () => {
        return(
            <>
                <div className="historia-historia-container">
                    <div>
                        <h4>{t('crecimiento.titulo')}</h4>
                        <p>{t('crecimiento.texto_1')}
                        <span>{t('crecimiento.texto_2')}</span>
                        </p>
                    </div>
                    {/* {imagesHist && <SimpleImageSlider 
                        images={imagesHist}
                        width='72.82%'
                        height={600}
                        showNavs={true}
                        showBullets={true}
                        autoPlay={true}
                        autoPlayDelay={4}
                    />} */}
                    {imagesHist && <ImageGallery
                        items={imagesHist}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showBullets={true}
                        autoPlay={true}
                        slideDuration={1000}
                        slideInterval={4500}
                    />}
                </div>
            </>
        )
    }
    return(
        <>
            <Head pageTitle={langText.head.history[lang]}/>
            <Layout>
                {renderHeader()}
                {renderVinumar()}
                {screenWidth > 800 ? renderCronologia() : renderCronologia2()}
                {renderHistoria()}
                <Button style='red-button' goTo='/contacto' >{langText.history.button[lang]}</Button>
            </Layout>
            {/* <Navbar width='214px' />
            <Footer /> */}

        </>
    )
}
export default Historia

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: {ns: {in: ["historia", "common"]}, language: {eq: $language}}) {
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