import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import EntornoNatural from '../../components/entornoNatural/EntornoNatural'
import TextCentered from '../../components/textCentered/TextCentered'
import Button from '../../components/button/Button'

import '../../styles/pages/extractos-uva.css'
import '../../styles/pages/mediaQueries/producto-media.css'

import uvaHeaderImg from '../../images/DEF/BL8A9790.jpg'
import vinoProducto1 from '../../images/DEF/BL8A9852.jpg'
import vinoProducto2 from '../../images/DEF/BL8A9269.jpg'
import vinoProducto3 from '../../images/DEF/BL8A9953_2.jpg'
import vinoProducto4 from '../../images/DEF/BL8A9427.jpg'

import { LangStateContext, LangDispatchContext } from '../../components/GlobalContextProvider/GlobalContextProvider'
import { langText } from '../../lang'
import { historyState } from '../../helpers/historyState'

const ExtractosVino = (props) => {
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
    //             window.history.pushState({}, '', '/product/wine-extract')
    //         }else {
    //             window.history.pushState({}, '', props.uri)
    //         }
    //     }
    // }, [lang])

    const renderExtractosHeader = () => {
        return(
            <>
                <div className='uva-container-header'>
                    <div className='uva-container-header-title'>
                        <h4>{langText.wine.header.title[lang]}</h4>
                        <p>{langText.wine.header.text[lang]}</p>
                    </div>
                    <div className='uva-header-apli-carac-img-container'>
                        <div className='uva-header-apli-carac-container'>
                            <div className='uva-header-apli-container'>
                                <p className='uva-header-apli-carac-title'>{langText.wine.header.application.title[lang]}</p>
                                <ul>
                                    <li>{langText.wine.header.application.li_1[lang]}</li>
                                    <li>Caldos</li>
                                    <li>{langText.wine.header.application.li_2[lang]}</li>
                                    <li>{langText.wine.header.application.li_3[lang]}</li>
                                    <li>{langText.wine.header.application.li_4[lang]}</li>
                                </ul>
                                <p className='uva-header-apli-definition'>{langText.wine.header.application.text[lang]}</p>
                            </div>
                            <div className='uva-header-carac-container'>
                                <p className='uva-header-apli-carac-title'>{langText.wine.header.characteristics.title[lang]}</p>
                                <ul>
                                    <li className='uva-header-carac-li'>
                                        <p>{langText.wine.header.characteristics.botanic.title[lang]}</p>
                                        <p className='italic'>{langText.wine.header.characteristics.botanic.name[lang]}</p>
                                    </li>
                                    <li className='uva-header-carac-li'>
                                        <p>{langText.wine.header.characteristics.labelling.title[lang]}</p>
                                        <ul>
                                            <li>{langText.wine.header.characteristics.labelling.extract[lang]}</li>
                                            <li>{langText.wine.header.characteristics.labelling.concentrate[lang]}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img className='uva-header-img' src={uvaHeaderImg} alt="Extracto de uva" />

                    </div>
                </div>
            </>
        )
    }

    const renderProductosCardLiquido = () => {
        return(
            <>
                <div>
                    <div>
                        <p>{langText.wine.products.liquid.title[lang]}</p>
                        <p>{langText.wine.products.liquid.text[lang]}</p>
                    </div>
                    <img className='r55l fit-cover' src={vinoProducto1} alt="Liquido" />
                    <div className='uva-productos-carac'>
                        <p className='uva-productos-subtitle'>{langText.wine.products.liquid.red.title[lang]}</p>
                        <div>
                            <p>VINUWINE R55L</p>
                            <ul>
                                <li>
                                    <p>{langText.wine.products.liquid.red.colour.name[lang]}</p>
                                    <p>{langText.wine.products.liquid.red.colour.text[lang]}</p>
                                </li>
                                <li>
                                    <p>{langText.wine.products.liquid.red.colour.title[lang]}</p>
                                    <p>0,50 &#8212; 1,50</p>
                                </li>
                                <li>
                                    <p>pH</p>
                                    <p>&#8804; 3,80</p>
                                </li>
                                <li>
                                    <p>Brix</p>
                                    <p>{langText.wine.products.liquid.red.brix.value.v1[lang]} &#8212; {langText.wine.products.liquid.red.brix.value.v2[lang]}</p>
                                </li>
                                <li>
                                    <p>{langText.wine.products.liquid.red.packaging.title[lang]}</p>
                                    <ul>
                                        <li>{langText.wine.products.liquid.red.packaging.bulk[lang]}</li>
                                        <li>{langText.wine.products.liquid.red.packaging.container[lang]}</li>
                                        <li>{langText.wine.products.liquid.red.packaging.drums[lang]}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <img className='b55l fit-cover' src={vinoProducto3} alt="Liquido" />
                    <div>
                        <p className='uva-productos-subtitle'>{langText.wine.products.liquid.white.title[lang]}</p>
                        <div>
                            <p>VINUWINE B55L</p>
                            <ul>
                                <li>
                                    <p>{langText.wine.products.liquid.white.colour.title[lang]}</p>
                                    <p>&lt; 60</p>
                                </li>
                                <li>
                                    <p>{langText.wine.products.liquid.white.colour.colour[lang]}</p>
                                    <p>{langText.wine.products.liquid.white.colour.name[lang]}</p>
                                </li>
                                <li>
                                    <p>pH</p>
                                    <p>&#8804; 3,80</p>
                                </li>
                                <li>
                                    <p>Brix</p>
                                    <p>{langText.wine.products.liquid.red.brix.value.v1[lang]} &#8212; {langText.wine.products.liquid.red.brix.value.v2[lang]}</p>
                                </li>
                                <li>
                                    <p>{langText.wine.products.liquid.white.packaging.title[lang]}</p>
                                    <ul>
                                        <li>{langText.wine.products.liquid.white.packaging.truck[lang]}</li>
                                        <li>{langText.wine.products.liquid.white.packaging.container[lang]}</li>
                                        <li>{langText.wine.products.liquid.white.packaging.drums[lang]}</li>
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
                    <div>
                        <p>{langText.wine.products.powder.title[lang]}</p>
                        <p>{langText.wine.products.powder.text[lang]}</p>
                    </div>
                    <img className='rp fit-cover' src={vinoProducto2} alt="Liquido" />
                    <div className='uva-productos-carac'>
                        <p className='uva-productos-subtitle'>{langText.wine.products.powder.red.title[lang]}</p>
                        <div>
                            <p>VINUWINE RP</p>
                            <ul>
                                <li>
                                    <p>{langText.wine.products.powder.red.colour.title[lang]}</p>
                                    <p>{langText.wine.products.powder.red.colour.name[lang]}</p>
                                </li>
                                <li>
                                    <p>pH</p>
                                    <p>&#8804; 3,80</p>
                                </li>
                                <li>
                                    <p>{langText.wine.products.powder.red.moisture[lang]}</p>
                                    <p>&lt; 7 %</p>
                                </li>
                                <li>
                                    <p>{langText.wine.products.powder.red.carrier.title[lang]}</p>
                                    <p>{langText.wine.products.powder.red.carrier.name[lang]}</p>
                                </li>
                                <li>
                                    <p>{langText.wine.products.powder.red.packaging.title[lang]}</p>
                                    <ul>
                                        <li>{langText.wine.products.powder.red.packaging.name[lang]}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <img className='bp fit-cover' src={vinoProducto4} alt="Liquido" />
                    <div>
                        <p className='uva-productos-subtitle'>{langText.wine.products.powder.white.title[lang]}</p>
                        <div>
                            <p>VINUWINE BP</p>
                            <ul>
                                <li>
                                    <p>{langText.wine.products.powder.white.colour.title[lang]}</p>
                                    <p>{langText.wine.products.powder.white.colour.name[lang]}</p>
                                </li>
                                <li>
                                    <p>pH</p>
                                    <p>&#8804; 3,80</p>
                                </li>
                                <li>
                                    <p>{langText.wine.products.powder.white.moisture[lang]}</p>
                                    <p>&lt; 7 %</p>
                                </li>
                                <li>
                                    <p>{langText.wine.products.powder.white.carrier.title[lang]}</p>
                                    <p>{langText.wine.products.powder.white.carrier.name[lang]}</p>
                                </li>
                                <li>
                                    <p>{langText.wine.products.powder.white.packaging.title[lang]}</p>
                                    <ul>
                                        <li>{langText.wine.products.powder.white.packaging.name[lang]}</li>
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
                <div className="uva-productos-container">
                    <h4>{langText.wine.products.title[lang]}</h4>
                    <div>
                        {renderProductosCardLiquido()}
                        {renderProductosCardPolvo()}
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <Navbar width='214px' />

            {renderExtractosHeader()}

            {renderProductos()}

            <TextCentered width='925px' margin='60px'>{langText.wine.centered[lang]} (&gt;30%).</TextCentered>
            <Button style='red-button' width='270' goTo='/contacto'>{langText.wine.button[lang]}</Button>

            <EntornoNatural type='vino' width={screenWidth} />

            <Footer />

        </>
    )
}
export default ExtractosVino