import React, { useContext, useEffect, useState } from 'react'
import ReadMore from '../components/readMore/ReadMore'
import '../styles/pages/sostenibilidad.css'
import '../styles/pages/mediaQueries/sostenibilidad-media.css'
import Head from '../components/Head/Head'
// import Head from '../components/Head/Head'
import Layout from '../components/Layout/Layout'

import Loading from '../components/Loading/Loading'

import headerImg from '../images/DEF/DJI_0722-2.jpg'
import sostenibilidad1 from '../images/DEF/BL8A7152.jpg'
import sostenibilidad2 from '../images/DEF/BL8A8775.jpg'

import Button from '../components/button/Button'

import { LangStateContext, LangDispatchContext } from '../components/GlobalContextProvider/GlobalContextProvider'
import { langText } from '../lang'

const SostenibilidadPage = (props) => {
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

    useEffect(() =>{
        // historyState(window.location.state, dispatch)
    }, [])
    // useEffect(() => {
    //     if(typeof window !== 'undefined'){
    //         if(lang === 'en'){
    //             window.history.pushState({}, '', '/sustainability')
    //         }else {
    //             window.history.pushState({}, '', props.uri)
    //         }
    //     }
    // }, [lang])

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
                    <div className='sostenibilidad-text'>
                        <ReadMore width={screenWidth} lang={lang}>
                            <p>
                                {langText.sustain.sustainability.parr_1[lang]}
                                <span className="parrafo">{langText.sustain.sustainability.parr_2[lang]}</span>
                                <span className="parrafo">{langText.sustain.sustainability.parr_3[lang]}</span>
                                <span className="parrafo">{langText.sustain.sustainability.parr_4[lang]}</span>
                                <span className="parrafo">{langText.sustain.sustainability.parr_5[lang]}</span>
                                <span className="parrafo">{langText.sustain.sustainability.parr_6[lang]}</span>
                                <span className="parrafo">{langText.sustain.sustainability.parr_7[lang]}</span>
                                <span className="parrafo">{langText.sustain.sustainability.parr_8[lang]}</span>
                            </p>
                        </ReadMore>
                        
                        
                        
                        
                        
                        
                        <img src={sostenibilidad1} alt="sostenibilidad 1" />
                    </div>
                    <div className='sostenibilidad-img'>
                            <img src={sostenibilidad2} alt="sostenibilidad 2" />
                        {/* <div>
                        </div> */}
                        <div>
                            <p className='sostenibilidad-main-title'>{langText.sustain.chain.title[lang]}</p>
                            <p>{langText.sustain.chain.text[lang]}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>
            {/* <Head lang={lang} /> */}
            <Head pageTitle={langText.head.sustain[lang]}/>
            <Layout>
            <div className='sostenibilidad-container'>
                {renderHeader()}
                {renderSostenibilidad()}
                <Button goTo='/contacto' style='red-button'>{langText.sustain.button[lang]}</Button>
            </div>
            </Layout>
        </>
    )
}
export default SostenibilidadPage