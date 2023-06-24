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
                        <h1 className='news-page-h1'>¿Qué colorante es el E-163?</h1>
                        <p><b>E-163 es el código que identifica a las “Antocianinas” dentro del listado de aditivos alimentarios.</b> Concretamente, se trata de un colorante 100% natural procedente de aquellas frutas y hortalizas que contienen antocianos (o antocianinas) en su composición, polifenoles responsables de proporcionar las tonalidades de color rojo, violeta y azul.
                        <span className="parrafo">Una de las frutas más utilizadas para la obtención del colorante E-163 es la uva tinta Vitis Vinifera. Mediante la extracción acuosa de las pieles de las uvas tintas se obtiene el colorante E-163, también conocido como extracto de piel de uva o enocianina.</span>
                        <span className="parrafo">La presencia de antocianinas <b>otorga al extracto de piel de uva E-163 una máxima relevancia,</b> ya que estas sustancias son conocidas por sus múltiples propiedades beneficiosas para la salud. Por lo tanto, cuando el usuario adquiere extracto de piel de uva, está obteniendo un colorante natural con un importante valor añadido.</span>
                        <span className="parrafo"></span></p>
                    </div>
                    <div className='news-page-header-apli-carac-img-container'>
                        <div className='news-page-header-apli-carac-container'>
                            <div className='news-page-header-apli-container'>
                                <h2 className='news-page-h2'>En Vinumar somos especialistas en extractos de piel de uva E-163</h2>
                                <p><b>En Vinumar somos especialistas en la elaboración de extracto de piel de uva E-163 (también conocido como enocianina).</b> La experiencia, unida a la fuerte inversión en equipamientos de alto rendimiento, nos permiten ofrecer una gran flexibilidad, pudiendo adaptar nuestras producciones de enocianina a las necesidades del cliente. 
                                <span className="parrafo">Además, nos encontramos en una de las principales zonas productoras de uva a nivel mundial, por lo que el acceso a la materia prima está garantizado. Esta proximidad también nos permite procesar la materia prima de manera inmediata, manteniendo sus propiedades y obteniendo un producto puro de alta calidad.</span>
                                </p>
                            </div>
                            <div className='news-page-header-carac-container'>
                                <h2 className='news-page-h2'>¿Cuáles son las aplicaciones del extracto de piel de uva E-163?</h2>
                                <p><b>El extracto de piel de uva E-163 tiene multitud de aplicaciones, pero es en la industria alimentaria y de bebidas donde su uso se encuentra más generalizado.</b> La enocianina es muy utilizada en la formulación de licores y bebidas, ofreciendo ese color característico de la uva tinta. Su uso también es muy popular en la elaboración de helados, confitería, pastelería o incluso mermeladas.
                                    <span className="parrafo">Desde Vinumar ofrecemos extracto de piel de uva E-163 tanto en formato líquido (nuestro VINUPER) como en formato polvo (nuestro VINUCAP) con diversas modalidades de envasado.</span>
                                </p>
                            </div>
                            <div className='news-page-button'>
                                <Button style='red-button' width='270px' goTo='/producto/extracto-de-semilla-de-uva'>MÁS INFORMACIÓN</Button>
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
            <Head pageTitle='OPC Uva - Vinumar' />
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