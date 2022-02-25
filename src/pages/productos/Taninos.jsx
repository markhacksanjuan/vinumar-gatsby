import React from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import EntornoNatural from '../../components/entornoNatural/EntornoNatural'
import TextCentered from '../../components/textCentered/TextCentered'
import Button from '../../components/button/Button'

import '../../styles/pages/taninos.css'
import taninosHeaderImg from '../../images/selected/372710398 (Aplicacion taninos).jpg'

import taninosProductoImg from '../../images/selected/taninos.jpg'

const Taninos = () => {

    const renderTaninosHeader = () => {
        return(
            <>
                <div className='taninos-container-header'>
                    <div className='taninos-container-header-title'>
                        <h4>Taninos de uva</h4>
                        <p>Se trata de un aditivo natural que se extrae esencialmente de la piel y las pepitas de la uva. Los taninos de uva pertenecen a la familia de los polifenoles y poseen una reconocida acción antioxidante. Dentro de la industria alimentaria, se utilizan en enología como suplemento que mejora la calidad del vino, estabilizando su color y optimizando su estructura. En Vinumar ofrecemos taninos de uva blanca seleccionada en formato polvo.</p>
                    </div>
                    <div className='taninos-header-apli-carac-img-container'>
                        <div className='taninos-header-apli-carac-container'>
                            <div className='taninos-header-apli-container'>
                                <p className='taninos-header-apli-carac-title'>Aplicaciones</p>
                                <ul>
                                    <li>Industria alimentaria, uso enológico</li>
                                </ul>
                                <p className='taninos-header-apli-definition'>Los taninos refuerzan las características y la conservación de un vino, ya que aportan los polifenoles naturales necesarios para otorgarle distintas cualidades organolépticas durante la vinificación, actuando sobre su color, estructrura, astringencia y amargura.</p>
                            </div>
                            <div className='taninos-header-carac-container'>
                                <p className='taninos-header-apli-carac-title'>Características</p>
                                <ul>
                                    <li className='taninos-header-carac-li'>
                                        <p>Nombre botánico</p>
                                        <p>Vitis Vinífera</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img className='taninos-header-img' src={taninosHeaderImg} alt="Extracto de uva" />

                    </div>
                </div>
            </>
        )
    }

    const renderProductosCardPolvo = () => {
        return(
            <>
                <div>
                    <p>Polvo</p>
                    <img src={taninosProductoImg} alt="Polvo" />
                    <div>
                        <p>VINUPEB P</p>
                        <div>
                            <p>Taninos condensados de alto peso molecular extraídos exclusivamente de la piel de uva blanca seleccionada.</p>
                            <ul>
                                <li>
                                    <p>Taninos</p>
                                    <p>&gt; 65 %</p>
                                </li>
                                <li>
                                    <p>Cenizas</p>
                                    <p>&lt; 4 %</p>
                                </li>
                                <li>
                                    <p>Hierro</p>
                                    <p>&gt; 50 ppm</p>
                                </li>
                                <li>
                                    <p>Humedad</p>
                                    <p>&lt; 7 %</p>
                                </li>
                                <li>
                                    <p>Envases</p>
                                    <ul>
                                        <li>Bolsa de aluminio 25 Kg termosoldada al vacío</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const renderProductos = () => {
        return(
            <>
                <div className="taninos-productos-container">
                    <h4>Nuestra elección en Taninos de uva</h4>
                    <div>
                        {renderProductosCardPolvo()}
                    </div>
                </div>
            </>
        )
    }


    return(
        <>
            <Navbar width='214px' />

            {renderTaninosHeader()}

            {renderProductos()}

            <TextCentered>También ofrecemos productos personalizados, adaptando el nivel de concentración según las necesidades requeridas.</TextCentered>
            <Button style='red-button' width='270' goTo='/Contacto'>CONTACTA CON NOSOTROS</Button>

            <EntornoNatural type='slider' />
            <Footer />

        </>
    )
}
export default Taninos