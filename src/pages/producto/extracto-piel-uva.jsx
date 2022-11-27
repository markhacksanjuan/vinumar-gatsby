import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import TextCentered from '../../components/textCentered/TextCentered'
import Button from '../../components/button/Button'
import EntornoNatural from '../../components/entornoNatural/EntornoNatural'
import Head from '../../components/Head/Head'

// import images
import pielHeaderImg from '../../images/DEF/BL8A9583.jpg'
import pielProducto1 from '../../images/DEF/BL8A9509_2.jpg'
import pielProductoLiquido from '../../images/DEF/BL8A4185.jpg'

import { LangStateContext, LangDispatchContext } from '../../components/GlobalContextProvider/GlobalContextProvider'
import { langText } from '../../lang'
import { historyState } from '../../helpers/historyState'

import '../../styles/pages/extractos-piel.css'
import '../../styles/pages/mediaQueries/producto-media.css'

const ExtractosPiel = (props) => {
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
    // useEffect(() => {
    //     if(typeof window !== 'undefined'){
    //         if(lang === 'en'){
    //             window.history.pushState({}, '', '/product/grape-skin-extract')
    //         }else {
    //             window.history.pushState({}, '', props.uri)
    //         }
    //     }
    // }, [lang])


    const renderExtractosHeader = () => {
        return(
            <>
                <div className='piel-container-header'>
                    <div className='piel-container-header-title'>
                        <h4>{langText.skin.header.title[lang]}</h4>
                        <p>{langText.skin.header.text_1[lang]}<span className='parrafo'>{langText.skin.header.text_2[lang]}</span></p>
                    </div>
                    <div className='piel-header-apli-carac-img-container'>
                        <div className='piel-header-apli-carac-container'>
                            <div className='piel-header-apli-container'>
                                <p className='piel-header-apli-carac-title'>{langText.skin.header.application.title[lang]}</p>
                                <ul>
                                    <li>{langText.skin.header.application.li_1[lang]}</li>
                                    <li>{langText.skin.header.application.li_2[lang]}</li>
                                    <li>{langText.skin.header.application.li_3[lang]}</li>
                                    <li>{langText.skin.header.application.li_4[lang]}</li>
                                    <li>{langText.skin.header.application.li_5[lang]}</li>
                                    <li>{langText.skin.header.application.li_6[lang]}</li>
                                </ul>
                                <p className='piel-header-apli-definition'>{langText.skin.header.application.text[lang]}</p>
                            </div>
                            <div className='piel-header-carac-container'>
                                <p className='piel-header-apli-carac-title'>{langText.skin.header.characteristics.title[lang]}</p>
                                <ul>
                                    <li className='piel-header-carac-li'>
                                        <p>{langText.skin.header.characteristics.botanic.title[lang]}</p>
                                        <p className='italic'>{langText.skin.header.characteristics.botanic.name[lang]}</p>
                                    </li>
                                    <li className='piel-header-carac-li padding-top-10'>
                                        <p>{langText.skin.header.characteristics.labelling.title[lang]}</p>
                                        <ul>
                                            <li>{langText.skin.header.characteristics.labelling.extract[lang]}</li>
                                            <li>{langText.skin.header.characteristics.labelling.antocianinas[lang]}</li>
                                            <li>E-163</li>
                                        </ul>
                                    </li>
                                    <li className='piel-header-carac-li padding-top-10'>
                                        <p>{langText.skin.header.characteristics.solubility.title[lang]}</p>
                                        <p>{langText.skin.header.characteristics.solubility.text[lang]}</p>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <img className='piel-header-img' src={pielHeaderImg} alt="Extracto de piel" />

                    </div>
                </div>
            </>
        )
    }
    const renderProductosCardLiquido = () => {
        return(
            <>
                <div>
                            <p>{langText.skin.products.liquid.title[lang]}</p>
                            <img className='fit-cover' src={pielProductoLiquido} alt="Liquido" />
                            <div>
                                <p>VINUPER 3</p>
                                <div className='producto-div'>
                                    <p>{langText.skin.products.liquid.text[lang]}</p>
                                    <ul >
                                        <li>
                                            <p>{langText.skin.products.liquid.colour.title[lang]}</p>
                                            <p>{langText.skin.products.liquid.colour.value.v1[lang]} &#8212; {langText.skin.products.liquid.colour.value.v2[lang]}</p>
                                        </li>
                                        <li>
                                            <p>{langText.skin.products.liquid.colour.name[lang]}</p>
                                            <p>{langText.skin.products.liquid.colour.text[lang]}</p>
                                        </li>
                                        <li>
                                            <p>pH</p>
                                            <p>&lt; {langText.skin.products.liquid.ph[lang]}</p>
                                        </li>
                                        <li>
                                            <p>{langText.skin.products.liquid.packaging.title[lang]}</p>
                                            <ul>
                                                <li>{langText.skin.products.liquid.packaging.cistern[lang]}</li>
                                                <li>{langText.skin.products.liquid.packaging.container[lang]}</li>
                                                <li>{langText.skin.products.liquid.packaging.drums[lang]}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
            </>
        )
    }
    const renderProductosCardPolvo = () => {
        return(
            <>
                <div>
                    <p>{langText.skin.products.powder.title[lang]}</p>
                    <img className='fit-cover' src={pielProducto1} alt="Polvo" />
                    <div>
                        <p>VINUCAP 12</p>
                        <div className='producto-div'>
                            <p>{langText.skin.products.powder.text[lang]}</p>
                            <ul>
                                <li>
                                    <p>{langText.skin.products.powder.colour.title[lang]}</p>
                                    <p>{langText.skin.products.powder.colour.value.v1[lang]} &#8212; {langText.skin.products.powder.colour.value.v2[lang]}</p>
                                </li>
                                <li>
                                    <p>{langText.skin.products.powder.colour.name[lang]}</p>
                                    <p>{langText.skin.products.powder.colour.text[lang]}</p>
                                </li>
                                <li>
                                    <p>pH</p>
                                    <p>&lt; {langText.skin.products.powder.ph[lang]}</p>
                                </li>
                                <li>
                                    <p>{langText.skin.products.powder.moisture[lang]}</p>
                                    <p>&lt; 7 %</p>
                                </li>
                                <li>
                                    <p>{langText.skin.products.powder.packaging.title[lang]}</p>
                                    <ul>
                                        <li>{langText.skin.products.powder.packaging.text[lang]}</li>
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
                    <h4>{langText.skin.products.title[lang]}</h4>
                    <div>
                        {renderProductosCardLiquido()}
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
            <Head keywordsPage={key_color} pageTitle={langText.head.skin[lang]} description='VINUPER - VINUCAP - Producto extracto piel de uva, enocianina, antocianinas, antocianos, E-163, colorantes naturales - Enocyanin, anthocyanin, grape skin extracts; natural colourings'/>
            <Navbar width='214px' />

            {renderExtractosHeader()}

            {renderProductos()}

            <TextCentered width='925px' margin='60px'>{langText.skin.centered[lang]}</TextCentered>
            <Button style='red-button' width='270' goTo='/contacto'>{langText.skin.button[lang]}</Button>

            <EntornoNatural type='piel' width={screenWidth} />

            <Button style='red-button' width='270' goTo='/sobre-nosotros/valores'>{langText.where.button[lang]}</Button>

            <Footer />

        </>
    )
}
export default ExtractosPiel