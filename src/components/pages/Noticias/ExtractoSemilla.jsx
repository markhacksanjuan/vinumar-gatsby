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
                        <h1 className='news-page-h1'>¿Qué es el extracto de semilla de uva?</h1>
                        <p>
                            <b>Los extractos de semillas de uva son compuestos fenólicos que se encuentran en las semillas de las uvas blancas (Vitis Vinifera).</b> Las procianidinas oligoméricas (también conocidas con las siglas OPC), son uno de los principales compuestos que se encuentran en los extractos de semillas de uva, y están considerados como uno de los antioxidantes naturales más potentes que existen.
                            <span className="parrafo">Las procianidinas son polifenoles pertenecientes a la familia de los flavonoides y, gracias a su eficacia para combatir las moléculas encargadas de dañar el metabolismo humano (los llamados radicales libres), estos compuestos fenólicos son cada vez más demandados en las diferentes industrias con el fin de ofrecer productos con un importante valor añadido para sus consumidores, ya sean en nutrición humana o en nutrición animal.</span>
                            <span className="parrafo">La obtención de estos polifenoles se consigue a través de la extracción acuosa de semillas de uvas blancas seleccionadas, obteniendo un ingrediente natural muy apreciado en la actualidad por sus propiedades beneficiosas para la salud. </span>
                            <span className="parrafo"></span>
                        </p>
                    </div>
                    <div className='news-page-header-apli-carac-img-container'>
                        <div className='news-page-header-apli-carac-container'>
                            <div className='news-page-header-apli-container'>
                                <h2 className='news-page-h2'>En Vinumar somos especialistas en extracto de semilla de uva</h2>
                                <p>
                                    <b>En Vinumar somos especialistas en la elaboración de extracto de semilla de uva (también conocido como OPC).</b> La experiencia, unida a la fuerte inversión en equipamientos de alto rendimiento, nos permiten ofrecer una gran flexibilidad, pudiendo adaptar nuestras producciones de extractos de semilla de uva a las necesidades del cliente.
                                    <span className="parrafo">Además, nos encontramos en una de las principales zonas productoras de uva a nivel mundial, por lo que el acceso a la materia prima está garantizado. Esta proximidad, también nos permite procesar la materia prima de manera inmediata, manteniendo sus propiedades y obteniendo un extracto de semilla de uva puro de alta calidad.</span>
                                </p>
                            </div>
                            <div className='news-page-header-carac-container'>
                                <h2 className='news-page-h2'>¿Cuáles son las aplicaciones del extracto de semilla de uva?</h2>
                                <p>
                                    <b>La eficacia de los polifenoles en los extractos de semilla de uva ha sido demostrada en diversos estudios científicos,</b> teniendo un alto poder antioxidante. Por esta razón, la principal aplicación del extracto de semilla de uva se encuentra en la industria alimentaria y nutracéutica, con la elaboración de alimentos y bebidas funcionales y suplementos alimenticios.
                                    <span className="parrafo">Desde Vinumar ofrecemos extracto de semilla de uva en formato polvo (nuestro VINUOPC) envasados al vacío en bolsas de aluminio termosoldadas de 25 Kg.</span>
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
            <Head pageTitle='Extracto de semilla de uva - Vinumar' description='En Vinumar somos especialistas en extracto de semilla de uva para diversas aplicaciones. Más de 60 años de experiencia. Contacta con nosotros.' />
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