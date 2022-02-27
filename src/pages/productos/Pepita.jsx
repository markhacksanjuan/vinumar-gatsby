import React from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import EntornoNatural from '../../components/entornoNatural/EntornoNatural'
import Button from '../../components/button/Button'

import '../../styles/pages/pepita.css'

import pepitaHeaderImg from '../../images/selected/388929796 (Aplicacion aceite).jpg'


const Pepita = () => {

    const renderPepitaHeader = () => {
        return(
            <>
                <div className='pepita-container-header'>
                    <div className='pepita-container-header-title'>
                        <h4>Pepita de uva</h4>
                        <p>También conocida como granilla de uva, la pepita de uva es un producto de gran valor alimenticio y nutritivo obtenido a partir del secado del orujo de la uva y su posterior separación. Nuestra pepita de uva está cuidadosamente seleccionada para minimizar las impurezas y, además, cuenta con un nivel de acidez, humedad y porcentaje de materia grasa óptimos.</p>
                    </div>
                    <div className='pepita-header-apli-carac-img-container'>
                        <div className='pepita-header-apli-carac-container'>
                            <div className='pepita-header-apli-container'>
                                <p className='pepita-header-apli-carac-title'>Aplicaciones</p>
                                <ul>
                                    <li>Aceite alimentario</li>
                                    <li>Cosmética</li>
                                    <li>Polifenoles</li>
                                </ul>
                                <p className='pepita-header-apli-definition'>El uso más común de la pepita de uva es el aceite de granilla, muy valorado por los consumidores por contener vitamina E y una alta concentración de ácido linoleico y ácidos grasos esenciales omega 6 y omega 3.</p>
                            </div>
                            <div className='pepita-header-carac-container'>
                                <p className='pepita-header-apli-carac-title'>Características</p>
                                <ul>
                                    <li className='pepita-header-carac-li'>
                                        <p>Nombre botánico</p>
                                        <p className='italic'>Vitis Vinífera</p>
                                    </li>
                                    <li className='pepita-header-carac-li'>
                                        <p>Etiquetado</p>
                                        <ul className='circle'>
                                            <li>Granilla de uva</li>
                                        </ul>
                                    </li>
                                    <li className='pepita-header-carac-li'>
                                        <p>Almacenaje</p>
                                        <ul className='no-style'>
                                            <li>Conservar a temperatura ambiente</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img className='pepita-header-img' src={pepitaHeaderImg} alt="Extracto de uva" />

                    </div>
                </div>
            </>
        )
    }


    return(
        <>
            <Navbar width='214px' />

            {renderPepitaHeader()}

            <Button style='red-button' width='270' goTo='/Contacto'>CONTACTA CON NOSOTROS</Button>

            <EntornoNatural type='pepita' />
            <Footer />

        </>
    )
}
export default Pepita