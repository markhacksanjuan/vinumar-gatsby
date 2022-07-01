import React from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import EntornoNatural from '../../components/entornoNatural/EntornoNatural'
import TextCentered from '../../components/textCentered/TextCentered'
import Button from '../../components/button/Button'

import '../../styles/pages/alcoholes.css'
import alcoholesHeaderImg from '../../images/DEF/BL8A4092.jpg'

import alcoholesProductoImg from '../../images/DEF/BL8A9307.jpg'


const Alcoholes = () => {

    const renderAlcoholesHeader = () => {
        return(
            <>
                <div className='alcoholes-container-header'>
                    <div className='alcoholes-container-header-title'>
                        <h4>Alcoholes</h4>
                        <p>Desde nuestros inicios, la fabricación de alcoholes ha estado permanentemente presente en las distintas actividades desarrolladas por Vinumar, por lo que es todo un clásico.
                        <span className="parrafo">
                            Todos los alcoholes que fabricamos en nuestras instalaciones son de procedencia exclusivamente vínica, y se obtienen en columnas de flujo continuo a partir del vino o de los subproductos de vinificación.
                        </span>
                        <span className="parrafo">
                            Los alcoholes vínicos reciben distintas denominaciones según sea su proceso de obtención, su purificación o refinado, su graduación alcohólica o las características organolépticas del alcohol obtenido.
                        </span>
                        </p>
                    </div>
                    <div className='alcoholes-header-apli-carac-img-container'>
                        <div className='alcoholes-header-apli-carac-container'>
                            <div className='alcoholes-header-carac-container'>
                                <p className='alcoholes-header-apli-carac-title'>Aplicaciones</p>
                                <div>
                                    <ul>
                                        <li>
                                            <p>Uso energético</p>
                                            <p>Biocombustible</p>
                                        </li>
                                        <li>
                                            <p>Industria química</p>
                                            <ul>
                                                <li>Productos de limpieza</li>
                                                <li>Perfumes</li>
                                                <li>Desinfectantes</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p>Industria farmacéutica</p>
                                            <ul>
                                                <li>Geles hidroalcóholicos</li>
                                                <li>Alcoholes sanitarios</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p>Uso alimentario</p>
                                            <ul>
                                                <li>Bebidas y licores</li>
                                                <li>Mistelas</li>
                                                <li>Vermut</li>
                                                <li>Brandy</li>
                                                <li>Vinos de Oporto</li>
                                                <li>Vinos de Jerez</li>
                                            </ul>
                                        </li>
                                    </ul>
                                        <p>
                                        Los alcoholes de origen vínico se caracterizan por sus diferentes cualidades organolépticas (su sabor, aroma, etc.) respecto al resto de alcoholes. El uso de alcoholes procedentes del vino y sus subproductos confiere a los diversos productos a los que se incorporan soluciones más saludables y naturales.
                                        </p>
                                </div>
                            </div>
                        </div>
                        <img className='alcoholes-header-img' src={alcoholesHeaderImg} alt="Extracto de uva" />

                    </div>
                </div>
            </>
        )
    }

    const renderProductos = () => {
        return(
            <>
                <div className="alcoholes-productos-container">
                    <h4>Nuestra gama de alcoholes</h4>
                    <div>
                        <ul>
                            <li>
                                <p>Alcohol bruto</p>
                                <p>Fabricado a partir de subproductos de origen vínico con una graduación de 92,0º a 92,5º.</p>
                            </li>
                            <li>
                                <p>Alcohol rectificado</p>
                                <p>Fabricado a partir de subproductos de origen vínico con una graduación de 96º a 96,5º.</p>
                            </li>
                            <li>
                                <p>Alcohol parcialmente desnaturalizado</p>
                                <p>Fabricado a partir de alcohol bruto o rectificado, se desnaturaliza en nuestras instalaciones conforme a la legislación vigente.</p>
                            </li>
                            <li>
                                <p>Destilado de vino</p>
                                <p>Fabricado con vinos previamente seleccionados y con una graduación de 94,0º a 95,9º.</p>
                            </li>
                            <li>
                                <p>Aguardiente de vino</p>
                                <p>Fabricado con vinos previamente seleccionados y con una graduación de entre 65º y 77º.</p>
                            </li>
                        </ul>
                        <img src={alcoholesProductoImg} alt="Alcoholes" />
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <Navbar width='214px' />

            {renderAlcoholesHeader()}

            {renderProductos()}

            <TextCentered width='925px' margin='60px'>Realizamos todas las fabricaciones exclusivamente bajo pedido.</TextCentered>
            <Button style='red-button' width='270' goTo='/Contacto'>CONTACTA CON NOSOTROS</Button>

            <EntornoNatural type='alcohol' />
            <Footer />

        </>
    )
}
export default Alcoholes