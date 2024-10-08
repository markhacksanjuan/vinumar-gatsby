import React, { useEffect, useState } from 'react'
import EntornoNatural from '../entornoNatural/EntornoNatural'
import TextCentered from '../textCentered/TextCentered'
import Button from '../button/Button'
import Head from '../Head/Head'
import Layout from '../Layout/Layout'

import '../../styles/pages/taninos.css'
import '../../styles/pages/mediaQueries/producto-media.css'
import taninosHeaderImg from '../../images/DEF/BL8A9614.jpg'

import taninosProductoImg from '../../images/DEF/BL8A9520_2.jpg'

import { langText } from '../../lang'
import { useLang } from '../../hook/useLang'

const Taninos = ({ location }) => {
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

    const renderTaninosHeader = () => {
        return(
            <>
                <div className='taninos-container-header'>
                    <div className='taninos-container-header-title'>
                        <h4>{langText.tannins.header.title[lang]}</h4>
                        <p>{langText.tannins.header.text_1[lang]}
                            <span className="parrafo">
                            {langText.tannins.header.text_2[lang]}
                            </span>
                        </p>
                    </div>
                    <div className='taninos-header-apli-carac-img-container'>
                        <div className='taninos-header-apli-carac-container'>
                            <div className='taninos-header-apli-container'>
                                <p className='taninos-header-apli-carac-title'>{langText.tannins.header.applications.title[lang]}</p>
                                <ul>
                                    <li>{langText.tannins.header.applications.industry[lang]}, 
                                    <span className='block'>{langText.tannins.header.applications.name[lang]}</span>
                                    
                                    </li>
                                </ul>
                                <p className='taninos-header-apli-definition'>{langText.tannins.header.applications.text[lang]}</p>
                            </div>
                            <div className='taninos-header-carac-container'>
                                <p className='taninos-header-apli-carac-title'>{langText.tannins.header.characteristics.title[lang]}</p>
                                <ul>
                                    <li className='taninos-header-carac-li'>
                                        <p>{langText.tannins.header.characteristics.botanic.title[lang]}</p>
                                        <p className='italic'>{langText.tannins.header.characteristics.botanic.name[lang]}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img className='taninos-header-img' src={taninosHeaderImg} alt="Extracto de uva" />

                    </div>
                </div>
            </>
        )
    }

    const renderProductosCardPolvo = () => {
        return(
            <>
                <div>
                    <p>{langText.tannins.products.powder.title[lang]}</p>
                    <img className='tanin fit-cover' src={taninosProductoImg} alt="Polvo" />
                    <div>
                        <p>VINUPEP P</p>
                        <div className='producto-div taninos-productos-carac'>
                            <p>{langText.tannins.products.powder.vinupep.text[lang]}</p>
                            <ul>
                                <li>
                                    <p>{langText.tannins.products.powder.vinupep.tannins[lang]}</p>
                                    <p>&gt; 65 %</p>
                                </li>
                                <li>
                                    <p>{langText.tannins.products.powder.vinupep.ashes[lang]}</p>
                                    <p>&lt; 4 %</p>
                                </li>
                                <li>
                                    <p>{langText.tannins.products.powder.vinupep.iron[lang]}</p>
                                    <p>&lt; 50 ppm</p>
                                </li>
                                <li>
                                    <p>{langText.tannins.products.powder.vinupep.moisture[lang]}</p>
                                    <p>&lt; 7 %</p>
                                </li>
                                <li>
                                    <p>{langText.tannins.products.powder.vinupep.packaging.title[lang]}</p>
                                    <ul>
                                        <li>{langText.tannins.products.powder.vinupep.packaging.text[lang]}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const renderProductosCard2 = () => {
        return (
            <>
                <div>
                    <p>{langText.tannins.products.powder.title[lang]}</p>
                    <img style={{  objectPosition: 'top' }} className='tanin fit-cover' src={taninosProductoImg} alt="Polvo" />
                    <div>
                        <p>VINUPEB P</p>
                        <div className='producto-div taninos-productos-carac'>
                            <p>{langText.tannins.products.powder.vinupeb.text[lang]}</p>
                            <ul>
                                <li>
                                    <p>{langText.tannins.products.powder.vinupeb.tannins[lang]}</p>
                                    <p>&gt; 65 %</p>
                                </li>
                                <li>
                                    <p>{langText.tannins.products.powder.vinupeb.ashes[lang]}</p>
                                    <p>&lt; 4 %</p>
                                </li>
                                <li>
                                    <p>{langText.tannins.products.powder.vinupeb.iron[lang]}</p>
                                    <p>&lt; 50 ppm</p>
                                </li>
                                <li>
                                    <p>{langText.tannins.products.powder.vinupeb.moisture[lang]}</p>
                                    <p>&lt; 7 %</p>
                                </li>
                                <li>
                                    <p>{langText.tannins.products.powder.vinupeb.packaging.title[lang]}</p>
                                    <ul>
                                        <li>{langText.tannins.products.powder.vinupeb.packaging.text[lang]}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const renderProductos = () => {
        return(
            <>
                <div className="piel-productos-container">
                    <h4>{langText.tannins.products.title[lang]}</h4>
                    <div>
                        {renderProductosCardPolvo()}
                        {renderProductosCard2()}
                    </div>
                </div>
            </>
        )
    }

    const key_tanin_esp = 'taninos, taninos de uva'
    const key_tanin_eng = 'tannins, grape tannins'
    const key_tanin = key_tanin_eng + ', ' + key_tanin_esp



    return(
        <>
            <Head keywordsPage={key_tanin} pageTitle={langText.head.tannins[lang]} description='Taninos de uva - grape tannins'/>
            <Layout pageLocation={location}>
                {renderTaninosHeader()}

                {renderProductos()}

                <TextCentered width='925px' margin='60px'>{langText.tannins.centered[lang]}</TextCentered>
                <Button style='red-button' width='270' goTo={lang === 'es' ? '/contacto' : '/en/contact-us'}>{langText.tannins.button[lang]}</Button>

                    <EntornoNatural type='taninos' width={screenWidth} />

                <Button style='red-button' width='270' goTo={lang === 'es' ? '/sobre-nosotros/valores' : '/en/about-us/values'}>{langText.where.button[lang]}</Button>
            </Layout>
        </>
    )
}
export default Taninos