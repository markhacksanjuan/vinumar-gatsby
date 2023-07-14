import React from 'react'
import Head from '../../Head/Head'
import LayoutNews from '../../Layout/LayoutNews'
import Button from '../../button/Button'

import semillaImg from '../../../images/DEF/productos/semillas/BL8A9285.jpg'

import '../../../styles/pages/extractos-semillas.css'
import '../../../styles/pages/news/news-pages.css'
import '../../../styles/pages/news/news-mediaQueries.css'

const Antocianos = ({ location }) => {
    const renderExtractos = () => {
        return (
            <>
                <div className='news-page-header'>
                    <div className='news-page-header-title'>
                        <h1 className='news-page-h1'>¿Qué son los antocianos?</h1>
                        <p><b>Los antocianos (o antocianinas) son sustancias naturales que se encuentran en determinados vegetales de la naturaleza. </b>
                        Se tratan de polifenoles pertenecientes a la familia de los flavonoides, responsables de proporcionar las tonalidades de color rojo, violeta y azul a las flores, hojas o frutos de las plantas, así como a cualquier producto que los contengan. El ejemplo más claro lo encontramos en el vino tinto, cuyo color se debe a la presencia de antocianinas en las uvas tintas a partir de las cuales se elabora el vino.
                        <span className="parrafo">Por lo tanto, la extracción de antocianos permite la elaboración de un colorante 100% natural que se encuentra recogido en el listado de aditivos alimentarios bajo el código E-163 y con el nombre de “Antocianinas”.</span>
                        <span className="parrafo">Uno de los frutos más utilizados para la obtención de antocianos es la uva tinta <i>Vitis Vinifera</i>. Mediante la extracción acuosa de las pieles de las uvas tintas se obtiene el colorante E-163, también conocido como extracto de piel de uva o enocianina.</span>
                        <span className="parrafo">La presencia de antocianos otorga a los productos una máxima relevancia, ya que estas sustancias son conocidas por sus múltiples propiedades beneficiosas para la salud y, en especial, por su condición de antioxidante. Por lo tanto, cuando el usuario adquiere extracto de piel de uva, está obteniendo un colorante natural con un importante valor añadido gracias a las antocianinas que contiene.</span></p>
                    </div>
                    <div className='news-page-header-apli-carac-img-container'>
                        <div className='news-page-header-apli-carac-container'>
                            <div className='news-page-header-apli-container'>
                                <h2 className='news-page-h2'>En Vinumar somos especialistas en la extracción de antocianos.</h2>
                                <p><b>En Vinumar somos especialistas en la extracción de antocianos.</b> Nuestra experiencia en el sector (más de 60 años de tradición e innovación en el mundo de la uva), unida a la fuerte inversión en equipamientos de alto rendimiento, nos permiten ofrecer una gran flexibilidad, pudiendo adaptar nuestras producciones de extractos de antocianinas según las necesidades del cliente. 
                                <span className="parrafo">Además, nos encontramos en una de las principales zonas productoras de uva a nivel mundial, por lo que el acceso a la materia prima está garantizado. Esta proximidad también nos permite procesar la materia prima de manera inmediata, manteniendo sus propiedades y evitando su oxidación para obtener un producto puro de alta calidad.</span>
                                </p>
                            </div>
                            <div className='news-page-header-carac-container'>
                                <h2 className='news-page-h2'>¿Cuáles son las aplicaciones de los antocianos?</h2>
                                <p><b>Los antocianos, en su forma de colorante natural E-163, tienen multitud de aplicaciones, pero es en la industria alimentaria y de bebidas donde su uso se encuentra más generalizado.</b> La enocianina es muy utilizada en la formulación de licores y bebidas, ofreciendo ese color característico de la uva tinta. Su uso también es muy popular en la elaboración de helados, confitería, pastelería o incluso mermeladas.
                                    <span className="parrafo">Desde Vinumar ofrecemos extracto de piel de uva E-163 tanto en formato líquido (nuestro VINUPER) como en formato polvo (nuestro VINUCAP) con diversas modalidades de envasado.</span>
                                </p>
                            </div>
                            <div className='news-page-button'>
                                <Button style='red-button' width='270px' goTo='/producto/extracto-piel-uva'>MÁS INFORMACIÓN</Button>
                            </div>
                        </div>
                        <img className='semilla-header-img' src={semillaImg} alt="Semilla uva" />
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <Head pageTitle='Antocianos - Vinumar' description='En Vinumar somos especialistas en la extracción de antocianos. Más de 60 años de experiencia. Contacta con nosotros.' />
            <LayoutNews pageLocation={location}>
                {renderExtractos()}
                {/* <div className='news-page-button'>
                    <Button style='red-button' width='270px' goTo='/producto/extracto-de-semilla-de-uva'>MÁS INFORMACIÓN</Button>
                </div> */}
            </LayoutNews>
        </>
    )
}
export default Antocianos