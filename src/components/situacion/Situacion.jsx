import React, { useContext } from 'react'
import './situacion.css'
import './situacion-media.css'

import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

// import images to slider
// import img1 from '../../images/img/Entorno_natural_Carrusel_1.jpg'
// import img2 from '../../images/img/Entorno_natural_Carrusel_2.jpg'
// import img3 from '../../images/img/Entorno_natural_Carrusel_3.jpg'

import img1 from '../../images/selected/DJI_0682-2_sit1.jpg'
import img2 from '../../images/selected/DJI_0684-2_sit2.jpg'
import img3 from '../../images/selected/DJI_0696-2_sit3.jpg'

import { LangStateContext } from '../GlobalContextProvider/GlobalContextProvider'
import { langText } from '../../lang'


const Situacion = ({ type, children, title }) => {
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
    // const imagesSlider = [
    //     { url: sliderImg1 },
    //     { url: sliderImg2 },
    //     { url: sliderImg3 }
    // ]

        return (
            <>
                <div className='situacion-container'>
                    <div className='situacion-text-container'>
                        <h4>{langText.where.geographic.title[lang]}</h4>
                        <div className='situacion-card'>
                            <p>{langText.where.geographic.sub_title[lang]}</p>
                            <p>{langText.where.geographic.text[lang]}</p>
                        </div>
                    </div>
                    {/* <SimpleImageSlider
                        images={images}
                        width='72.82%'
                        height={600}
                        showNavs={true}
                        className='situacion-slider'
                        showBullets={true}
                        autoPlay={true}
                        autoPlayDelay={4}
                     /> */}
                     <ImageGallery
                        items={images}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showBullets={true}
                        autoPlay={true}
                    />
                </div>
            </>
        )

}
export default Situacion