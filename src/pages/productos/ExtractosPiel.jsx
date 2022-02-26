import React from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import TextCentered from '../../components/textCentered/TextCentered'
import Button from '../../components/button/Button'
import EntornoNatural from '../../components/entornoNatural/EntornoNatural'

// import images
import pielHeaderImg from '../../images/selected/Aplicacion color.jpg'
import pielProducto1 from '../../images/selected/CAS_3593 (color polvo).jpg'
import pielProductoLiquido from '../../images/selected/Extracto piel uva liquido.jpg'


import '../../styles/pages/extractos-piel.css'

const ExtractosPiel = () => {

    const renderExtractosHeader = () => {
        return(
            <>
                <div className='piel-container-header'>
                    <div className='piel-container-header-title'>
                        <h4>Extractos de piel de uva</h4>
                        <p>También conocidos como enocianina, los extractos de piel de uva son colorantes 100% naturales obtenidos por la extracción acuosa de la fracción de antocianos (o antocianinas) de las uvas tintas, pigmentos pertenecientes a la familia de los polifenoles, cuyo espectro cromático abarca desde el rojo oscuro al violeta.<span className='parrafo'>Disponemos de dos prácticos formatos: líquido o polvo.</span></p>
                    </div>
                    <div className='piel-header-apli-carac-img-container'>
                        <div className='piel-header-apli-carac-container'>
                            <div className='piel-header-apli-container'>
                                <p className='piel-header-apli-carac-title'>Aplicaciones</p>
                                <ul>
                                    <li>Bebidas y licores </li>
                                    <li>Pastelería, confitería</li>
                                    <li>Helados</li>
                                    <li>Productos lácteos</li>
                                    <li>Zumos</li>
                                    <li>Mermeladas</li>
                                </ul>
                                <p className='piel-header-apli-definition'>El uso del extracto de piel de uva como colorante es habitual en todo tipo de alimentos y bebidas, tanto por sus atractivas tonalidades como por ser un pigmento 100% natural y sin aditivos. Ambas características aportan un valor diferencial muy apreciado por la industria alimentaria y los consumidores.</p>
                            </div>
                            <div className='piel-header-carac-container'>
                                <p className='piel-header-apli-carac-title'>Características</p>
                                <ul>
                                    <li className='piel-header-carac-li'>
                                        <p>Nombre botánico</p>
                                        <p className='italic'>Vitis Vinífera</p>
                                    </li>
                                    <li className='piel-header-carac-li'>
                                        <p>Etiquetado</p>
                                        <ul>
                                            <li>Extracto de piel de uva</li>
                                            <li>Antocianinas de uva</li>
                                            <li>E-163</li>
                                        </ul>
                                    </li>
                                    <li className='piel-header-carac-li'>
                                        <p>Solubilidad</p>
                                        <p>Los extractos de piel de uva son totalmente solubles en agua y alcohol</p>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <img className='piel-header-img' src={pielHeaderImg} alt="Extracto de piel" />

                    </div>
                </div>
            </>
        )
    }
    const renderProductosCardLiquido = () => {
        return(
            <>
                <div>
                            <p>Líquido</p>
                            <img src={pielProductoLiquido} alt="Liquido" />
                            <div>
                                <p>VINUPER 3</p>
                                <div>
                                    <p>Colorante alimentario 100% natural, sin aditivos añadidos. Se obtiene de la piel de la uva tinta mediante extracción y concentración.</p>
                                    <ul>
                                        <li>
                                            <p>E3/Color</p>
                                            <p>2,9 - 3,1</p>
                                        </li>
                                        <li>
                                            <p>Color</p>
                                            <p>Rojo oscuro a violeta</p>
                                        </li>
                                        <li>
                                            <p>pH</p>
                                            <p>&lt;3,0</p>
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
                    <p>Polvo</p>
                    <img src={pielProducto1} alt="Polvo" />
                    <div>
                        <p>VINUCAP 12</p>
                        <div>
                            <p>Colorante alimentario 100% natural, sin aditivos añadidos. Se obtiene de la piel de la uva tinta mediante extracción, concentración y atomización, sin soporte de secado.</p>
                            <ul>
                                <li>
                                    <p>E3/Color</p>
                                    <p>11,4 - 12,6</p>
                                </li>
                                <li>
                                    <p>Color</p>
                                    <p>Rojo oscuro</p>
                                </li>
                                <li>
                                    <p>pH</p>
                                    <p>&lt;3,5</p>
                                </li>
                                <li>
                                    <p>Humedad</p>
                                    <p>&lt;7 %</p>
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
                <div className="piel-productos-container">
                    <h4>Nuestra gama de extractos de piel de uva E-163</h4>
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

            <TextCentered>También ofrecemos productos personalizados, adaptando el nivel de concentración según las necesidades requeridas.</TextCentered>
            <Button style='red-button' width='270' goTo='/Contacto'>CONTACTA CON NOSOTROS</Button>

            <EntornoNatural type='slider' />
            <Footer />

        </>
    )
}
export default ExtractosPiel