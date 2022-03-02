import React from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import '../../styles/pages/valores.css'
import TextCentered from '../../components/textCentered/TextCentered'
import Button from '../../components/button/Button'

import headerImg from '../../images/selected/Principal DSC00902.jpg'
import valores1 from '../../images/ilustraciones/Vinumar_Ilustraciones_Tecnologia.jpg'
import valores2 from '../../images/ilustraciones/Vinumar_Ilustraciones_Reactividad.jpg'
import valores3 from '../../images/ilustraciones/Vinumar_Ilustraciones_Confianza.jpg'
import valores4 from '../../images/ilustraciones/Vinumar_Ilustraciones_Experiencia.jpg'
import valores5 from '../../images/ilustraciones/Vinumar_Ilustraciones_Sostenibilidad.jpg'

const Valores = () => {
    const renderHeader = () => {
        return(
            <>
                <div className="valores-container-header">
                    <img src={headerImg} alt="Valores" />
                    <p>Una empresa conducida a través de los valores.</p>
                </div>
            </>
        )
    }
    const renderContent = () => {
        return(
            <>
                <div className="valores-content-container">
                    <h4>Valores</h4>
                    <div>
                        <div>
                            <p className='valores-content-title'>Tecnología</p>
                            <img src={valores1} alt="Valores" />
                            <p className='valores-content-description'>La apuesta tecnológica es para nosotros una larga tradición. Desde nuestra fundación, la continua investigación e inversión en las más avanzadas tecnologías ha sido la base fundamental para crecer ofreciendo productos idóneos con todas las garantías de seguridad e higiene. La inversión en tecnología nos permite innovar con perseverancia en procesos y maquinarias para proporcionar siempre soluciones óptimas a nuestros clientes.</p>
                        </div>
                        <div>
                            <div className='valores-content-card'>
                                <div>
                                    <p className='valores-content-title'>Reactividad</p>
                                    <img src={valores2} alt="Valores" />
                                </div>
                                <p>Hoy en día, la reactividad es fundamental. Saber responder de forma clara, rápida y eficaz a las necesidades del cliente más exigente es imprescindible en un entorno competitivo. La industria avanza cada vez más rápido y es en la capacidad de reacción donde nuestros clientes encuentran en nosotros a su mejor aliado. Porque sus problemas nos estimulan a encontrar la mejor solución.</p>
                            </div>
                            <div className='valores-content-card'>
                                <div>
                                    <p className='valores-content-title'>Confianza</p>
                                    <img src={valores3} alt="Valores" />
                                </div>
                                <p>Como empresa familiar sabemos que la confianza se gana día tras día, creando vínculos que generen relaciones profesionales duraderas. Con los clientes, sin duda alguna, pero también con nuestros proveedores y empleados, ya que de todos depende que podamos ofrecer un servicio alineado con nuestra filosofía, convirtiéndolo en una ventaja competitiva que genere fidelidad a los valores de nuestra marca. Confianza en todos los ámbitos.</p>
                            </div>
                            <div className='valores-content-card'>
                                <div>
                                    <p className='valores-content-title'>Experiencia</p>
                                    <img src={valores4} alt="Valores" />
                                </div>
                                <p>Nuestra dilatada experiencia en la industria vinícola se refleja en nuestro conocimiento del sector y respeto por el producto y la materia prima. Todo ello redunda en mayor agilidad, eficacia y eficiencia a la hora de aportar soluciones innovadoras y diferenciales.</p>
                            </div>
                            <div className='valores-content-card'>
                                <div>
                                    <p className='valores-content-title'>Sostenibilidad</p>
                                    <img src={valores5} alt="Valores" />
                                </div>
                                <p>Desde siempre, hemos desarrollado una política proactiva para la protección del medio y la reducción del impacto ambiental. Nuestra actividad económica está indisociablemente enfocada hacia la máxima eficiencia y la disminución de residuos, favoreciendo el reciclaje y la reutilización. Nuestro lema: devolver al campo lo que es del campo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>
            <Navbar width='214px' />
            {renderHeader()}
            <TextCentered>Los valores corporativos son la única ventaja competitiva que no se puede replicar.</TextCentered>
            {renderContent()}
            <Button style='red-button' width='270px' goTo='/Contacto'>CONTACTA CON NOSOTROS</Button>
            <Footer />

        </>
    )
}
export default Valores