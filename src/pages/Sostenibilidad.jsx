import React, { useContext } from 'react'
import Navbar from '../components/navbarIndex/NavbarIndex'
import Footer from '../components/footer/Footer'
import '../styles/pages/sostenibilidad.css'

import headerImg from '../images/DEF/DJI_0722-2.jpg'
import sostenibilidad1 from '../images/DEF/BL8A7152.jpg'
import sostenibilidad2 from '../images/DEF/BL8A8775.jpg'

import Button from '../components/button/Button'

import { LangStateContext } from '../components/GlobalContextProvider/GlobalContextProvider'
import { langText_sustain } from '../lang/lang_sustain'

const SostenibilidadPage = () => {
    const { lang } = useContext(LangStateContext)
    const renderHeader = () => {
        return(
            <>
                <div className="sostenibilidad-container-header">
                    <img src={headerImg} alt="Sostenibilidad header" />
                    <p>{langText_sustain.header[lang]}</p>
                </div>
            </>
        )
    }
    const renderSostenibilidad = () => {
        return(
            <>
                <div className='sostenibilidad-container-main'>
                    <h4>{langText_sustain.sustainability.title[lang]}</h4>
                    <div>
                        <p>{langText_sustain.sustainability.parr_1[lang]}
                        <span className="parrafo">{langText_sustain.sustainability.parr_2[lang]}</span>
                        <span className="parrafo">{langText_sustain.sustainability.parr_3[lang]}</span>
                        <span className="parrafo">{langText_sustain.sustainability.parr_4[lang]}</span>
                        <span className="parrafo">{langText_sustain.sustainability.parr_5[lang]}</span>
                        <span className="parrafo">{langText_sustain.sustainability.parr_6[lang]}</span>
                        <span className="parrafo">{langText_sustain.sustainability.parr_7[lang]}</span>
                        <span className="parrafo">{langText_sustain.sustainability.parr_8[lang]}</span></p>
                        
                        
                        
                        
                        
                        
                        <img src={sostenibilidad1} alt="sostenibilidad 1" />
                    </div>
                    <div>
                        <img src={sostenibilidad2} alt="sostenibilidad 2" />
                        <p className='sostenibilidad-main-title'>{langText_sustain.chain.title[lang]}</p>
                        <p>{langText_sustain.chain.text[lang]}</p>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>
            <Navbar/>
            <div className='sostenibilidad-container'>
                {renderHeader()}
                {renderSostenibilidad()}
                <Button goTo='/Contacto' style='red-button'>CONTACTA CON NOSOTROS</Button>
            </div>
            <Footer/>
        </>
    )
}
export default SostenibilidadPage