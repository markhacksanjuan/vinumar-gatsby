import React from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import '../../styles/pages/historia.css'
import SimpleImageSlider from 'react-simple-image-slider'

import headerImg from '../../images/img/DJI_0559.jpg'

import img1 from '../../images/img/Nuestro_Equipo_Carrusel_1.jpg'
import img2 from '../../images/img/Nuestro_Equipo_Carrusel_2.jpg'
import img3 from '../../images/img/Nuestro_Equipo_Carrusel_3.jpg'
import img4 from '../../images/img/Nuestro_Equipo_Carrusel_4.jpg'

import imgInst1 from '../../images/img/Historia_Carrusel_1_1.jpg'
import imgInst2 from '../../images/img/Historia_Carrusel_1_3.jpg'
import imgInst3 from '../../images/img/Historia_Carrusel_1_2.jpg'


const Historia = () => {
    const images = [
        { url: img1 },
        { url: img2 },
        { url: img3 },
        { url: img4 }
    ]
    const imagesHist = [
        { url: imgInst1 },
        { url: imgInst2 },
        { url: imgInst3 }
    ]


    const renderHeader = () => {
        return(
            <>
                <div className="historia-container-header">
                    <img src={headerImg} alt="historia" />
                </div>
            </>
        )
    }
    const renderVinumar = () => {
        return(
            <>
                <div className="historia-vinumar-container">
                    <div>
                        <h4>Vinumar viene de lejos</h4>
                        <p>Nuestros orígenes se remontan a 1855, concretamente a una familia de Mora la Nova en Cataluña, de larga tradición en la destilación de alcoholes. Un siglo más tarde, en 1955, la familia decidió establecerse en Castilla-La Mancha atraída por sus grandes extensiones de viñedos, constituyendo el embrión de la actual empresa. Hoy, somos una empresa familiar de tercera generación que ha evolucionado al ritmo de los distintos momentos de la historia para consolidarse con el reciclaje, tratamiento, valorización y comercialización de los productos derivados de la viticultura, ofreciendo servicio a múltiples industrias.</p>
                    </div>
                    <SimpleImageSlider 
                        images={images}
                        width='80%'
                        height={600}
                        showNavs={true}
                    />
                </div>
            </>
        )
    }

    const renderCronologia = () => {
        return(
            <>
                <div className="historia-crono-container">
                    <div>
                        <h4>Cronología</h4>
                    </div>
                    <div>
                        <div>
                            <div style={{ height: '130px' }}>
                                <p>La primera generación se asienta definitivamente en Castilla-La Mancha, iniciando su arraigo a la Tierra del vino, que se consolidará en 1957 con la compra de una fábrica de alcohol en Villarrobledo.</p>
                                <p>1955</p>
                            </div>
                            <div style={{ height: '130px' }}>
                                <p>Década de gran expansión con sucesivas ampliaciones y modernizaciones de las secciones de concentrados, almacenamiento y granilla de uva, así como de la bodega de vinos.</p>
                                <p style={{ width: '28%'}}>1970-79</p>
                            </div>
                            <div style={{ height: '115px' }}>
                                <p>Inauguración de la nueva planta de extracción y producción de materia colorante, hecho histórico que marcará el futuro de la empresa y su reinvención hacia los productos derivados de la uva.</p>
                                <p>1993</p>
                            </div>
                            <div style={{ height: '130px' }}> 
                                <p>Ampliación de las instalaciones de secado de orujo de uva y puesta en marcha de una nueva EDAR.</p>
                                <p>2005</p>
                            </div>
                            <div>
                                <p>Inicio de nuevos procesos de aplicación de I+D+i para la obtención de distintos productos derivados de la uva.</p>
                                <p>2018</p>
                            </div>
                            <div>
                                <p>Adquisición de la nueva planta de purificacón de la materia colorante.</p>
                                <p>2020</p>
                            </div>
                            <div style={{ borderRight: 'none' }}>
                                <p>Nueva planta de ultra-refinado de extractos de la uva que actúa a nivel molecular, aportando un mayor valor añadido.</p>
                                <p>2021</p>
                            </div>
                        </div>
                        <div>
                            <div style={{ height: '150px' }}>
                                <p>1965</p>
                                <p>Construcción de la nueva destilería en la fábrica de Villarrobledo.</p>
                            </div>
                            <div style={{ height: '65px' }}>
                                <p>1989</p>
                                <p>Primeros ensayos en investigación sobre la extracción de colorantes a partir de la piel de uva.</p>
                            </div>
                            <div style={{ height: '150px' }}>
                                <p>1994</p>
                                <p>Implantación de la primera Estación depuradora de aguas residuales (EDAR).</p>
                            </div>
                            <div style={{ height: '90px' }}>
                                <p>2013</p>
                                <p>Implantación del Sistema de valorización agrícola de los efluentes, favoreciendo la economía circular y la sostenibilidad.</p>
                            </div>
                            <div style={{ height: '60px' }}>
                                <p>2019</p>
                                <p>Ampliación de la planta de extracción de materia colorante, hasta decuplicar (x10) su capacidad.</p>
                            </div>
                            <div>
                                <p>2020</p>
                                <p>Construcción de la nueva Torre de atomización de alta capacidad.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }

    const renderHistoria = () => {
        return(
            <>
                <div className="historia-historia-container">
                    <div>
                        <h4>Una historia de crecimiento</h4>
                        <p>El recorrido de Vinumar es la histora de una empresa familiar que ha conseguido pasar de ser una empresa local a una compañía de alcance internacional con tesón, valentía y visión. La base de nuestro crecimiento es el respeto por el producto, el conocimiento tecnológico y de gestión de los recursos y, fundamentalmente, haber situado siempre en el centro a nuestros clientes.</p>
                    </div>
                    <SimpleImageSlider 
                        images={imagesHist}
                        width='80%'
                        height={600}
                        showNavs={true}
                    />
                </div>
            </>
        )
    }
    return(
        <>
            <Navbar width='214px' />
            {renderHeader()}
            {renderVinumar()}
            {renderCronologia()}
            {renderHistoria()}
            <Footer />

        </>
    )
}
export default Historia