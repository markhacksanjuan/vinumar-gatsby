import React from 'react'
import Navbar from '../components/navbarIndex/NavbarIndex'
import Footer from '../components/footer/Footer'
import '../styles/pages/sostenibilidad.css'

import headerImg from '../images/selected/Principal DJI_0788.jpg'
import sostenibilidad1 from '../images/selected/Sostenibilidad 2-611057066.jpg'
import sostenibilidad2 from '../images/selected/Sostenibilidad 3-1941562780.jpg'

import Button from '../components/button/Button'

const SostenibilidadPage = () => {
    const renderHeader = () => {
        return(
            <>
                <div className="sostenibilidad-container-header">
                    <img src={headerImg} alt="Sostenibilidad header" />
                    <p>La sostenibilidad, mucho antes de la sostenibilidad.</p>
                </div>
            </>
        )
    }
    const renderSostenibilidad = () => {
        return(
            <>
                <div className='sostenibilidad-container-main'>
                    <h4>Sostenibilidad</h4>
                    <div>
                        <p>Mucho, mucho antes de que aparecieran conceptos como “sostenibilidad” o “economía circular”, Vinumar llevaba toda su vida practicándolos. Porque ¿qué es la valorización de los subproductos vinícolas sino el mejor ejemplo de la puesta en práctica de los valores de la sostenibilidad y la economía circular? Desde el primer día, en Vinumar hemos apostado por una política proactiva para la protección del medio y la reducción del impacto ambiental. Nuestra actividad económica está indisociablemente enfocada hacia la máxima eficiencia y la disminución de residuos, favoreciendo el reciclaje y la reutilización. Somos Destilador Autorizado por la UE como garantes de la calidad del vino y preservadores del medio ambiente. Contribuimos a la reducción del impacto ambiental gracias al tratamiento del orujo de uva, verificado con la ISCC (International Sustainability & Carbon Certification). Utilizamos la energía de la biomasa de los subproductos de la uva, para nuestros procesos productivos con un balance neutro en CO2. Tenemos el reconocimiento de la garantía de calidad ISO9001, que también reafirma nuestro compromiso con los valores y objetivos de responsabilidad social y desarrollo sostenible. Invertimos en actualizar e innovar en tecnología, como hemos hecho en la modificación de procesos, sistemas de depuración y tratamiento del agua para su mayor reutilización, protegiendo los recursos hídricos. Además, bajo la premisa de devolver al campo lo que es del campo, llevamos a cabo valoraciones agrícolas de nuestros efluentes mediante acuerdos colaborativos con los agricultores de Castilla-La Mancha sobre mejoras en el aprovechamiento del agua y los nutrientes para sus cultivos.</p>
                        <img src={sostenibilidad1} alt="sostenibilidad 1" />
                    </div>
                    <div>
                        <img src={sostenibilidad2} alt="sostenibilidad 2" />
                        <p className='sostenibilidad-main-title'>Eslabones de una cadena global</p>
                        <p>Custodiar el medio, el paisaje y las personas que nos permiten realizar nuestras actividades económicas es el legado que hemos heredado y que queremos transmitir, como queda patente en nuestra apuesta por la sostenibilidad y el fomento de la economía circular.</p>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>
            <Navbar width='214px' />
            <div className='sostenibilidad-container'>
                {renderHeader()}
                {renderSostenibilidad()}
                <Button goTo='/Contacto' style='red-button'>CONTACTA CON NOSOTROS</Button>
            </div>
            <Footer/>
        </>
    )
}
export default SostenibilidadPage