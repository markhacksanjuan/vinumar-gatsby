import React from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import EntornoNatural from '../../components/entornoNatural/EntornoNatural'
import TextCentered from '../../components/textCentered/TextCentered'
import Button from '../../components/button/Button'

import '../../styles/pages/extractos-uva.css'

import uvaHeaderImg from '../../images/img/Extracto-de-vino-caracteristicas.jpg'


const ExtractosVino = () => {

    const renderExtractosHeader = () => {
        return(
            <>
                <div className='uva-container-header'>
                    <div className='uva-container-header-title'>
                        <h4>Extractos de vino</h4>
                        <p>Se trata de sustancias naturales obtenidas por concentración de vinos tintos o blancos seleccionados y convenientemente desalcoholizados. Se utilizan en bebidas sin alcohol y son básicos para preparados alimentarios, porque sus propiedades aromatizantes y saborizantes les confieren un alto valor gastronómico añadido. Tanto en su formato en polvo como líquido, los extractos de vino Vinumar realzan comidas y bebidas.</p>
                    </div>
                    <div className='uva-header-apli-carac-img-container'>
                        <div className='uva-header-apli-carac-container'>
                            <div className='uva-header-apli-container'>
                                <p className='uva-header-apli-carac-title'>Aplicaciones</p>
                                <ul>
                                    <li>Salsas</li>
                                    <li>Caldos</li>
                                    <li>Platos cocinados (bases culinarias)</li>
                                    <li>Marinados</li>
                                    <li>Bebidas sin alcohol</li>
                                </ul>
                                <p className='uva-header-apli-definition'>La practicidad de uso de los extractos de vino, junto a sus cualidades organolépticas aportan mejor palatabilidad a los platos de cocina preparada, como demuestra su uso cada vez más extendido en todo el mundo.</p>
                            </div>
                            <div className='uva-header-carac-container'>
                                <p className='uva-header-apli-carac-title'>Características</p>
                                <ul>
                                    <li className='uva-header-carac-li'>
                                        <p>Nombre botánico</p>
                                        <p>Vitis Vinífera</p>
                                    </li>
                                    <li className='uva-header-carac-li'>
                                        <p>Etiquetado</p>
                                        <ul>
                                            <li>Extracto de vino tinto o vino blanco</li>
                                            <li>Concentrado de vino desalcolizado</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img className='uva-header-img' src={uvaHeaderImg} alt="Extracto de uva" />

                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <Navbar width='214px' />

            {renderExtractosHeader()}

            <TextCentered>También ofrecemos productos personalizados, según las necesidades requeridas. Como el extracto de vino en polvo Vinuwine SM ideal para uso alimentario y nutracéutico, sin maltodextrina y rico en polifenoles (&gt;30%).</TextCentered>
            <Button style='red-button' width='270' goTo='/Contacto'>CONTACTA CON NOSOTROS</Button>

            <EntornoNatural type='slider' />

            <Footer />

        </>
    )
}
export default ExtractosVino