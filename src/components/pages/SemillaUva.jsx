import React, { useContext, useEffect, useState } from 'react'
import TextCentered from '../textCentered/TextCentered'
import Button from '../button/Button'
import EntornoNatural from '../entornoNatural/EntornoNatural'
import Head from '../Head/Head'
import Layout from '../Layout/Layout'

// import images
import semillaApliImg from '../../images/DEF/productos/semillas/BL8A9285.jpg'
import semillaProducto from '../../images/DEF/productos/semillas/Recorte_pagina_producto.png'
// import semillaProducto from '../../images/DEF/productos/semillas/BL8A9208_3.jpg'

import { langText } from '../../lang'

import '../../styles/pages/extractos-semillas.css'
import '../../styles/pages/mediaQueries/producto-media.css'

const ExtractosPiel = ({ lang, location }) => {
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

    const renderExtractosHeader = () => {
        return(
            <>
                <div className='piel-container-header'>
                    <div className='piel-container-header-title'>
                        <h4>{langText.semillas.header.title[lang]}</h4>
                        <p>{langText.semillas.header.text_1[lang]}<span className='parrafo'>{langText.semillas.header.text_2[lang]}</span></p>
                    </div>
                    <div className='piel-header-apli-carac-img-container'>
                        <div className='piel-header-apli-carac-container'>
                            <div className='piel-header-apli-container'>
                                <p className='piel-header-apli-carac-title'>{langText.semillas.header.application.title[lang]}</p>
                                <ul>
                                    <li>{langText.semillas.header.application.li_1[lang]}</li>
                                    <li>{langText.semillas.header.application.li_2[lang]}</li>
                                    <li>{langText.semillas.header.application.li_3[lang]}</li>
                                </ul>
                                <div className='piel-header-apli-definition'>
                                    <p>{langText.semillas.header.application.text[lang]}<span className='parrafo'>{langText.semillas.header.application.text_2[lang]}</span></p>
                                    <ul>
                                        <li><span className='li-span'>{langText.semillas.header.application.app_text_li_1[lang]}</span></li>
                                        <li><span className='li-span'>{langText.semillas.header.application.app_text_li_2[lang]}</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='piel-header-carac-container'>
                                <p className='piel-header-apli-carac-title'>{langText.semillas.header.characteristics.title[lang]}</p>
                                <ul>
                                    <li className='piel-header-carac-li'>
                                        <p>{langText.semillas.header.characteristics.botanic.title[lang]}</p>
                                        <p className='italic'>{langText.semillas.header.characteristics.botanic.name[lang]}</p>
                                    </li>
                                    <li className='piel-header-carac-li padding-top-10'>
                                        <p>{langText.semillas.header.characteristics.labelling.title[lang]}</p>
                                        <ul>
                                            <li>{langText.semillas.header.characteristics.labelling.extract[lang]}</li>
                                            {/* <li>E-163</li> */}
                                        </ul>
                                    </li>
                                    <li className='piel-header-carac-li padding-top-10'>
                                        <p>{langText.semillas.header.characteristics.solubility.title[lang]}</p>
                                        <p>{langText.semillas.header.characteristics.solubility.text[lang]}</p>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <img className='piel-header-img' src={semillaApliImg} alt="Extracto de piel" style='width: 50%' />

                    </div>
                </div>
            </>
        )
    }
    
    const renderProductosCardPolvo = () => {
        return(
            <>
                <div>
                    <p>{langText.semillas.products.powder.title[lang]}</p>
                    <img className='fit-cover' src={semillaProducto} alt="Polvo" />
                    <div>
                        <p>VINUOPC</p>
                        <div className='producto-div'>
                            <p>{langText.semillas.products.powder.text[lang]}</p>
                            <ul>
                                <li>
                                    <p>{langText.semillas.products.powder.colour.title[lang]}</p>
                                    <p>&ge; {langText.semillas.products.powder.colour.value[lang]} %</p>
                                </li>
                                <li>
                                    <p>{langText.semillas.products.powder.colour.name[lang]}</p>
                                    <p className='piel-productos-color'>&gt; {langText.semillas.products.powder.colour.text[lang]} %</p>
                                </li>
                                <li>
                                    <p>{langText.semillas.products.powder.moisture[lang]}</p>
                                    <p>&le; 7 %</p>
                                </li>
                                <li>
                                    <p>{langText.semillas.products.powder.packaging.title[lang]}</p>
                                    <ul>
                                        <li>{langText.semillas.products.powder.packaging.text[lang]}</li>
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
                    <h4>{langText.semillas.products.title[lang]}</h4>
                    <div>
                        {renderProductosCardPolvo()}
                    </div>
                </div>
            </>
        )
    }

    const key_color_esp = 'enocianina, extracto piel uva, antocianinas, antocianinos, e-163, vinuper, vinucap, colorantes naturales'
    const key_color_eng = 'enocyanin, grape skin extracts, anthocyanin, natural colourings'
    const key_color = key_color_esp + ', ' + key_color_eng


    return(
        <>
            <Head keywordsPage={key_color} pageTitle={langText.head.semillas[lang]} description='VINUPER - VINUCAP - Producto extracto piel de uva, enocianina, antocianinas, antocianos, E-163, colorantes naturales - Enocyanin, anthocyanin, grape skin extracts; natural colourings'/>
            <Layout pageLocation={location}>
                {renderExtractosHeader()}

                {renderProductos()}

                <Button style='red-button' width='270' goTo={lang === 'es' ? '/contacto' : '/en/contact-us'}>{langText.semillas.button[lang]}</Button>
                
                    <EntornoNatural type='piel' width={screenWidth} />

                <Button style='red-button' width='270' goTo={lang === 'es' ? '/sobre-nosotros/valores' : '/en/about-us/values'}>{langText.where.button[lang]}</Button>
            </Layout>
        </>
    )
}
export default ExtractosPiel