import React, { useContext, useEffect } from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import EntornoNatural from '../../components/entornoNatural/EntornoNatural'
import TextCentered from '../../components/textCentered/TextCentered'
import Button from '../../components/button/Button'

import '../../styles/pages/alcoholes.css'
import '../../styles/pages/mediaQueries/producto-media.css'
import alcoholesHeaderImg from '../../images/DEF/BL8A4092.jpg'

import alcoholesProductoImg from '../../images/DEF/BL8A9307.jpg'

import { LangStateContext, LangDispatchContext } from '../../components/GlobalContextProvider/GlobalContextProvider'
import { langText } from '../../lang'
import { historyState } from '../../helpers/historyState'


const Alcoholes = (props) => {
    const { lang } = useContext(LangStateContext)
    const dispatch = useContext(LangDispatchContext)

    useEffect(() =>{
        // historyState(window.location.state, dispatch)
    }, [])
    useEffect(() => {
        if(typeof window !== 'undefined'){
            if(lang === 'en'){
                window.history.pushState({}, '', '/product/alcohol')
            }else {
                window.history.pushState({}, '', props.uri)
            }
        }
    }, [lang])


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
                                        <li>
                                            <p>{langText.alcohols.header.applications.food.title[lang]}</p>
                                            <ul>
                                                <li>{langText.alcohols.header.applications.food.drinks[lang]}</li>
                                                <li>Mistelas</li>
                                                <li>{langText.alcohols.header.applications.food.vermouth[lang]}</li>
                                                <li>Brandy</li>
                                                <li>{langText.alcohols.header.applications.food.oporto[lang]}</li>
                                                <li>{langText.alcohols.header.applications.food.jerez[lang]}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                        <p>
                                        {langText.alcohols.header.applications.text[lang]}
                                        </p>
                                </div>
                            </div>
                        </div>
                        <img className='alcoholes-header-img' src={alcoholesHeaderImg} alt="Extracto de uva" />

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
                            <li>
                                <p>{langText.alcohols.products.distillate.title[lang]}</p>
                                <p>{langText.alcohols.products.distillate.text[lang]}</p>
                            </li>
                            <li>
                                <p>{langText.alcohols.products.spirit.title[lang]}</p>
                                <p>{langText.alcohols.products.spirit.text[lang]}</p>
                            </li>
                        </ul>
                        <img src={alcoholesProductoImg} alt="Alcoholes" />
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <Navbar width='214px' />

            {renderAlcoholesHeader()}

            {renderProductos()}

            <TextCentered width='925px' margin='60px'>{langText.alcohols.centered[lang]}</TextCentered>
            <Button style='red-button' width='270' goTo='/contacto'>{langText.alcohols.button[lang]}</Button>

            <EntornoNatural type='alcohol' />
            <Footer />

        </>
    )
}
export default Alcoholes