import React, { useEffect, useState } from 'react'
import EntornoNatural from '../entornoNatural/EntornoNatural'
import TextCentered from '../textCentered/TextCentered'
import Button from '../button/Button'
import Head from '../Head/Head'
import Layout from '../Layout/Layout'

import '../../styles/pages/alcoholes.css'
import '../../styles/pages/mediaQueries/producto-media.css'
import alcoholesHeaderImg from '../../images/DEF/BL8A4092.jpg'

import alcoholesProductoImg from '../../images/DEF/BL8A9307.jpg'

import { langText } from '../../lang'
import { useLang } from '../../hook/useLang'

const Alcoholes = ({
    location
}) => {
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

    const renderAlcoholesHeader = () => {
        return(
            <>
                <div className='alcoholes-container-header'>
                    <div className='alcoholes-container-header-title'>
                        <h4>{langText.alcohols.header.title[lang]}</h4>
                        <p>{langText.alcohols.header.text_1[lang]}
                        <span className="parrafo">
                        {langText.alcohols.header.text_2[lang]}
                        </span>
                        <span className="parrafo">
                        {langText.alcohols.header.text_3[lang]}
                        </span>
                        </p>
                    </div>
                    <div className='alcoholes-header-apli-carac-img-container'>
                        <div className='alcoholes-header-apli-carac-container'>
                            <div className='alcoholes-header-carac-container'>
                                <p className='alcoholes-header-apli-carac-title'>{langText.alcohols.header.applications.title[lang]}</p>
                                <div>
                                    <ul>
                                        <li>
                                            <p>{langText.alcohols.header.applications.energy.title[lang]}</p>
                                            <p>{langText.alcohols.header.applications.energy.name[lang]}</p>
                                        </li>
                                        <li>
                                            <p>{langText.alcohols.header.applications.chemical.title[lang]}</p>
                                            <ul>
                                                <li>{langText.alcohols.header.applications.chemical.clean[lang]}</li>
                                                <li>Perfumes</li>
                                                <li>{langText.alcohols.header.applications.chemical.desinfectant[lang]}</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p>{langText.alcohols.header.applications.pharmaceutical.title[lang]}</p>
                                            <ul>
                                                <li>{langText.alcohols.header.applications.pharmaceutical.gel[lang]}</li>
                                                <li>{langText.alcohols.header.applications.pharmaceutical.medical[lang]}</li>
                                            </ul>
                                        </li>
                                        {/* <li>
                                            <p>{langText.alcohols.header.applications.food.title[lang]}</p>
                                            <ul>
                                                <li>{langText.alcohols.header.applications.food.drinks[lang]}</li>
                                                <li>Mistelas</li>
                                                <li>{langText.alcohols.header.applications.food.vermouth[lang]}</li>
                                                <li>Brandy</li>
                                                <li>{langText.alcohols.header.applications.food.oporto[lang]}</li>
                                                <li>{langText.alcohols.header.applications.food.jerez[lang]}</li>
                                            </ul>
                                        </li> */}
                                    </ul>
                                        <p>
                                            {langText.alcohols.header.applications.text[lang]}
                                            <span className='block'>{langText.alcohols.header.applications.span[lang]}</span>
                                        </p>
                                </div>
                            </div>
                        </div>
                        {/* <Suspense fallback={<Loading />}> */}
                            <img className='alcoholes-header-img' src={alcoholesHeaderImg} alt="Extracto de uva" />
                        {/* </Suspense> */}

                    </div>
                </div>
            </>
        )
    }

    const renderProductos = () => {
        return(
            <>
                <div className="alcoholes-productos-container">
                    <h4>{langText.alcohols.products.title[lang]}</h4>
                    <div>
                        <ul>
                            <li>
                                <p>{langText.alcohols.products.raw.title[lang]}</p>
                                <p>{langText.alcohols.products.raw.text[lang]}</p>
                            </li>
                            <li>
                                <p>{langText.alcohols.products.rectified.title[lang]}</p>
                                <p>{langText.alcohols.products.rectified.text[lang]}</p>
                            </li>
                            <li>
                                <p>{langText.alcohols.products.denatured.title[lang]}</p>
                                <p>{langText.alcohols.products.denatured.text[lang]}</p>
                            </li>
                            {/* <li>
                                <p>{langText.alcohols.products.distillate.title[lang]}</p>
                                <p>{langText.alcohols.products.distillate.text[lang]}</p>
                            </li>
                            <li>
                                <p>{langText.alcohols.products.spirit.title[lang]}</p>
                                <p>{langText.alcohols.products.spirit.text[lang]}</p>
                            </li> */}
                        </ul>
                        <img src={alcoholesProductoImg} alt="Alcoholes" />
                    </div>
                </div>
            </>
        )
    }

    const key_alcohol_esp = 'alcohol bruto, alcohol rectificado, alcohol desnaturalizado, destilado de vino, aguardiente'
    const key_alcohol_eng = 'raw alcohol, rectified alcohol, denatured alcohol, wine distillate, wine spirit'
    const key_alcohol = key_alcohol_esp + ', ' + key_alcohol_eng

    return(
        <>
        <Head pageTitle={langText.head.alcohols[lang]} keywordsPage={key_alcohol} description='Alcohol bruto, rectificado, desnaturalizado, aguardiente, destilado del vino - Raw alcohol'/>
            <Layout pageLocation={location}>
                {renderAlcoholesHeader()}

                {renderProductos()}

                <TextCentered width='925px' margin='60px'>{langText.alcohols.centered[lang]}</TextCentered>
                <Button style='red-button' width='270' goTo={lang === 'es' ? '/contacto' : '/en/contact-us'}>{langText.alcohols.button[lang]}</Button>

                    <EntornoNatural type='alcohol' width={screenWidth} />

                <Button style='red-button' width='270' goTo={lang === 'es' ? '/sobre-nosotros/valores' : '/en/about-us/values'}>{langText.where.button[lang]}</Button>

            </Layout>

        </>
    )
}
export default Alcoholes