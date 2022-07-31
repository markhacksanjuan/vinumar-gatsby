import React, { useContext } from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import '../../styles/pages/valores.css'
import TextCentered from '../../components/textCentered/TextCentered'
import Button from '../../components/button/Button'

import headerImg from '../../images/selected/Principal DSC00902.jpg'
import valores1 from '../../images/ilustraciones/Vinumar_Ilustraciones_Tecnologia.jpg'
import valores2 from '../../images/ilustraciones/Vinumar_Ilustraciones_Reactividad.jpg'
import valores3 from '../../images/ilustraciones/Vinumar_Ilustraciones_Confianza.jpg'
import valores4 from '../../images/ilustraciones/Vinumar_Ilustraciones_Experiencia.jpg'
import valores5 from '../../images/ilustraciones/Vinumar_Ilustraciones_Sostenibilidad.jpg'

import { LangStateContext } from '../../components/GlobalContextProvider/GlobalContextProvider'
import { langText_values } from '../../lang/lang_values'

const Valores = () => {
    const { lang } = useContext(LangStateContext)
    const renderHeader = () => {
        return(
            <>
                <div className="valores-container-header">
                    <img src={headerImg} alt="Valores" />
                    <p>{langText_values.header[lang]}</p>
                </div>
            </>
        )
    }
    const renderContent = () => {
        return(
            <>
                <div className="valores-content-container">
                    <h4>{langText_values.values.title[lang]}</h4>
                    <div>
                        <div>
                            <p className='valores-content-title'>{langText_values.values.tech.title[lang]}</p>
                            <img src={valores1} alt="Valores" />
                            <p className='valores-content-description'>{langText_values.values.tech.text_1[lang]}
                            <br/>
                            <br/>
                            {langText_values.values.tech.text_2[lang]}</p>
                        </div>
                        <div>
                            <div className='valores-content-card'>
                                <div>
                                    <p className='valores-content-title'>{langText_values.values.reactivity.title[lang]}</p>
                                    <img src={valores2} alt="Valores" />
                                </div>
                                <p>{langText_values.values.reactivity.text_1[lang]}
                                    <br/>
                                    <br/>
                                    {langText_values.values.reactivity.text_2[lang]}</p>
                            </div>
                            <div className='valores-content-card'>
                                <div>
                                    <p className='valores-content-title'>{langText_values.values.confidence.title[lang]}</p>
                                    <img src={valores3} alt="Valores" />
                                </div>
                                <p>{langText_values.values.confidence.text[lang]}</p>
                            </div>
                            <div className='valores-content-card'>
                                <div>
                                    <p className='valores-content-title'>{langText_values.values.experience.title[lang]}</p>
                                    <img src={valores4} alt="Valores" />
                                </div>
                                <p>{langText_values.values.experience.text[lang]}</p>
                            </div>
                            <div className='valores-content-card'>
                                <div>
                                    <p className='valores-content-title'>{langText_values.values.sustainability.title[lang]}</p>
                                    <img src={valores5} alt="Valores" />
                                </div>
                                <p>{langText_values.values.sustainability.text[lang]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>
            <Navbar width='214px' />
            {renderHeader()}
            <TextCentered>{langText_values.centered[lang]}</TextCentered>
            {renderContent()}
            <Button style='red-button' width='270px' goTo='/Contacto'>{langText_values.button[lang]}</Button>
            <Footer />

        </>
    )
}
export default Valores