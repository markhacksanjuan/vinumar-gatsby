import React, { useEffect, useState } from "react"
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
import extPiel from '../images/DEF/BL8A9509_1.jpg'
import extVino from '../images/DEF/BL8A9953_1.jpg'
import taninosUva from '../images/DEF/BL8A9520_1.jpg'
import alcohol from '../images/DEF/BL8A9307.jpg'
import pepitas from '../images/DEF/BL8A9093.jpg'
import dondeImg from '../images/ilustraciones/Vinumar_Ilustraciones_Mapa_2.jpg'

// markup
const IndexPage = ({}) => {
  const [scroll, setScroll] = useState()
  const [scrollTextCentered_1, setScrollTextCentered_1] = useState(false)
  const [scrollTextCentered_2, setScrollTextCentered_2] = useState(false)
  const [scrollProductos, setScrollProductos] = useState(false)
  const [scrollPiel, setScrollPiel] = useState(false)
  const [scrollVino, setScrollVino] = useState(false)
  const [scrollTaninos, setScrollTaninos] = useState(false)
  const [scrollAlcoholes, setScrollAlcoholes] = useState(false)
  const [scrollPepita, setScrollPepita] = useState(false)
  const [scrollButton, setScrollButton] = useState(false)
  const [scrollDonde, setScrollDonde] = useState(false)

  useEffect(() => {
    if(typeof window !== 'undefined'){
      window.onscroll = () => {
        const factor = window.scrollY
        setScroll(factor)
        if(factor > 80) { setScrollTextCentered_1(true) }
        if(factor > 400) { setScrollProductos(true) }
        if(factor > 500) { setScrollPiel(true) }
        if(factor > 600) { setScrollVino(true) }
        if(factor > 1000) { setScrollTaninos(true) }
        if(factor > 1100) { setScrollAlcoholes(true) }
        if(factor > 1500) { setScrollPepita(true) }
        if(factor > 3000) { setScrollTextCentered_2(true) }
        if(factor > 3200) { setScrollButton(true) }
        if(factor > 2400) { setScrollDonde(true) }
      }
      window.scrollBy({
        top: -window.innerHeight,
        left: 0,
        behavior: 'smooth'
      })
    } 
  }, [])



  const renderHeader = () => {
    return(
      <>
        <div className='index-container-header'>
          <img src={headerImg} alt='Vinumar' />
          <div className="index-container-header-h2">
            <h2 className="index-h2">Más de 60 años de tradición e innovación en el mundo de la uva.</h2>
          </div>
          {/* <Button className='index-card-button button-fade-in' style='white-button' goTo='#productos'>VER PRODUCTOS</Button> */}
          <div className="button-fade-in">
            <Button style='white-button' goTo='#productos'>VER PRODUCTOS</Button>
          </div>

        </div>
      </>
    )
  }
  const ProductoCard = ({ title, text, image, goTo }) => {
    return(
      <>
        {/* <div className={`index-card`}> */}
          <div className={`index-container-text-card`}>
            <p className='index-title-card'>{title}</p>
            <p className='index-text-card'>{text}</p>
          </div>
          <div className="view">
            <img src={image} className='index-card-img' alt={title} />
            <div className="mask">
              <Button className='index-card-button' style='white-button' width='164' goTo={goTo}>DESCUBRE MÁS</Button>
            </div>
          </div>
        {/* </div> */}
      </>
    )
  }
  const renderProductos = () => {
    return(
      <>
        <div id='productos' className={`index-container-product ${scrollProductos && 'index-container-product-animated'}`}>
          <h2>Productos</h2>
          <div className='index-container-cards'>
            <div className={`index-card ${scrollPiel && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title='Extractos de piel de uva'
                text= 'Es uno de los colorantes naturales más destacados en el mundo de la alimentación. El extracto de piel de uva permite una amplia variedad de usos en todos sus tonos de color.'
                image={extPiel}
                goTo='/productos/ExtractosPiel'
              />
            </div>
            <div className={`index-card ${scrollVino && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title='Extractos de vino'
                text= 'Aromatizante y saborizante concentrado y desalcoholizado elaborado a partir de vinos tintos y blancos seleccionados. El extracto de vino es el ingrediente secreto de salsas, platos preparados, bebidas no alcohólicas, etc. de uso muy frecuente en alimentación.'
                image={extVino}
                goTo='/productos/ExtractosVino'
              />
            </div>
            <div className={`index-card ${scrollTaninos && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title='Taninos de uva'
                text= 'Son compuestos fenólicos naturales que se extraen de la piel y las pepitas de la uva. Los taninos, además de potenciadores del sabor, aportan múltiples cualidades en el campo de la enología.'
                image={taninosUva}
                goTo='/productos/Taninos'
              />
            </div>
            <div className={`index-card ${scrollAlcoholes && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title='Alcoholes'
                text= 'Fabricados a partir del vino o los subproductos de la vinificación, los alcoholes abarcan desde los aguardientes a los utilizados por la industria química y farmacéutica, el sector sanitario o hasta el energético.'
                image={alcohol}
                goTo='/productos/Alcoholes'
              />
            </div>
            <div className={`index-card ${scrollPepita && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title='Pepita de uva'
                text= 'Fruto del secado del orujo de la uva y su posterior separación, la pepita de uva es la base del aceite de granilla, que contiene vitamina E y ácidos grasos esenciales omega 3 y omega 6.'
                image={pepitas}
                goTo='/productos/Pepita'
              />
            </div>
          </div>
        </div>

      </>
    )
  }
  const renderDonde = () => {
    return(
      <>
        <div className={`index-container-donde ${scrollDonde && 'donde-animated'}`}>
          <h2>Dónde estamos</h2>
          <div className={`index-card-donde `}>
            <div className={`index-container-donde-text `}>
              <p className={`index-donde-direccion ${scrollDonde && 'index-donde-direccion-animated'}`}>ctra. Munera, 5
                <span>02600 Villarrobledo</span>
                <span>Albacete, España</span>
              </p>
              <div className={`index-donde-text ${scrollDonde && 'index-donde-text-animated'}`}>
                <p>Nos ubicamos en una localización estratégica: Castilla-La Mancha, una de las mayores regiones productoras de uva de alta calidad a escala mundial. Esta cercanía a la materia prima nos garantiza abundancia de suministro y una gran capacidad de producción, para responder a las demandas de nuestros clientes con la máxima rapidez.
                <span className="parrafo">Además, contamos con una red logística de largo alcance por autovía, ferrocarril, transporte aéreo y marítimo, que nos permite llegar allí donde sea preciso. Desde donde estamos todo son ventajas.</span>
                </p>
              </div>
            </div>
              <img className={`index-donde-img ${scrollDonde && 'index-donde-img-animated'}`} src={dondeImg} alt='Donde estamos' />
          </div>
        </div>
      </>
    )
  }

  return (
    <main>
      <Navbar scrollPage={scroll}/>
      <div className='index-container'>
        {renderHeader()}
        <div className={`text-centered-bottom ${scrollTextCentered_1  && 'text-centered-animated-bottom'}`}>
          <TextCentered>En Vinumar somos especialistas en productos derivados de la uva. Combinamos tecnología, agilidad y tradición, con el único objetivo de extraer la máxima calidad de un fruto excepcional: la uva de Castilla-La Mancha.</TextCentered>
        </div>
        {renderProductos()}
        {renderDonde()}
        <div className={`text-centered-fade-in ${scrollTextCentered_2 && 'fade-in'}`}>
          <TextCentered width='960px' margin='60px'>Más de 60 años haciendo historia en el mundo de la uva.</TextCentered>
        </div>
      </div>
        <div className={`index-button-mas ${scrollButton && 'fade-in'}`}>
          <Button text='SABER MÁS SOBRE VINUMAR' goTo='/nosotros/Valores' style='red-button' width='292px'>SABER MÁS SOBRE VINUMAR</Button>
        </div>

      <Footer />
    </main>
  )
}

export default IndexPage
