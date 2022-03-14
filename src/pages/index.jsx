import * as React from "react"
import Navbar from '../components/navbarIndex/NavbarIndex'
import Footer from '../components/footer/Footer'
import Button from '../components/button/Button'
import TextCentered from "../components/textCentered/TextCentered"
import { Link } from 'gatsby'

// IMPORT STYLES
import '../styles/index.css'
import '../styles/pages/index-page.css'

// IMPORT PICTURES
import headerImg from '../images/selected/DJI_0698 (principal).jpg'
import extPiel from '../images/selected/CAS_3593 (color polvo).jpg'
import extVino from '../images/img/Extracto-de-vino-caracteristicas.jpg'
import taninosUva from '../images/selected/taninos.jpg'
import alcohol from '../images/img/Alcohol-uso-boca-app.jpg'
import pepitas from '../images/selected/granilla.jpg'
import dondeImg from '../images/ilustraciones/Vinumar_Ilustraciones_Mapa_2.jpg'

// markup
const IndexPage = ({}) => {
  const renderHeader = () => {
    return(
      <>
        <div className='index-container-header'>
          <img src={headerImg} alt='Vinumar' />
          <div className="index-container-header-h2">
            <h2>Más de 60 años de tradición e innovación en el mundo de la uva.</h2>
          </div>
          <Button className='index-card-button' style='white-button' goTo='#productos'>VER PRODUCTOS</Button>

        </div>
      </>
    )
  }
  const ProductoCard = ({title, text, image, goTo}) => {
    return(
      <>
        <div className='index-card'>
          <div className='index-container-text-card'>
            <p className='index-title-card'>{title}</p>
            <p className='index-text-card'>{text}</p>
          </div>
          <div>
            <img src={image} className='index-card-img' alt={title} />
            <Button className='index-card-button' style='white-button' width='164' goTo={goTo}>DESCUBRE MÁS</Button>
          </div>
        </div>
      </>
    )
  }
  const renderProductos = () => {
    return(
      <>
        <div id='productos' className='index-container-product'>
          <h2>Productos</h2>
          <div className='index-container-cards'>
            <ProductoCard 
              title='Extractos de piel de uva'
              text= 'Es uno de los colorantes naturales más destacados en el mundo de la alimentación. El extracto de piel de uva permite una amplia variedad de usos en todos sus tonos de color.'
              image={extPiel}
              goTo='/productos/ExtractosPiel'
            />
            <ProductoCard 
              title='Extractos de vino'
              text= 'Aromatizante y saborizante concentrado y desalcoholizado elaborado a partir de vinos tintos y blancos seleccionados. El extracto de vino es el ingrediente secreto de salsas, platos preparados, bebidas no alcohólicas, etc. de uso muy frecuente en alimentación.'
              image={extVino}
              goTo='/productos/ExtractosVino'
            />
            <ProductoCard 
              title='Taninos de uva'
              text= 'Son compuestos fenólicos naturales que se extraen de la piel y las pepitas de la uva. Los taninos, además de potenciadores del sabor, aportan múltiples cualidades en el campo de la enología.'
              image={taninosUva}
              goTo='/productos/Taninos'
            />
            <ProductoCard 
              title='Alcoholes'
              text= 'Fabricados a partir del vino o los subproductos de la vinificación, los alcoholes abarcan desde los aguardientes a los utilizados por la industria química y farmacéutica, el sector sanitario o hasta el energético.'
              image={alcohol}
              goTo='/productos/Alcoholes'
            />
            <ProductoCard 
              title='Pepita de uva'
              text= 'Fruto del secado del orujo de la uva y su posterior separación, la pepita de uva es la base del aceite de granilla, que contiene vitamina E y ácidos grasos esenciales omega 3 y omega 6.'
              image={pepitas}
              goTo='/productos/Pepita'
            />
          </div>
        </div>

      </>
    )
  }
  const renderDonde = () => {
    return(
      <>
        <div className='index-container-donde'>
          <h2>Dónde estamos</h2>
          <div className='index-card-donde'>
            <div className='index-container-donde-text'>
              <p className='index-donde-direccion'>ctra. Munera, 5
                <span>02600 Villarrobledo</span>
                <span>Albacete, España</span>
              </p>
              <div>
                <p>Nos ubicamos en una localización estratégica: Castilla-La Mancha, una de las mayores regiones productoras de uva de alta calidad a escala mundial. Esta cercanía a la materia prima nos garantiza abundancia de suministro y una gran capacidad de producción, para responder a las demandas de nuestros clientes con la máxima rapidez.
                <span className="parrafo">Además, contamos con una red logística de largo alcance por autovía, ferrocarril, transporte aéreo y marítimo, que nos permite llegar allí donde sea preciso. Desde donde estamos todo son ventajas.</span>
                </p>
              </div>
            </div>
              <img className='index-donde-img' src={dondeImg} alt='Donde estamos' />
          </div>
        </div>
      </>
    )
  }

  return (
    <main>
      <Navbar width='451px' />
      <div className='index-container'>
        {renderHeader()}
        <TextCentered>En Vinumar somos especialistas en productos derivados de la uva. Combinamos tecnología, agilidad y tradición, con el único objetivo de extraer la máxima calidad de un fruto excepcional: la uva de Castilla-La Mancha.</TextCentered>
        {renderProductos()}
        {renderDonde()}
        <TextCentered width='960px'>Más de 60 años haciendo historia en el mundo de la uva.</TextCentered>
      </div>
        <Button text='SABER MÁS SOBRE VINUMAR' goTo='/nosotros/Valores' style='red-button' width='292px'>SABER MÁS SOBRE VINUMAR</Button>

      <Footer />
    </main>
  )
}

export default IndexPage
