import React from 'react'
import Head from '../../Head/Head'
import LayoutNews from '../../Layout/LayoutNews'
import Button from '../../button/Button'

import semillaImg from '../../../images/NEWS/Imagen 11.jpg'

import '../../../styles/pages/extractos-semillas.css'
import '../../../styles/pages/news/news-pages.css'
import '../../../styles/pages/news/news-mediaQueries.css'

const NewsPage = ({ location }) => {
    const renderExtractos = () => {
        return (
            <>
                <div className='news-page-header'>
                    <div className='news-page-header-title'>
                        <h1 className='news-page-h1'>¿Qué son los polifenoles de uva?</h1>
                        <p>
                            <b>Los polifenoles de uva son sustancias antioxidantes que se encuentran en la composición de los distintos vegetales, existiendo miles de compuestos fenólicos diferentes en la naturaleza. </b>
                            <span className="parrafo">La clasificación de los polifenoles se puede resumir en dos grandes grupos, que son los flavonoides y los no flavonoides. Dentro del grupo de los flavonoides encontramos varios subgrupos como las antocianinas, las flavonas, los flavonoles o las chalconas. En el grupo de los no flavonoides se encuentran otros componentes fenólicos como los ácidos fenólicos, los estilbenos (resveratrol) o las ligninas. También existe otro grupo de polifenoles formados por 3 o más subunidades fenólicas denominado taninos.</span>
                            <span className="parrafo">Los polifenoles de la uva se focalizan en su mayor medida en las partes sólidas, encontrando una alta concentración de los mismos en la piel y en la pepita de la uva. Entre los diferentes compuestos fenólicos que podemos encontrar en la uva, destacan las procianidinas, que son compuestos oligoméricos presentes en la semilla de la uva, y las antocianinas, presentes únicamente en la piel de la uva tinta y son responsables de proporcionar el pigmento rojo característico de los vinos tintos.</span>
                            <span className="parrafo">Los polifenoles de uva procedentes de la <i>Vitis Vinifera</i> están considerados como uno de los antioxidantes naturales más potentes que existen. Gracias a su eficacia para combatir las moléculas encargadas de dañar el metabolismo humano (los llamados radicales libres), estos compuestos fenólicos son cada vez más demandados en las diferentes industrias con el fin de ofrecer polifenoles con un importante valor añadido para sus consumidores, ya sean en nutrición humana o en nutrición animal.  </span>
                        </p>
                    </div>
                    <div className='news-page-header-apli-carac-img-container'>
                        <div className='news-page-header-apli-carac-container'>
                            <div className='news-page-header-apli-container'>
                                <h2 className='news-page-h2'>En Vinumar somos especialistas en la extracción de polifenoles de uva.</h2>
                                <p>
                                    <b>En Vinumar somos especialistas en la extracción de polifenoles de uva.</b> La experiencia, unida a la fuerte inversión en equipamientos de alto rendimiento, nos permiten ofrecer una gran flexibilidad, pudiendo adaptar nuestras producciones de polifenoles de uva a las necesidades del cliente.
                                    <span className="parrafo">Además, nos encontramos en una de las principales zonas productoras de uva a nivel mundial, por lo que el acceso a la materia prima está garantizado. Esta proximidad, también nos permite procesar la materia prima de manera inmediata, manteniendo sus propiedades y obteniendo polifenoles puros de alta calidad.</span>
                                </p>
                            </div>
                            <div className='news-page-header-carac-container'>
                                <h3 className='news-page-h2'>Polifenoles de uva fabricados por Vinumar y sus aplicaciones.</h3>
                                <p>
                                Nuestro objetivo es obtener el máximo rendimiento de un fruto excepcional: la uva. Para ello, utilizamos los conocimientos adquiridos en nuestros más de 60 años de experiencia, llevando a cabo diferentes técnicas de producción que nos permiten la extracción de los polifenoles existentes en la uva para la elaboración de ingredientes 100% naturales. A continuación pueden encontrar un resumen de los productos de polifenoles de uva ofrecidos por Vinumar.
                                    <span className="parrafo">
                                        <ul>
                                            <li>
                                                <p className='mb-20'>
                                                    <b>Extracto de piel de uva E-163:</b> El extracto de piel de uva se trata de un colorante 100% natural procedente de las uvas tintas. A través de una extracción acuosa conseguimos obtener el elemento principal de este producto, que son los antocianos o antocianinas, una sustancia perteneciente a la familia de los polifenoles, responsable de proporcionar las tonalidades de color rojo, violeta y azul. Este pigmento se encuentra clasificado en el listado de aditivos bajo la referencia E-163 con el nombre de “Antocianinas”. También conocido como enocianina, el extracto de piel de uva es muy utilizado en la formulación de licores y bebidas, ofreciendo ese color característico de la uva tinta. Su uso también es muy popular en la elaboración de helados, confitería, pastelería o incluso mermeladas.
                                                </p>
                                                <Button style='red-button' width='270px' goTo='/#productos'>VER PRODUCTOS</Button>
                                            </li>
                                            <li className='mt-60'>
                                                <p className='mb-20'>
                                                    <b>Extracto de semilla de uva:</b> son compuestos fenólicos que se encuentran en las semillas de las uvas blancas. Las procianidinas oligoméricas (también conocidas con las siglas OPC), son uno de los principales compuestos que se encuentran en los extractos de semillas de uva. Estos polifenoles pertenecen a la familia de los flavonoides, y están considerados como uno de los más potentes antioxidantes naturales que existen, ayudando a proteger las células del cuerpo humano de los daños que causan los radicales libres. Por ello, su principal aplicación se encuentra en la industria alimentaria y nutracéutica, con la elaboración de alimentos y bebidas funcionales y suplementos alimenticios.
                                                </p>
                                                <Button style='red-button' width='270px' goTo='/#productos'>VER PRODUCTOS</Button>
                                            </li>
                                            <li className='mt-60'>
                                                <p className='mb-20'>
                                                    <b>Taninos de uva:</b> son compuestos fenólicos naturales que se encuentran en las diferentes partes de la vid Vitis Vinifera y su fruto, cobrando una especial importancia los taninos concentrados en la piel y en las pepitas de la uva. Estos polifenoles son obtenidos a través de una extracción acuosa de la piel y de las pepitas de las uvas blancas. Los taninos tienen un uso enológico, reforzando las características y la conservación de un vino, ya que aportan los polifenoles naturales necesarios para otorgarle distintas cualidades organolépticas durante la vinificación, actuando sobre su color, estructura, astringencia y amargura.
                                                </p>
                                                <Button style='red-button' width='270px' goTo='/#productos'>VER PRODUCTOS</Button>
                                            </li>
                                            <li className='mt-60'>
                                                <p className='mb-20'>
                                                    <b>Extractos de vino:</b> Se trata de sustancias naturales obtenidas por concentración de vinos tintos o blancos seleccionados y convenientemente desalcoholizados. Se utilizan en bebidas sin alcohol y son básicos para preparados alimentarios, porque sus propiedades aromatizantes y saborizantes les confieren un alto valor gastronómico añadido.
                                                </p>
                                                <Button style='red-button' width='270px' goTo='/#productos'>VER PRODUCTOS</Button>
                                            </li>
                                            <li className='mt-60'>
                                                <p className='mb-20'>
                                                    <b>Polifenoles para la alimentación animal:</b> Extractos de uva con un contenido garantizado en polifenoles utilizados en la industria de la alimentación animal por su alto poder antioxidante, lo que les convierte en un perfecto sustituto de la vitamina E.
                                                </p>
                                                <Button style='red-button' width='270px' goTo='/#productos'>VER PRODUCTOS</Button>
                                            </li>
                                        </ul>
                                    </span>
                                </p>
                            </div>
                            {/* <div className='news-page-button'>
                                <Button style='red-button' width='270px' goTo='/producto/extracto-de-semilla-de-uva'>MÁS INFORMACIÓN</Button>
                            </div> */}
                        </div>
                        <img className='news-semilla-header-img' src={semillaImg} alt="Semilla uva" />
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <Head pageTitle='Polifenoles de uva - Vinumar' description='En Vinumar somos especialistas en polifenoles de uva para diversas aplicaciones. Más de 60 años de experiencia. Contacta con nosotros.' />
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