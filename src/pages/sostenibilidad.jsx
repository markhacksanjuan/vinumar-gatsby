import React, { useContext, useEffect } from 'react'
import Navbar from '../components/navbarIndex/NavbarIndex'
import Footer from '../components/footer/Footer'
import '../styles/pages/sostenibilidad.css'

import headerImg from '../images/DEF/DJI_0722-2.jpg'
import sostenibilidad1 from '../images/DEF/BL8A7152.jpg'
import sostenibilidad2 from '../images/DEF/BL8A8775.jpg'

import Button from '../components/button/Button'

import { LangStateContext, LangDispatchContext } from '../components/GlobalContextProvider/GlobalContextProvider'
import { langText } from '../lang'
import { historyState } from '../helpers/historyState'

const SostenibilidadPage = (props) => {
    const { lang } = useContext(LangStateContext)
    const dispatch = useContext(LangDispatchContext)

    console.log(window.history.state)
    useEffect(() =>{
        // historyState(window.location.state, dispatch)
    }, [])
    useEffect(() => {
        if(typeof window !== 'undefined'){
            if(lang === 'en'){
                window.history.pushState({}, '', '/sustainability')
            }else {
                window.history.pushState({}, '', props.uri)
            }
        }
    }, [lang])

    const renderHeader = () => {
        return(
            <>
                <div className="sostenibilidad-container-header">
                    <img src={headerImg} alt="Sostenibilidad header" />
                    <p>{langText.sustain.header[lang]}</p>
                </div>
            </>
        )
    }
    const renderSostenibilidad = () => {
        return(
            <>
                <div className='sostenibilidad-container-main'>
                    <h4>{langText.sustain.sustainability.title[lang]}</h4>
                    <div>
                        <p>{langText.sustain.sustainability.parr_1[lang]}
                        <span className="parrafo">{langText.sustain.sustainability.parr_2[lang]}</span>
                        <span className="parrafo">{langText.sustain.sustainability.parr_3[lang]}</span>
                        <span className="parrafo">{langText.sustain.sustainability.parr_4[lang]}</span>
                        <span className="parrafo">{langText.sustain.sustainability.parr_5[lang]}</span>
                        <span className="parrafo">{langText.sustain.sustainability.parr_6[lang]}</span>
                        <span className="parrafo">{langText.sustain.sustainability.parr_7[lang]}</span>
                        <span className="parrafo">{langText.sustain.sustainability.parr_8[lang]}</span></p>
                        
                        
                        
                        
                        
                        
                        <img src={sostenibilidad1} alt="sostenibilidad 1" />
                    </div>
                    <div>
                        <img src={sostenibilidad2} alt="sostenibilidad 2" />
                        <p className='sostenibilidad-main-title'>{langText.sustain.chain.title[lang]}</p>
                        <p>{langText.sustain.chain.text[lang]}</p>
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
                <Button goTo='/Contacto' style='red-button'>{langText.sustain.button[lang]}</Button>
            </div>
            <Footer/>
        </>
    )
}
export default SostenibilidadPage