import React from 'react'
import Head from '../../Head/Head'
import LayoutNews from '../../Layout/LayoutNews'
import Button from '../../button/Button'

import semillaImg from '../../../images/NEWS/Imagen 4.jpg'

import '../../../styles/pages/extractos-semillas.css'
import '../../../styles/pages/news/news-pages.css'
import '../../../styles/pages/news/news-mediaQueries.css'

const NewsPage = ({ location }) => {
    const renderExtractos = () => {
        return (
            <>
                <div className='news-page-header'>
                    <div className='news-page-header-title'>
                        <h1 className='news-page-h1'>¿Qué es la enocianina?</h1>
                        <p>
                            <b>La enocianina se trata de un colorante 100% natural procedente de la uva <i>Vitis Vinifera</i>, concretamente de la piel de las uvas tintas.</b> A través de una extracción acuosa conseguimos obtener el elemento principal de este producto, que son los antocianos o antocianinas, una sustancia perteneciente a la familia de los polifenoles, responsable de proporcionar las tonalidades de color rojo, violeta y azul. Este pigmento se encuentra clasificado en el listado de aditivos bajo la referencia E-163 con el nombre de “Antocianinas”. 
                            <span className="parrafo">La presencia de antocianinas <b>otorga a la enocianina una máxima relevancia,</b> ya que estas sustancias son conocidas por sus múltiples propiedades beneficiosas para la salud. Por lo tanto, cuando el usuario adquiere enocianina, está obteniendo un colorante natural con un importante valor añadido. </span>
                            <span className="parrafo"></span>
                            <span className="parrafo"></span>
                        </p>
                    </div>
                    <div className='news-page-header-apli-carac-img-container'>
                        <div className='news-page-header-apli-carac-container'>
                            <div className='news-page-header-apli-container'>
                                <h2 className='news-page-h2'>En Vinumar somos especialistas en enocianina</h2>
                                <p>
                                    <b>En Vinumar somos especialistas en la elaboración de extractos de piel de uva o enocianina.</b>
                                    <span className="parrafo"> La experiencia, unida a la fuerte inversión en equipamientos de alto rendimiento, nos permiten ofrecer una gran flexibilidad, pudiendo adaptar nuestras producciones de extractos de piel de uva a las necesidades del cliente.</span>
                                    <span className="parrafo">Además, nos encontramos en una de las principales zonas productoras de uva a nivel mundial, por lo que el acceso a la materia prima está garantizado. Esta proximidad también nos permite procesar la materia prima de manera inmediata, manteniendo sus propiedades y obteniendo un producto puro de alta calidad.</span>
                                </p>
                            </div>
                            <div className='news-page-header-carac-container'>
                                <h2 className='news-page-h2'>¿Cuáles son las aplicaciones de la enocianina?</h2>
                                <p>
                                    <b>La enocianina tiene multitud de aplicaciones, pero es en la industria alimentaria y de bebidas donde su uso se encuentra más generalizado.</b> El extracto de piel de uva es muy utilizado en la formulación de licores y bebidas, ofreciendo ese color característico de la uva tinta. Su uso también es muy popular en la elaboración de helados, confitería, pastelería o incluso mermeladas.
                                    <span className="parrafo">Desde Vinumar ofrecemos enocianina tanto en formato líquido (nuestro VINUPER) como en formato polvo (nuestro VINUCAP) con diversas modalidades de envasado.</span>
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
            <Head pageTitle='Enocianina - Vinumar' description='En Vinumar somos especialistas en enocianina para diversas aplicaciones. Más de 60 años de experiencia. Contacta con nosotros.' />
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