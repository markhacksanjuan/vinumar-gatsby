import React, { useContext, useEffect, useState } from 'react'
import TextCentered from '../textCentered/TextCentered'
import Button from '../button/Button'
import EntornoNatural from '../entornoNatural/EntornoNatural'
import Head from '../Head/Head'
import Layout from '../Layout/Layout'

// import images
import nutriProducto from '../../images/DEF/productos/nutri/BL8A3587_MEDIA.jpg'
import nutriApliImg from '../../images/DEF/productos/nutri/ben-moreland-8wWpDF4Av-Y-unsplash.jpg'

import { langText } from '../../lang'
import { useLang } from '../../hook/useLang'

import '../../styles/pages/extractos-semillas.css'
import '../../styles/pages/mediaQueries/producto-media.css'

const ExtractosNutricionAnimal = ({ location }) => {
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

    const renderExtractosHeader = () => {
        return(
            <>
                <div className='piel-container-header'>
                    <div className='piel-container-header-title'>
                        <h4>{langText.nutriAnimals.header.title[lang]}</h4>
                        <p>{langText.nutriAnimals.header.text_1[lang]}<span className='parrafo'>{langText.nutriAnimals.header.text_2[lang]}</span></p>
                    </div>
                    <div className='piel-header-apli-carac-img-container'>
                        <div className='piel-header-apli-carac-container'>
                            <div className='piel-header-apli-container'>
                                <p className='piel-header-apli-carac-title'>{langText.nutriAnimals.header.application.title[lang]}</p>
                                <ul>
                                    <li>{langText.nutriAnimals.header.application.li_1[lang]}</li>
                                </ul>
                                <div className='piel-header-apli-definition'>
                                    <p>{langText.nutriAnimals.header.application.text[lang]}{/*<span className='parrafo'>{langText.semillas.header.application.text_2[lang]}</span>*/}</p>
                                    {/* <ul>
                                        <li><span className='li-span'>{langText.semillas.header.application.app_text_li_1[lang]}</span></li>
                                        <li><span className='li-span'>{langText.semillas.header.application.app_text_li_2[lang]}</span></li>
                                    </ul> */}
                                </div>
                            </div>
                            <div className='piel-header-carac-container'>
                                <p className='piel-header-apli-carac-title'>{langText.nutriAnimals.header.characteristics.title[lang]}</p>
                                <ul>
                                    <li className='piel-header-carac-li'>
                                        <p>{langText.nutriAnimals.header.characteristics.botanic.title[lang]}</p>
                                        <p className='italic'>{langText.nutriAnimals.header.characteristics.botanic.name[lang]}</p>
                                    </li>
                                    <li className='piel-header-carac-li padding-top-10'>
                                        <p>{langText.nutriAnimals.header.characteristics.labelling.title[lang]}</p>
                                        <ul>
                                            <li>{langText.nutriAnimals.header.characteristics.labelling.extract[lang]}</li>
                                            <li>{langText.nutriAnimals.header.characteristics.labelling.atom[lang]}</li>
                                            {/* <li>E-163</li> */}
                                        </ul>
                                    </li>
                                    <li className='piel-header-carac-li padding-top-10'>
                                        <p>{langText.nutriAnimals.header.characteristics.solubility.title[lang]}</p>
                                        <p>{langText.nutriAnimals.header.characteristics.solubility.text[lang]}</p>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <img className='semilla-header-img' src={nutriApliImg} alt="Extracto de piel"/>

                    </div>
                </div>
            </>
        )
    }
    
    const renderProductosCardPolvo = () => {
        return(
            <>
                <div>
                    <p>{langText.nutriAnimals.products.powder.title[lang]}</p>
                    <img className='fit-cover' src={nutriProducto} alt="Polvo" />
                    <div>
                        <p>VINUFEED 40RP</p>
                        <div className='producto-div'>
                            <p>{langText.nutriAnimals.products.powder.rp.text[lang]}</p>
                            <ul>
                                <li>
                                    <p>{langText.nutriAnimals.products.powder.rp.caract.polyphenols[lang]}</p>
                                    <p>&ge; 40 %</p>
                                </li>
                                <li>
                                    <p>{langText.nutriAnimals.products.powder.rp.caract.anthocyanins[lang]}</p>
                                    <p className='piel-productos-color'>&gt; 0,2 %</p>
                                </li>
                                <li>
                                    <p>{langText.nutriAnimals.products.powder.rp.caract.moisture[lang]}</p>
                                    <p>&le; 7 %</p>
                                </li>
                                <li>
                                    <p>{langText.nutriAnimals.products.powder.rp.caract.pack.title[lang]}</p>
                                    <ul>
                                        <li>{langText.nutriAnimals.products.powder.rp.caract.pack.text[lang]}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <img style={{ objectFit: 'none', objectPosition: 'center' }} className='fit-cover' src={nutriProducto} alt="Polvo" />
                    <div>
                        <p>VINUFEED 80RPF</p>
                        <div className='producto-div'>
                            <p>{langText.nutriAnimals.products.powder.rpf.text[lang]}</p>
                            <ul>
                                <li>
                                    <p>{langText.nutriAnimals.products.powder.rpf.caract.polyphenols[lang]}</p>
                                    <p>&ge; 80 %</p>
                                </li>
                                <li>
                                    <p>{langText.nutriAnimals.products.powder.rpf.caract.anthocyanins[lang]}</p>
                                    <p className='piel-productos-color'>&gt; 0,75 %</p>
                                </li>
                                <li>
                                <p>{langText.nutriAnimals.products.powder.rpf.caract.proanthocyanidins[lang]}</p>
                                    <p className='piel-productos-color'>&gt; 60 %</p>
                                </li>
                                <li>
                                    <p>{langText.nutriAnimals.products.powder.rpf.caract.moisture[lang]}</p>
                                    <p>&le; 7 %</p>
                                </li>
                                <li>
                                    <p>{langText.nutriAnimals.products.powder.rpf.caract.pack.title[lang]}</p>
                                    <ul>
                                        <li>{langText.nutriAnimals.products.powder.rpf.caract.pack.text[lang]}</li>
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
                    <h4>{langText.nutriAnimals.products.title[lang]}</h4>
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

                <TextCentered width='925px' margin='60px'>{langText.nutriAnimals.centered[lang]}</TextCentered>

                <Button style='red-button' width='270' goTo={lang === 'es' ? '/contacto' : '/en/contact-us'}>{langText.semillas.button[lang]}</Button>
                
                    <EntornoNatural type='piel' width={screenWidth} />

                <Button style='red-button' width='270' goTo={lang === 'es' ? '/sobre-nosotros/valores' : '/en/about-us/values'}>{langText.where.button[lang]}</Button>
            </Layout>
        </>
    )
}
export default ExtractosNutricionAnimal