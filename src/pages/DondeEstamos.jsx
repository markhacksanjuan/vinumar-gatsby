import React from 'react'
import Navbar from '../components/navbarIndex/NavbarIndex'
import Footer from '../components/footer/Footer'
import Situacion from '../components/situacion/Situacion'
import '../styles/pages/dondeEstamos.css'

import headerImg from '../images/selected/DJI_0697-2 (principal).jpg'
import dondeImg from '../images/ilustraciones/Vinumar_Ilustraciones_Mapa_2.jpg'
import ventaja1 from '../images/ilustraciones/Vinumar_Ilustraciones_Cercania.jpg'
import ventaja2 from '../images/ilustraciones/Vinumar_Ilustraciones_Rapidez.jpg'
import ventaja3 from '../images/ilustraciones/Vinumar_Ilustraciones_Innovacion.jpg'

import TextCentered from '../components/textCentered/TextCentered'
import Button from '../components/button/Button'

const DondePage = () => {

    const renderHeader = () => {
        return(
            <>
                <div className='donde-container-header'>
                    <img src={headerImg} alt="Donde estamos header" />
                    <div className='donde-container-header-h2'>
                        <h2>En el corazón de Castilla-La Mancha.</h2>
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
                        <h4>Dónde estamos</h4>
                    </div>
                    <div className='donde-container-ubicacion'>
                        <div className='donde-container-ubicacion-text'>
                                <p>ctra. Munera, 5 02600 Villarrobledo Albacete, España</p>
                                <p>Nos ubicamos en una localización estratégica: Castilla-La Mancha, una de las mayores regiones productoras de uva de alta calidad a escala mundial. Esta cercanía a la materia prima nos garantiza abundancia de suministro y una gran capacidad de producción, para responder a las demandas de nuestros clientes con la máxima rapidez.<span className='parrafo'>Además, contamos con una red logística de largo alcance por autovía, ferrocarril, transporte aéreo y marítimo, que nos permite llegar allí donde sea preciso. Desde donde estamos todo son ventajas.</span></p>
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
                    <h4>Ventajas</h4>
                    <div className='donde-container-ventaja-card'>
                        <div className='donde-ventaja-card'>
                            <p>Cercanía</p>
                            <img src={ventaja1} alt="ventaja 1" />
                        </div>
                        <div className='donde-ventaja-card'>
                            <p>Rapidez</p>
                            <img src={ventaja2} alt="ventaja 2" />
                        </div>
                        <div className='donde-ventaja-card'>
                            <p>Innovación</p>
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
                <TextCentered>La tierra donde se extrae con sabiduría todo el potencial de una uva excelente.</TextCentered>
                
                <Situacion />

                {renderDonde()}
                <Button style='red-button' goTo='/nosotros/Valores'>SABER MÁS SOBRE VINUMAR</Button>
                {renderVentajas()}
            </div>

            <Footer />
        </>
    )
}
export default DondePage