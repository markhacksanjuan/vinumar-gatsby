import React from 'react'
import Head from '../../Head/Head'
import LayoutNews from '../../Layout/LayoutNews'
import Button from '../../button/Button'

import semillaImg from '../../../images/DEF/productos/semillas/BL8A9285.jpg'

import '../../../styles/pages/extractos-semillas.css'
import '../../../styles/pages/news/news-pages.css'
import '../../../styles/pages/news/news-mediaQueries.css'

const NewsPage = ({ location }) => {
    const renderExtractos = () => {
        return (
            <>
                <div className='news-page-header'>
                    <div className='news-page-header-title'>
                        <h1 className='news-page-h1'>¿Qué son los taninos de uva?</h1>
                        <p>
                        En general, los taninos son compuestos fenólicos naturales presentes en los árboles y las plantas, así como en sus frutos. Poseen un olor y sabor característico, predominando el amargor y la astringencia. 
                            <span className="parrafo">Específicamente, los taninos de uva son compuestos fenólicos naturales que se encuentran en las diferentes partes de la vid <i>Vitis Vinifera</i> y su fruto, cobrando una especial importancia los taninos concentrados en la piel y en las pepitas de la uva. Estos polifenoles son obtenidos a través de una extracción acuosa de la piel y de las pepitas de las uvas blancas.</span>
                            <span className="parrafo">Los taninos poseen propiedades astringentes, antinflamatorias y antioxidantes, proporcionando un gran valor añadido a los productos que los contienen, lo que les convierten en un aditivo natural muy apreciado.</span>
                            <span className="parrafo"></span>
                        </p>
                    </div>
                    <div className='news-page-header-apli-carac-img-container'>
                        <div className='news-page-header-apli-carac-container'>
                            <div className='news-page-header-apli-container'>
                                <h2 className='news-page-h2'>En Vinumar somos especialistas en taninos de uva</h2>
                                <p>
                                    <b>En Vinumar somos especialistas en la elaboración de taninos de piel y pepita de uva.</b> La experiencia, unida a la fuerte inversión en equipamientos de alto rendimiento, nos permiten ofrecer una gran flexibilidad, pudiendo adaptar nuestras producciones de taninos a las necesidades del cliente.
                                    <span className="parrafo">Además, nos encontramos en una de las principales zonas productoras de uva a nivel mundial, por lo que el acceso a la materia prima está garantizado. Esta proximidad también nos permite procesar la materia prima de manera inmediata, manteniendo sus propiedades y obteniendo taninos de piel y de pepita de uva de alta calidad.</span>
                                </p>
                            </div>
                            <div className='news-page-header-carac-container'>
                                <h2 className='news-page-h2'>¿Cuáles son las aplicaciones de los taninos?</h2>
                                <p>
                                Si bien es cierto que originariamente los taninos eran utilizados para curtir pieles de animales (se sigue haciendo en la actualidad), el principal uso del tanino actualmente se encuentra en la industria alimentaria, concretamente, en la elaboración de vino (uso enológico). 
                                    <span className="parrafo">Los taninos de piel y de pepita de uva otorgan al vino diferentes cualidades organolépticas, aportando astringencia y amargura, así como actuando sobre su color y su estructura, jugando un papel muy importante en el envejecimiento del vino.</span>
                                    <span className="parrafo">Desde Vinumar ofrecemos taninos condensados de alto peso molecular extraídos de la piel de la uva blanca (VINUPEB) y taninos condensados de bajo peso molecular extraídos de la pepita de la uva blanca (VINUPEP), ambos en formato polvo envasados en bolsas de aluminio de 25Kg termosoldadas al vacío.</span>
                                </p>
                            </div>
                            <div className='news-page-button'>
                                <Button style='red-button' width='270px' goTo='/producto/taninos-uva'>MÁS INFORMACIÓN</Button>
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
            <Head pageTitle='Taninos de uva - Vinumar' description='En Vinumar somos especialistas en taninos de uva para diversas aplicaciones. Más de 60 años de experiencia. Contacta con nosotros.' />
            <LayoutNews pageLocation={location}>
                {renderExtractos()}
                {/* <div className='news-page-button'>
                    <Button style='red-button' width='270px' goTo='/producto/extracto-de-semilla-de-uva'>MÁS INFORMACIÓN</Button>
                </div> */}
            </LayoutNews>
        </>
    )
}
export default NewsPage