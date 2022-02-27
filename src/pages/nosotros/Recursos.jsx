import React from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import Button from '../../components/button/Button'

import '../../styles/pages/recursos.css'

import recursos1 from '../../images/selected/Recursos Tecnicos (DSC00668 ).jpg'
import atomizacion from '../../images/selected/Sistema de atomizacion (DSC06679 V2).jpg'

import SimpleImageSlider from 'react-simple-image-slider'

import img1 from '../../images/selected/Nuestroequipo1.jpg'
import img2 from '../../images/selected/Nuestroequipo2DSC00893.jpg'
import img3 from '../../images/selected/Nuestroequipo3Detalle2.jpg'
import img4 from '../../images/selected/Nuestroequipo4DSC06860.jpg'
import img5 from '../../images/selected/Nuestroequipo5DSC06804.jpg'
import img6 from '../../images/selected/NuestroEquipo6DSC1.jpg'

import imgInst1 from '../../images/selected/Asitrabajamos-1-DSC06777.jpg'
import imgInst2 from '../../images/selected/Astrabajamos-2-DSC00599.jpg'
import imgInst3 from '../../images/selected/Asitrabajamos-3-DSC06823.jpg'
import imgInst4 from '../../images/selected/Asitrabajamos-4-DSC00886.jpg'

const Recursos = () => {
    const images = [
        { url: img1 },
        { url: img2 },
        { url: img3 },
        { url: img4 },
        { url: img5 },
        { url: img6 }
    ]
    const imagesInst = [
        { url: imgInst1 },
        { url: imgInst2 },
        { url: imgInst3 },
        { url: imgInst4 }
    ]
    const renderRecursos = () => {
        return(
            <>
                <div className="recursos-recursos-container">
                    <div>
                        <h4>Recursos técnicos y humanos</h4>
                        <p>Uno de los factores de la calidad de nuestros productos corresponde a la selección de la materia prima. Para obtener de ella los mejores resultados se necesita además, disponer de las instalaciones, la tecnología y el equipo humano adecuado. Llevamos más de seis décadas actualizando y mejorando todos nuestros procesos, lo que nos permite una gran capacidad tanto en producción como en especificaciones, para satisfacer las necesidades de nuestros clientes de una manera rápida y eficaz.</p>
                    </div>
                    <div className='recursos-recursos-tecnicos'>
                        <p>Recursos técnicos</p>
                        <div>
                            <p>Nuestra capacidad de producción está preparada para responder antep picos de demanda con agilidad y una alta capacidad de reacción. Para ello contamos con:</p>
                            <ul className='circle'>
                                <li>140.000 m2 de suelo industrial</li>
                                <li>15.000 m2 de naves de proceso</li>
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
                    {images && <SimpleImageSlider
                        images={images}
                        width='72.82%'
                        height={600}
                        showNavs={true}
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
                    {imagesInst && <SimpleImageSlider
                        images={imagesInst}
                        width='72.82%'
                        height={600}
                        showNavs={true}
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