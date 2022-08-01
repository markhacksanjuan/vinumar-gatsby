import React, { useContext } from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import EntornoNatural from '../../components/entornoNatural/EntornoNatural'
import TextCentered from '../../components/textCentered/TextCentered'
import Button from '../../components/button/Button'

import '../../styles/pages/taninos.css'
import taninosHeaderImg from '../../images/DEF/BL8A9614.jpg'

import taninosProductoImg from '../../images/DEF/BL8A9520_2.jpg'

import { LangStateContext } from '../../components/GlobalContextProvider/GlobalContextProvider'
import { langText } from '../../lang'

const Taninos = () => {
    const { lang } = useContext(LangStateContext)

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
                    <img className='fit-none' src={taninosProductoImg} alt="Polvo" />
                    <div>
                        <p>VINUPEB P</p>
                        <div className='taninos-productos-carac'>
                            <p>{langText.tannins.products.powder.text[lang]}</p>
                            <ul>
                                <li>
                                    <p>{langText.tannins.products.powder.tannins[lang]}</p>
                                    <p>&gt; 65 %</p>
                                </li>
                                <li>
                                    <p>{langText.tannins.products.powder.ashes[lang]}</p>
                                    <p>&lt; 4 %</p>
                                </li>
                                <li>
                                    <p>{langText.tannins.products.powder.iron[lang]}</p>
                                    <p>&gt; 50 ppm</p>
                                </li>
                                <li>
                                    <p>{langText.tannins.products.powder.moisture[lang]}</p>
                                    <p>&lt; 7 %</p>
                                </li>
                                <li>
                                    <p>{langText.tannins.products.powder.packaging.title[lang]}</p>
                                    <ul>
                                        <li>{langText.tannins.products.powder.packaging.text[lang]}</li>
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
                <div className="taninos-productos-container">
                    <h4>{langText.tannins.products.title[lang]}</h4>
                    <div>
                        {renderProductosCardPolvo()}
                    </div>
                </div>
            </>
        )
    }


    return(
        <>
            <Navbar width='214px' />

            {renderTaninosHeader()}

            {renderProductos()}

            <TextCentered width='925px' margin='60px'>{langText.tannins.centered[lang]}</TextCentered>
            <Button style='red-button' width='270' goTo='/Contacto'>{langText.tannins.button[lang]}</Button>

            <EntornoNatural type='taninos' />
            <Footer />

        </>
    )
}
export default Taninos