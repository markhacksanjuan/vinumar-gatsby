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
                        <h1 className='news-page-h1'>¿Qué son los productos derivados de la uva?</h1>
                        <p>
                            <b>Los productos derivados de la uva son aquellos subproductos que resultan del procesamiento del fruto,</b> ya sea de forma directa o mediante el procesamiento de los remanentes originados en estas actividades, como sería el caso del orujo de uva en la vinificación.
                            <span className="parrafo">La uva contiene una gran presencia de polifenoles y, por consiguiente, los productos derivados de la misma. Los polifenoles son sustancias antioxidantes que se encuentran en la composición de los distintos vegetales, existiendo miles de compuestos fenólicos diferentes en la naturaleza.</span>
                            <span className="parrafo">Los polifenoles de la uva se focalizan en su mayor medida en las partes sólidas, encontrando una alta concentración de los mismos en la piel y en la pepita de la uva. Entre los diferentes compuestos fenólicos que podemos encontrar en la uva, destacan las procianidinas, que son compuestos oligoméricos presentes en la semilla de la uva, y las antocianinas, presentes únicamente en la piel de la uva tinta y son responsables de proporcionar el pigmento rojo característico de los vinos tintos.</span>
                            <span className="parrafo">Los polifenoles de uva procedentes de la <i>Vitis Vinifera</i> están considerados como uno de los antioxidantes naturales más potentes que existen. Gracias a su eficacia para combatir las moléculas encargadas de dañar el metabolismo humano (los llamados radicales libres), estos compuestos fenólicos son cada vez más demandados en las diferentes industrias con el fin de ofrecer productos con un importante valor añadido para sus consumidores, ya sean en nutrición humana o en nutrición animal.  </span>
                        </p>
                    </div>
                    <div className='news-page-header-apli-carac-img-container'>
                        <div className='news-page-header-apli-carac-container'>
                            <div className='news-page-header-apli-container'>
                                <h2 className='news-page-h2'>En Vinumar somos especialistas en la fabricación de productos derivados de la uva.</h2>
                                <p>
                                    <b>En Vinumar somos especialistas en la fabricación de productos derivados de la uva.</b> La experiencia, unida a la fuerte inversión en equipamientos de alto rendimiento, nos permiten ofrecer una gran flexibilidad, pudiendo adaptar nuestras diferentes producciones a las necesidades del cliente.
                                    <span className="parrafo">Además, nos encontramos en una de las principales zonas productoras de uva a nivel mundial, por lo que el acceso a la materia prima está garantizado. Esta proximidad, también nos permite procesar la materia prima de manera inmediata, manteniendo sus propiedades y obteniendo  productos puros de alta calidad.</span>
                                </p>
                            </div>
                            <div className='news-page-header-carac-container'>
                                <h3 className='news-page-h2'>Productos derivados de la uva fabricados por Vinumar y sus aplicaciones.</h3>
                                <p>
                                Nuestro objetivo es obtener el máximo rendimiento de un fruto excepcional: la uva. Para ello, utilizamos los conocimientos adquiridos en nuestros más de 60 años de experiencia, llevando a cabo diferentes técnicas de producción que nos permiten la elaboración de diferentes productos naturales, todos ellos procedentes de la uva.
                                    <span className="parrafo">A continuación pueden encontrar un resumen de los productos derivados de la uva ofrecidos por Vinumar.</span>
                                    <span className="parrafo">
                                        <ul>
                                            <li><b>Extracto de piel de uva E-163:</b> El extracto de piel de uva se trata de un colorante 100% natural procedente de las uvas tintas. A través de una extracción acuosa conseguimos obtener el elemento principal de este producto, que son los antocianos o antocianinas, una sustancia perteneciente a la familia de los polifenoles, responsable de proporcionar las tonalidades de color rojo, violeta y azul. Este pigmento se encuentra clasificado en el listado de aditivos bajo la referencia E-163 con el nombre de “Antocianinas”. También conocido como enocianina, el extracto de piel de uva es muy utilizado en la formulación de licores y bebidas, ofreciendo ese color característico de la uva tinta. Su uso también es muy popular en la elaboración de helados, confitería, pastelería o incluso mermeladas.</li>
                                            <li><b>Extracto de semilla de uva:</b> son compuestos fenólicos que se encuentran en las semillas de las uvas blancas. Las procianidinas oligoméricas (también conocidas con las siglas OPC), son uno de los principales compuestos que se encuentran en los extractos de semillas de uva. Estos polifenoles pertenecen a la familia de los flavonoides, y están considerados como uno de los más potentes antioxidantes naturales que existen, ayudando a proteger las células del cuerpo humano de los daños que causan los radicales libres. Por ello, su principal aplicación se encuentra en la industria alimentaria y nutracéutica, con la elaboración de alimentos y bebidas funcionales y suplementos alimenticios.</li>
                                            <li><b>Taninos de uva:</b> son compuestos fenólicos naturales que se encuentran en las diferentes partes de la vid Vitis Vinifera y su fruto, cobrando una especial importancia los taninos concentrados en la piel y en las pepitas de la uva. Estos polifenoles son obtenidos a través de una extracción acuosa de la piel y de las pepitas de las uvas blancas. Los taninos tienen un uso enológico, reforzando las características y la conservación de un vino, ya que aportan los polifenoles naturales necesarios para otorgarle distintas cualidades organolépticas durante la vinificación, actuando sobre su color, estructura, astringencia y amargura.</li>
                                            <li><b>Extractos de vino:</b> Se trata de sustancias naturales obtenidas por concentración de vinos tintos o blancos seleccionados y convenientemente desalcoholizados. Se utilizan en bebidas sin alcohol y son básicos para preparados alimentarios, porque sus propiedades aromatizantes y saborizantes les confieren un alto valor gastronómico añadido.</li>
                                            <li><b>Polifenoles para la alimentación animal:</b> Extractos de uva con un contenido garantizado en polifenoles utilizados en la industria de la alimentación animal por su alto poder antioxidante, lo que les convierte en un perfecto sustituto de la vitamina E.</li>
                                            <li><b>Alcoholes:</b> Todos los alcoholes que fabricamos en nuestras instalaciones son de procedencia exclusivamente vínica, y se obtienen en columnas de flujo continuo a partir del vino o de los subproductos de vinificación. Sus aplicaciones son variadas, pudiendo ser utilizados en la industria energética, química, farmacéutica o alimentaria.</li>
                                            <li><b>Pepita de uva:</b> También conocida como granilla de uva, nuestra pepita de uva cuenta con un nivel de acidez, humedad y porcentaje de materia grasa óptimos, perfecta para la obtención de aceite de granilla.</li>
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
            <Head pageTitle='Productos derivados de uva - Vinumar' description='En Vinumar somos especialistas en productos derivados de la uva para diversas aplicaciones. Más de 60 años de experiencia. Contacta con nosotros.' />
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