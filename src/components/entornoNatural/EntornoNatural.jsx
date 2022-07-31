import React, { useContext } from 'react'
import './entornoNatural.css'
import SimpleImageSlider from 'react-simple-image-slider'


import img1 from '../../images/selected/173236994.jpg'
import img2 from '../../images/selected/DSC00958.jpg'
import img3 from '../../images/selected/DJI_0705-2.jpg'

import imgAlcohol1 from '../../images/DEF/DJI_0684-2.jpg'

import imgPiel from '../../images/DEF/BL8A8217.jpg'
import imgVino from '../../images/DEF/BL8A8677.jpg'
import imgTanino from '../../images/DEF/BL8A8864.jpg'
import imgAlcohol2 from '../../images/DEF/BL8A8679.jpg'
import imgPepita from '../../images/DEF/BL8A8730.jpg'

import { LangStateContext } from '../GlobalContextProvider/GlobalContextProvider'
import { langText_natural } from '../../lang/lang_natural'

const EntornoNatural = ({ type, children, title }) => {
    const { lang } = useContext(LangStateContext)
    const images = [
        { url: img1 },
        { url: img2 },
        { url: img3 }
    ]
    // const imagesSlider = [
    //     { url: sliderImg1 },
    //     { url: sliderImg2 },
    //     { url: sliderImg3 }
    // ]

    const titleLang = langText_natural.title[lang]
    const text = langText_natural.text[lang]

    switch(type) {
        case 'slider': 
        return (
            <>
                <div className='entorno-container'>
                    <div className='entorno-text-container'>
                        <h4>{titleLang}</h4>
                        <p>{text}</p>
                    </div>
                    <SimpleImageSlider
                        images={images}
                        width='72.82%'
                        height={600}
                        showNavs={true}
                        className='entorno-slider'
                        showBullets={true}
                        autoPlay={true}
                        autoPlayDelay={4}
                     />
                </div>
            </>
        )
        case 'alcohol':
            return(
                <>
                <div className='entorno-container'>
                    <div className='entorno-text-container'>
                        <h4>{titleLang}</h4>
                        <p>{text}</p>
                    </div>
                    <div className='entorno-img-container'>
                        <img src={imgAlcohol1} alt="image" />
                        <img src={imgAlcohol2} alt="image" />
                    </div>
                </div>

                </>
            )
        case 'pepita':
            return(
                <>
                    <div className='entorno-container'>
                    <div className='entorno-text-container'>
                        <h4>{titleLang}</h4>
                        <p>{text}</p>
                    </div>
                    <div className='entorno-img-container'>
                        <img src={imgAlcohol1} alt="image" />
                        <img src={imgPepita} alt="image" />
                    </div>
                </div>
                </>
            )
        case 'piel':
            return(
                <>
                    <div className='entorno-container'>
                    <div className='entorno-text-container'>
                        <h4>{titleLang}</h4>
                        <p>{text}</p>
                    </div>
                    <div className='entorno-img-container'>
                        <img src={imgAlcohol1} alt="image" />
                        <img src={imgPiel} alt="image" />
                    </div>
                </div>
                </>
            )
        case 'vino':
            return(
                <>
                    <div className='entorno-container'>
                    <div className='entorno-text-container'>
                        <h4>{titleLang}</h4>
                        <p>{text}</p>
                    </div>
                    <div className='entorno-img-container'>
                        <img src={imgAlcohol1} alt="image" />
                        <img src={imgVino} alt="image" />
                    </div>
                </div>
                </>
            )
        case 'taninos':
            return(
                <>
                    <div className='entorno-container'>
                    <div className='entorno-text-container'>
                        <h4>{titleLang}</h4>
                        <p>{text}</p>
                    </div>
                    <div className='entorno-img-container'>
                        <img src={imgAlcohol1} alt="image" />
                        <img src={imgTanino} alt="image" />
                    </div>
                </div>
                </>
            )
    }
}
export default EntornoNatural