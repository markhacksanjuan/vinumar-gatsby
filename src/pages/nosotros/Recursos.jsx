import React from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import Button from '../../components/button/Button'

import '../../styles/pages/recursos.css'

import recursos1 from '../../images/DEF/BL8A7254.jpg'
import atomizacion from '../../images/DEF/BL8A8625.jpg'

import SimpleImageSlider from 'react-simple-image-slider'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

import img1 from '../../images/DEF/BL8A8997.jpg'
import img2 from '../../images/DEF/BL8A8603.jpg'
import img3 from '../../images/DEF/BL8A8820.jpg'
// import img4 from '../../images/selected/Nuestroequipo4DSC06860.jpg'
// import img5 from '../../images/selected/Nuestroequipo5DSC06804.jpg'
// import img6 from '../../images/selected/NuestroEquipo6DSC1.jpg'

import imgInst1 from '../../images/DEF/BL8A8167.jpg'
import imgInst2 from '../../images/DEF/BL8A8569.jpg'
import imgInst3 from '../../images/DEF/BL8A7860.jpg'
import imgInst4 from '../../images/DEF/BL8A8586.jpg'

const Recursos = () => {
    const images = [
        { 
            original: img1, 
            originalHeight: 600,
            originalClass: 'slideClass',
        },
        { 
            original: img2,
            originalHeight: 600,
            originalClass: 'slideClass',
         },
        { 
            original: img3,
            originalHeight: 600,
            originalClass: 'slideClass',
         }
    ]
    const imagesInst = [
        { 
            original: imgInst1, 
            originalHeight: 600,
            originalClass: 'slideClass',
        },
        { 
            original: imgInst2,
            originalHeight: 600,
            originalClass: 'slideClass',
         },
        { 
            original: imgInst3,
            originalHeight: 600,
            originalClass: 'slideClass',
         },
         { 
             original: imgInst4,
             originalHeight: 600,
             originalClass: 'slideClass',
          }
    ]
    const renderRecursos = () => {
        return(
            <>
                <div className="recursos-recursos-container">
                    <div>
                        <h4>Recursos técnicos y humanos</h4>
                        <p>Uno de los factores de la calidad de nuestros productos corresponde a la selección de la materia prima. Para obtener de ella los mejores resultados se necesita además, disponer de las instalaciones, la tecnología y el equipo humano adecuado.
                            <br/>
                            <br/>
                            Llevamos más de seis décadas actualizando y mejorando todos nuestros procesos, lo que nos permite una gran capacidad tanto en producción como en especificaciones, para satisfacer las necesidades de nuestros clientes de una manera rápida y eficaz.</p>
                    </div>
                    <div className='recursos-recursos-tecnicos'>
                        <p>Recursos técnicos</p>
                        <div>
                            <p>Nuestra capacidad de producción está preparada para responder ante picos de demanda con agilidad y una alta capacidad de reacción. Para ello contamos con:</p>
                            <ul className='circle'>
                                <li>140.000 m<sup>2</sup> de suelo industrial</li>
                                <li>15.000 m<sup>2</sup> de naves de proceso</li>
                                <li>1.000.000 Hl de almacenamiento</li>
                                <li>Líneas de extracción en frío</li>
                                <li>Concentradores al vacío múltiple efecto</li>
                                <li>Sistemas de pasteurización y de atomización</li>
                                <li>Control de temperatura</li>
                                <li>Línea de envasado al vacío</li>
                                <li>X-Ray</li>
                                <li>Laboratorio propio de control de calidad</li>
                                <li>Almacén de productos terminados semiautomatizado</li>
                            </ul>
                        </div>
                        <img src={recursos1} alt="Recursos 1" />
                    </div>
                    <div className='recursos-recursos-automatizacion'>
                        <p>Sistema de atomización</p>
                        <p>El proceso de atomización destaca, entre otras características, por su capacidad de obtener el producto con distintas granulometrías. El hecho de disponer de un sistema de atomización propio, supone un punto de inflexión en lo que respecta tanto a nuestro nivel de producción como a la fluidez y eficiencia de gestión y suministro.</p>
                        <img src={atomizacion} alt="Recursos 2" />
                    </div>
                </div>
            </>
        )
    }
    const renderEquipo = () => {
        return(
            <>
                <div className="recursos-equipo-container">
                    <div>
                        <h4>Nuestro equipo</h4>
                        <p>Sólo se alcanza el éxito a través del trabajo en equipo. Nunca hubiéramos alcanzado el nivel que actualmente tenemos sin el esfuerzo compartido de los más de cien profesionales de la empresa, personas que participan en cada fase de la cadena de producción, desde la Recepción al Departamento de Calidad, el Laboratorio o el Equipo de Ventas y sus ramas Nacional y Exportación. Entre todos, hemos sabido extraer del fruto de esta tierra toda su riqueza para labrar con él un presente y un futuro fértiles.</p>
                    </div>
                    {/* {images && <SimpleImageSlider
                        images={images}
                        width='72.82%'
                        height={600}
                        showNavs={true}
                        showBullets={true}
                        // autoPlay={true}
                        // autoPlayDelay={4}
                        style={{
                            backgroundColor: 'rgb(255,255,255)',
                            backgroundPosition: 'center'
                        }}
                    />} */}
                    {images && <ImageGallery
                        items={images}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showBullets={true}
                        autoPlay={true}
                    />}
                </div>
            </>
        )
    }
    const renderInstalaciones = () => {
        return(
            <>
                <div className="recursos-instalaciones-container">
                    <div>
                        <h4>Así trabajamos</h4>
                        <p>Esta selección de imágenes ayuda a comprender cómo fabricamos nuestros productos.</p>
                    </div>
                    {/* {imagesInst && <SimpleImageSlider
                        images={imagesInst}
                        width='72.82%'
                        height={600}
                        showNavs={true}
                        showBullets={true}
                        autoPlay={true}
                        autoPlayDelay={4}
                    />} */}
                    {imagesInst && <ImageGallery
                        items={imagesInst}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showBullets={true}
                        autoPlay={true}
                    />}
                </div>
            </>
        )
    }
    return(
        <>
            <Navbar width='214px' />
            {renderRecursos()}
            {renderEquipo()}
            {renderInstalaciones()}
            <Button style='red-button' goTo='/Contacto'  >CONTACTA CON NOSOTROS</Button>
            <Footer />
        </>
    )
}
export default Recursos