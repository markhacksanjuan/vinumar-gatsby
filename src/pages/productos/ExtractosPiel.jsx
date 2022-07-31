import React, { useContext } from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import TextCentered from '../../components/textCentered/TextCentered'
import Button from '../../components/button/Button'
import EntornoNatural from '../../components/entornoNatural/EntornoNatural'

// import images
import pielHeaderImg from '../../images/DEF/BL8A9583.jpg'
import pielProducto1 from '../../images/DEF/BL8A9509_2.jpg'
import pielProductoLiquido from '../../images/DEF/BL8A4185.jpg'

import { LangStateContext } from '../../components/GlobalContextProvider/GlobalContextProvider'
import { langText_skin } from '../../lang/lang_skin'


import '../../styles/pages/extractos-piel.css'

const ExtractosPiel = () => {
    const { lang } = useContext(LangStateContext)

    const renderExtractosHeader = () => {
        return(
            <>
                <div className='piel-container-header'>
                    <div className='piel-container-header-title'>
                        <h4>{langText_skin.header.title[lang]}</h4>
                        <p>{langText_skin.header.text_1[lang]}<span className='parrafo'>{langText_skin.header.text_2[lang]}</span></p>
                    </div>
                    <div className='piel-header-apli-carac-img-container'>
                        <div className='piel-header-apli-carac-container'>
                            <div className='piel-header-apli-container'>
                                <p className='piel-header-apli-carac-title'>{langText_skin.header.application.title[lang]}</p>
                                <ul>
                                    <li>{langText_skin.header.application.li_1[lang]}</li>
                                    <li>{langText_skin.header.application.li_2[lang]}</li>
                                    <li>{langText_skin.header.application.li_3[lang]}</li>
                                    <li>{langText_skin.header.application.li_4[lang]}</li>
                                    <li>{langText_skin.header.application.li_5[lang]}</li>
                                    <li>{langText_skin.header.application.li_6[lang]}</li>
                                </ul>
                                <p className='piel-header-apli-definition'>{langText_skin.header.application.text[lang]}</p>
                            </div>
                            <div className='piel-header-carac-container'>
                                <p className='piel-header-apli-carac-title'>{langText_skin.header.characteristics.title[lang]}</p>
                                <ul>
                                    <li className='piel-header-carac-li'>
                                        <p>{langText_skin.header.characteristics.botanic.title[lang]}</p>
                                        <p className='italic'>{langText_skin.header.characteristics.botanic.name[lang]}</p>
                                    </li>
                                    <li className='piel-header-carac-li'>
                                        <p>{langText_skin.header.characteristics.labelling.title[lang]}</p>
                                        <ul>
                                            <li>{langText_skin.header.characteristics.labelling.extract[lang]}</li>
                                            <li>{langText_skin.header.characteristics.labelling.antocianinas[lang]}</li>
                                            <li>E-163</li>
                                        </ul>
                                    </li>
                                    <li className='piel-header-carac-li'>
                                        <p>{langText_skin.header.characteristics.solubility.title[lang]}</p>
                                        <p>{langText_skin.header.characteristics.solubility.text[lang]}</p>
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
                            <p>{langText_skin.products.liquid.title[lang]}</p>
                            <img className='fit-cover' src={pielProductoLiquido} alt="Liquido" />
                            <div>
                                <p>VINUPER 3</p>
                                <div>
                                    <p>{langText_skin.products.liquid.text[lang]}</p>
                                    <ul>
                                        <li>
                                            <p>E3/{langText_skin.products.liquid.colour.title[lang]}</p>
                                            <p>2,9 &#8212; 3,1</p>
                                        </li>
                                        <li>
                                            <p>{langText_skin.products.liquid.colour.title[lang]}</p>
                                            <p>{langText_skin.products.liquid.colour.text[lang]}</p>
                                        </li>
                                        <li>
                                            <p>pH</p>
                                            <p>&lt; 3,0</p>
                                        </li>
                                        <li>
                                            <p>{langText_skin.products.liquid.packaging.title[lang]}</p>
                                            <ul>
                                                <li>{langText_skin.products.liquid.packaging.cistern[lang]}</li>
                                                <li>{langText_skin.products.liquid.packaging.container[lang]}</li>
                                                <li>{langText_skin.products.liquid.packaging.drums[lang]}</li>
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
                    <p>{langText_skin.products.powder.title[lang]}</p>
                    <img className='fit-cover' src={pielProducto1} alt="Polvo" />
                    <div>
                        <p>VINUCAP 12</p>
                        <div>
                            <p>{langText_skin.products.powder.text[lang]}</p>
                            <ul>
                                <li>
                                    <p>E3/{langText_skin.products.powder.colour.title[lang]}</p>
                                    <p>11,4 &#8212; 12,6</p>
                                </li>
                                <li>
                                    <p>{langText_skin.products.powder.colour.title[lang]}</p>
                                    <p>{langText_skin.products.powder.colour.text[lang]}</p>
                                </li>
                                <li>
                                    <p>pH</p>
                                    <p>&lt; 3,5</p>
                                </li>
                                <li>
                                    <p>{langText_skin.products.powder.moisture[lang]}</p>
                                    <p>&lt; 7 %</p>
                                </li>
                                <li>
                                    <p>{langText_skin.products.powder.packaging.title[lang]}</p>
                                    <ul>
                                        <li>{langText_skin.products.powder.packaging.text[lang]}</li>
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
                    <h4>{langText_skin.products.title[lang]}</h4>
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

            <TextCentered width='925px' margin='60px'>{langText_skin.centered[lang]}</TextCentered>
            <Button style='red-button' width='270' goTo='/Contacto'>{langText_skin.button[lang]}</Button>

            <EntornoNatural type='piel' />
            <Footer />

        </>
    )
}
export default ExtractosPiel