import React from 'react'
import Head from '../../Head/Head'
import LayoutNews from '../../Layout/LayoutNews'
import Button from '../../button/Button'

import semillaImg from '../../../images/NEWS/Imagen 10.jpg'

import '../../../styles/pages/extractos-semillas.css'
import '../../../styles/pages/news/news-pages.css'
import '../../../styles/pages/news/news-mediaQueries.css'

const ConcentradoVino = ({ location }) => {
    const renderExtractos = () => {
        return (
            <>
                <div className='news-page-header'>
                    <div className='news-page-header-title'>
                        <h1 className='news-page-h1'>¿Qué es el concentrado de vino?</h1>
                        <p><b>El concentrado de vino es una sustancia natural que se obtiene de la concentración de vinos tintos y blancos</b> previamente seleccionados y convenientemente desalcoholizados. También conocido como extracto de vino, es un ingrediente aromático muy apreciado en la industria alimentaria por sus cualidades organolépticas. 
                        
                        <span className="parrafo"></span>
                        <span className="parrafo"></span>
                        <span className="parrafo"></span></p>
                    </div>
                    <div className='news-page-header-apli-carac-img-container'>
                        <div className='news-page-header-apli-carac-container'>
                            <div className='news-page-header-apli-container'>
                                <h2 className='news-page-h2'>En Vinumar somos especialistas en concentrados de vino</h2>
                                <p><b>En Vinumar somos especialistas en la elaboración de concentrado de vino (también conocido como extracto de vino).</b>  La experiencia, unida a la fuerte inversión en equipamientos de alto rendimiento, nos permiten ofrecer una gran flexibilidad, pudiendo adaptar nuestras producciones de concentrado de vino a las necesidades del cliente. 
                                <span className="parrafo">Además, nos encontramos en una de las principales zonas productoras de uva a nivel mundial, por lo que el acceso a la materia prima está garantizado. Esta proximidad también nos permite procesar la materia prima de manera inmediata, manteniendo sus propiedades y obteniendo un concentrado de vino puro de alta calidad.</span>
                                </p>
                            </div>
                            <div className='news-page-header-carac-container'>
                                <h2 className='news-page-h2'>¿Cuáles son las aplicaciones del concentrado de vino?</h2>
                                <p>El concentrado de vino puede tener diferentes aplicaciones, pero es en la industria alimentaria y de bebidas donde su uso se encuentra más generalizado. Los extractos de vino son muy utilizados como bases culinarias en la preparación de salsas, marinados, o platos preparados. También son utilizados en la formulación de bebidas. 
                                    <span className="parrafo">Desde Vinumar ofrecemos concentrados de vino tinto y blanco bajo nuestra marca comercial VINUWINE.</span>
                                </p>
                            </div>
                            <div className='news-page-button'>
                                <Button style='red-button' width='270px' goTo='/producto/extracto-vino'>MÁS INFORMACIÓN</Button>
                            </div>
                        </div>
                        <img className='news-semilla-header-img' src={semillaImg} alt="Semilla uva" />
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <Head pageTitle='Concentrado de vino - Vinumar' description='En Vinumar somos especialistas en concentrado de vino para diversas aplicaciones. Más de 60 años de experiencia. Contacta con nosotros.' />
            <LayoutNews pageLocation={location}>
                {renderExtractos()}
                {/* <div className='news-page-button'>
                    <Button style='red-button' width='270px' goTo='/producto/extracto-de-semilla-de-uva'>MÁS INFORMACIÓN</Button>
                </div> */}
            </LayoutNews>
        </>
    )
}
export default ConcentradoVino