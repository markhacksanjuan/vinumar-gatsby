import React, { useEffect, useState } from 'react'
import Button from '../button/Button'
import ReadMore from '../readMore/ReadMore'
import Head from '../Head/Head'
import Layout from '../Layout/Layout'

import '../../styles/pages/recursos.css'
import '../../styles/pages/mediaQueries/recursos-media.css'

import recursos1 from '../../images/DEF/BL8A7254.jpg'
import atomizacion from '../../images/DEF/BL8A8625.jpg'

import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

import img1 from '../../images/DEF/BL8A8997.jpg'
import img2 from '../../images/DEF/BL8A7656.jpg'
import img3 from '../../images/DEF/BL8A8820.jpg'
// import img4 from '../../images/selected/Nuestroequipo4DSC06860.jpg'
// import img5 from '../../images/selected/Nuestroequipo5DSC06804.jpg'
// import img6 from '../../images/selected/NuestroEquipo6DSC1.jpg'

import imgInst1 from '../../images/DEF/BL8A8167.jpg'
import imgInst2 from '../../images/DEF/BL8A8569.jpg'
import imgInst3 from '../../images/DEF/BL8A7860.jpg'
import imgInst4 from '../../images/DEF/BL8A8586.jpg'

import { langText } from '../../lang'
import { useLang } from '../../hook/useLang'

const Recursos = ({ location }) => {
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
         },
        { 
            original: img3,
            originalHeight: 600,
            originalClass: 'slideClass',
         }
    ]
    const imagesInst = [
        { 
            original: imgInst1, 
            originalHeight: 600,
            originalClass: 'slideClass',
        },
        // { 
        //     original: imgInst2,
        //     originalHeight: 600,
        //     originalClass: 'slideClass',
        //  },
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
    const renderRecursos = () => {
        return(
            <>
                <div className="recursos-recursos-container">
                    <div>
                        <h4>{langText.resources.technical.title[lang]}</h4>
                        <ReadMore width={screenWidth} lang={lang}>
                            <p>
                                {langText.resources.technical.text_1[lang]}
                                <br/>
                                <br/>
                                {langText.resources.technical.text_2[lang]}
                            </p>
                        </ReadMore>
                    </div>
                    <div className='recursos-recursos-tecnicos'>
                        <p>{langText.resources.resources.title[lang]}</p>
                        <div>
                            <p>{langText.resources.resources.text[lang]}</p>
                            <ul className='circle'>
                                <li>140.000 m<sup>2</sup> {langText.resources.resources.li_1[lang]}</li>
                                <li>15.000 m<sup>2</sup> {langText.resources.resources.li_2[lang]}</li>
                                <li>1.000.000 Hl {langText.resources.resources.li_3[lang]}</li>
                                <li>{langText.resources.resources.li_4[lang]}</li>
                                <li>{langText.resources.resources.li_5[lang]}</li>
                                <li>{langText.resources.resources.li_6[lang]}</li>
                                <li>{langText.resources.resources.li_7[lang]}</li>
                                <li>{langText.resources.resources.li_8[lang]}</li>
                                <li>X-Ray</li>
                                <li>{langText.resources.resources.li_9[lang]}</li>
                                <li>{langText.resources.resources.li_10[lang]}</li>
                            </ul>
                        </div>
                        <img src={recursos1} alt="Recursos 1" />
                    </div>
                    <div className='recursos-recursos-automatizacion'>
                        <p>{langText.resources.resources.spray.title[lang]}</p>
                        <p>{langText.resources.resources.spray.text[lang]}</p>
                        <img src={atomizacion} alt="Recursos 2" />
                    </div>
                </div>
            </>
        )
    }
    const renderEquipo = () => {
        return(
            <>
                <div className="recursos-equipo-container">
                    <div>
                        <h4>{langText.resources.team.title[lang]}</h4>
                        <p>{langText.resources.team.text[lang]}</p>
                    </div>
                    {/* {images && <SimpleImageSlider
                        images={images}
                        width='72.82%'
                        height={600}
                        showNavs={true}
                        showBullets={true}
                        // autoPlay={true}
                        // autoPlayDelay={4}
                        style={{
                            backgroundColor: 'rgb(255,255,255)',
                            backgroundPosition: 'center'
                        }}
                    />} */}
                    {images && <ImageGallery
                        items={images}
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
    const renderInstalaciones = () => {
        return(
            <>
                <div className="recursos-instalaciones-container">
                    <div>
                        <h4>{langText.resources.work.title[lang]}</h4>
                        <p>{langText.resources.work.text[lang]}</p>
                    </div>
                    {/* {imagesInst && <SimpleImageSlider
                        images={imagesInst}
                        width='72.82%'
                        height={600}
                        showNavs={true}
                        showBullets={true}
                        autoPlay={true}
                        autoPlayDelay={4}
                    />} */}
                    {imagesInst && <ImageGallery
                        items={imagesInst}
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
            <Head pageTitle={langText.head.resources[lang]}/>
            <Layout pageLocation={location}>
                {renderRecursos()}
                {renderEquipo()}
                {renderInstalaciones()}
                <Button style='red-button' goTo={lang === 'es' ? '/contacto' : '/en/contact-us'}  >{langText.resources.button[lang]}</Button>
            </Layout>
        </>
    )
}
export default Recursos