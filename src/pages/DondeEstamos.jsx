import React, { useContext } from 'react'
import Navbar from '../components/navbarIndex/NavbarIndex'
import Footer from '../components/footer/Footer'
import Situacion from '../components/situacion/Situacion'
import '../styles/pages/dondeEstamos.css'

import headerImg from '../images/DEF/DJI_0705-2.jpg'
import dondeImg from '../images/ilustraciones/Vinumar_Ilustraciones_Mapa_2.jpg'
import ventaja1 from '../images/ilustraciones/Vinumar_Ilustraciones_Cercania.jpg'
import ventaja2 from '../images/ilustraciones/Vinumar_Ilustraciones_Rapidez.jpg'
import ventaja3 from '../images/ilustraciones/Vinumar_Ilustraciones_Innovacion.jpg'

import TextCentered from '../components/textCentered/TextCentered'
import Button from '../components/button/Button'

import { LangStateContext } from '../components/GlobalContextProvider/GlobalContextProvider'
import { langText_where } from '../lang/lang_where'

const DondePage = () => {
    const { lang } = useContext(LangStateContext)
    const renderHeader = () => {
        return(
            <>
                <div className='donde-container-header'>
                    <img src={headerImg} alt="Donde estamos header" />
                    <div className='donde-container-header-h2'>
                        <h2>{langText_where.header[lang]}</h2>
                    </div>
                </div>
            </>
        )
    }

    const renderDonde = () => {
        return(
            <>
                <div className='donde-container-estamos'>
                    <div>
                        <h4>{langText_where.where.title[lang]}</h4>
                    </div>
                    <div className='donde-container-ubicacion'>
                        <div className='donde-container-ubicacion-text'>
                                <p>ctra. Munera, 5 02600 Villarrobledo Albacete, España</p>
                                <p>{langText_where.where.text_top[lang]}
                                    <span className='parrafo'>{langText_where.where.text_bottom[lang]}</span>
                                </p>
                        </div>
                        <img src={dondeImg} alt="Donde estamos" />
                    </div>
                </div>
            </>
        )
    }
    const renderVentajas = () => {
        return(
            <>
                <div className='donde-container-ventajas'>
                    <h4>{langText_where.advantages.title[lang]}</h4>
                    <div className='donde-container-ventaja-card'>
                        <div className='donde-ventaja-card'>
                            <p>{langText_where.advantages.proximity[lang]}</p>
                            <img src={ventaja1} alt="ventaja 1" />
                        </div>
                        <div className='donde-ventaja-card'>
                            <p>{langText_where.advantages.speed[lang]}</p>
                            <img src={ventaja2} alt="ventaja 2" />
                        </div>
                        <div className='donde-ventaja-card'>
                            <p>{langText_where.advantages.innovation[lang]}</p>
                            <img src={ventaja3} alt="ventaja 3" />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <Navbar width='214px' />
            <div className='donde-container'>
                {renderHeader()}
                <TextCentered>{langText_where.centered[lang]}</TextCentered>
                
                <Situacion />

                {renderDonde()}
                <Button style='red-button' goTo='/nosotros/Valores'>{langText_where.button[lang]}</Button>
                {renderVentajas()}
            </div>

            <Footer />
        </>
    )
}
export default DondePage