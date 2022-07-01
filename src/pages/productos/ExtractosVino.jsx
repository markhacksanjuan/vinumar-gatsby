import React from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import EntornoNatural from '../../components/entornoNatural/EntornoNatural'
import TextCentered from '../../components/textCentered/TextCentered'
import Button from '../../components/button/Button'

import '../../styles/pages/extractos-uva.css'

import uvaHeaderImg from '../../images/DEF/BL8A9790.jpg'
import vinoProducto1 from '../../images/DEF/BL8A9852.jpg'
import vinoProducto2 from '../../images/DEF/BL8A9269.jpg'
import vinoProducto3 from '../../images/DEF/BL8A9953_2.jpg'
import vinoProducto4 from '../../images/DEF/BL8A9427.jpg'


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
                                        <p className='italic'>Vitis Vinífera</p>
                                    </li>
                                    <li className='uva-header-carac-li'>
                                        <p>Etiquetado</p>
                                        <ul>
                                            <li>Extracto de vino tinto o vino blanco</li>
                                            <li>Concentrado de vino desalcoholizado</li>
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

    const renderProductosCardLiquido = () => {
        return(
            <>
                <div>
                    <div>
                        <p>Líquido</p>
                        <p>Aromatizante y saborizante 100% natural, sin aditivos añadidos. Se obtiene por desalcoholización, concentración, filtración y pasteurización de vino tinto o blanco.</p>
                    </div>
                    <img className='fit-cover' src={vinoProducto1} alt="Liquido" />
                    <div className='uva-productos-carac'>
                        <p className='uva-productos-subtitle'>Tinto</p>
                        <div>
                            <p>VINUWINE R55L</p>
                            <ul>
                                <li>
                                    <p>Color</p>
                                    <p>Marrón rojo</p>
                                </li>
                                <li>
                                    <p>E3/Color</p>
                                    <p>0,5 - 1,5</p>
                                </li>
                                <li>
                                    <p>pH</p>
                                    <p>&#8804; 3,80</p>
                                </li>
                                <li>
                                    <p>Brix</p>
                                    <p>52 - 58 </p>
                                </li>
                                <li>
                                    <p>Envases</p>
                                    <ul>
                                        <li>Cisterna alimentaria</li>
                                        <li>Contenedor 1000 l</li>
                                        <li>Garrafas 60 l, 220 l</li>
                                        <li>Envases 20 l</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <img className='fit-cover' src={vinoProducto3} alt="Liquido" />
                    <div>
                        <p className='uva-productos-subtitle'>Blanco</p>
                        <div>
                            <p>VINUWINE B55L</p>
                            <ul>
                                <li>
                                    <p>Índice color</p>
                                    <p>&lt;60</p>
                                </li>
                                <li>
                                    <p>Color</p>
                                    <p>Marrón amarillento</p>
                                </li>
                                <li>
                                    <p>pH</p>
                                    <p>&#8804;3,80</p>
                                </li>
                                <li>
                                    <p>Brix</p>
                                    <p>52 - 58 </p>
                                </li>
                                <li>
                                    <p>Envases</p>
                                    <ul>
                                        <li>Cisterna alimentaria</li>
                                        <li>Contenedor 1000 l</li>
                                        <li>Garrafas 60 l, 220 l</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </>
        )
    }
    const renderProductosCardPolvo = () => {
        return(
            <>
                <div>
                    <div>
                        <p>Polvo</p>
                        <p>Aromatizante y saborizante 100% natural, sin aditivos añadidos. Se obtiene por desalcoholización, concentración y filtración de vino tinto o blanco, y se deshidrata por atomización, con o sin soporte de secado (maltodextrina).</p>
                    </div>
                    <img className='fit-none' src={vinoProducto2} alt="Liquido" />
                    <div className='uva-productos-carac'>
                        <p className='uva-productos-subtitle'>Tinto</p>
                        <div>
                            <p>VINUWINE RP</p>
                            <ul>
                                <li>
                                    <p>Color</p>
                                    <p>Marrón rojo</p>
                                </li>
                                <li>
                                    <p>pH</p>
                                    <p>&#8804; 3,80</p>
                                </li>
                                <li>
                                    <p>Humedad</p>
                                    <p>&lt; 7 %</p>
                                </li>
                                <li>
                                    <p>Soporte de secado</p>
                                    <p>Maltodextrina</p>
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

                    <img className='fit-none' src={vinoProducto4} alt="Liquido" />
                    <div>
                        <p className='uva-productos-subtitle'>Blanco</p>
                        <div>
                            <p>VINUWINE BP</p>
                            <ul>
                                <li>
                                    <p>Color</p>
                                    <p>Amarillo paja</p>
                                </li>
                                <li>
                                    <p>pH</p>
                                    <p>&#8804;3,80</p>
                                </li>
                                <li>
                                    <p>Humedad</p>
                                    <p>&lt; 7 %</p>
                                </li>
                                <li>
                                    <p>Soporte de secado</p>
                                    <p>Maltodextrina</p>
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
                <div className="uva-productos-container">
                    <h4>Nuestra gama de extractos de vino</h4>
                    <div>
                        {renderProductosCardLiquido()}
                        {renderProductosCardPolvo()}
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <Navbar width='214px' />

            {renderExtractosHeader()}

            {renderProductos()}

            <TextCentered width='925px' margin='60px'>También ofrecemos productos personalizados, según las necesidades requeridas. Como el extracto de vino en polvo Vinuwine SM ideal para uso alimentario y nutracéutico, sin maltodextrina y rico en polifenoles (&gt;30%).</TextCentered>
            <Button style='red-button' width='270' goTo='/Contacto'>CONTACTA CON NOSOTROS</Button>

            <EntornoNatural type='vino' />

            <Footer />

        </>
    )
}
export default ExtractosVino