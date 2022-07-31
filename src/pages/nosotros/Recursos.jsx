import React, { useContext } from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import Button from '../../components/button/Button'

import '../../styles/pages/recursos.css'

import recursos1 from '../../images/DEF/BL8A7254.jpg'
import atomizacion from '../../images/DEF/BL8A8625.jpg'

import SimpleImageSlider from 'react-simple-image-slider'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

import img1 from '../../images/DEF/BL8A8997.jpg'
import img2 from '../../images/DEF/BL8A8603.jpg'
import img3 from '../../images/DEF/BL8A8820.jpg'
// import img4 from '../../images/selected/Nuestroequipo4DSC06860.jpg'
// import img5 from '../../images/selected/Nuestroequipo5DSC06804.jpg'
// import img6 from '../../images/selected/NuestroEquipo6DSC1.jpg'

import imgInst1 from '../../images/DEF/BL8A8167.jpg'
import imgInst2 from '../../images/DEF/BL8A8569.jpg'
import imgInst3 from '../../images/DEF/BL8A7860.jpg'
import imgInst4 from '../../images/DEF/BL8A8586.jpg'

import { LangStateContext } from '../../components/GlobalContextProvider/GlobalContextProvider'
import { langText_resources } from '../../lang/lang_resources'

const Recursos = () => {
    const { lang } = useContext(LangStateContext)
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
    const renderRecursos = () => {
        return(
            <>
                <div className="recursos-recursos-container">
                    <div>
                        <h4>{langText_resources.technical.title[lang]}</h4>
                        <p>{langText_resources.technical.text_1[lang]}
                            <br/>
                            <br/>
                            {langText_resources.technical.text_2[lang]}</p>
                    </div>
                    <div className='recursos-recursos-tecnicos'>
                        <p>{langText_resources.resources.title[lang]}</p>
                        <div>
                            <p>{langText_resources.resources.text[lang]}</p>
                            <ul className='circle'>
                                <li>140.000 m<sup>2</sup> {langText_resources.resources.li_1[lang]}</li>
                                <li>15.000 m<sup>2</sup> {langText_resources.resources.li_2[lang]}</li>
                                <li>{langText_resources.resources.li_3[lang]}</li>
                                <li>{langText_resources.resources.li_4[lang]}</li>
                                <li>{langText_resources.resources.li_5[lang]}</li>
                                <li>{langText_resources.resources.li_6[lang]}</li>
                                <li>{langText_resources.resources.li_7[lang]}</li>
                                <li>{langText_resources.resources.li_8[lang]}</li>
                                <li>X-Ray</li>
                                <li>{langText_resources.resources.li_9[lang]}</li>
                                <li>{langText_resources.resources.li_10[lang]}</li>
                            </ul>
                        </div>
                        <img src={recursos1} alt="Recursos 1" />
                    </div>
                    <div className='recursos-recursos-automatizacion'>
                        <p>{langText_resources.resources.spray.title[lang]}</p>
                        <p>{langText_resources.resources.spray.text[lang]}</p>
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
                        <h4>{langText_resources.team.title[lang]}</h4>
                        <p>{langText_resources.team.text[lang]}</p>
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
                        <h4>{langText_resources.work.title[lang]}</h4>
                        <p>{langText_resources.work.text[lang]}</p>
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
                    />}
                </div>
            </>
        )
    }
    return(
        <>
            <Navbar width='214px' />
            {renderRecursos()}
            {renderEquipo()}
            {renderInstalaciones()}
            <Button style='red-button' goTo='/Contacto'  >{langText_resources.button[lang]}</Button>
            <Footer />
        </>
    )
}
export default Recursos