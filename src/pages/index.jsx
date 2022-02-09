import * as React from "react"
import Navbar from '../components/navbarIndex/NavbarIndex'
import Footer from '../components/footer/Footer'
import Button from '../components/button/Button'

// IMPORT STYLES
import '../styles/index.css'
import useStyles from '../styles/pages/index.style'

// IMPORT PICTURES
import headerImg from '../images/img/DJI_0559.jpg'
import extPiel from '../images/img/Extracto-piel-uva-app.jpg'
import extVino from '../images/img/Extracto-de-vino-caracteristicas.jpg'
import taninosUva from '../images/img/taninos-aplicaciones.jpg'
import alcohol from '../images/img/Alcohol-uso-boca-app.jpg'
import pepitas from '../images/img/Pepita-app.jpg'
import dondeImg from '../images/img/Situacion-Geografica-Carrusel-1.jpg'

// markup
const IndexPage = ({}) => {
  const classes = useStyles()
  const renderHeader = () => {
    return(
      <>
        <div className={classes.contaierHeader}>
          <img className={classes.headerImg} src={headerImg} alt='Vinumar' />
        </div>
      </>
    )
  }
  const RenderTextCentered = ({ text }) => {
    return(
      <p className={classes.textTitle}>{text}</p>
    )
  }
  const ProductoCard = ({title, text, image}) => {
    return(
      <>
        <div className={classes.card}>
          <div className={classes.containerTextCard}>
            <p className={classes.titleCard}>{title}</p>
            <p className={classes.textCard}>{text}</p>
          </div>
          <img src={image} className={classes.cardImg} alt={title} />
        </div>
      </>
    )
  }
  const renderProductos = () => {
    return(
      <>
        <div className={classes.containerProduct}>
          <h2>Productos</h2>
          <div className={classes.containerCards}>
            <ProductoCard 
              title='Extractos de piel de uva'
              text= 'Es uno de los colorantes naturales más destacados en el mundo de la alimentación. El extracto de piel de uva permite una amplia variedad de usos en todos sus tonos de color.'
              image={extPiel}
            />
            <ProductoCard 
              title='Extractos de vino'
              text= 'Aromatizante y saborizante concentrado y desalcoholizado elaborado a partir de vinos tintos y blancos seleccionados. El extracto de vino es el ingrediente secreto de salsas, platos preparados, bebidas no alcohólicas, etc. de uso muy frecuente en alimentación.'
              image={extVino}
            />
            <ProductoCard 
              title='Taninos de uva'
              text= 'Son compuestos fenólicos naturales que se extraen de la piel y las pepitas de la uva. Los taninos, además de potenciadores del sabor, aportan múltiples cualidades en el campo de la enología.'
              image={taninosUva}
            />
            <ProductoCard 
              title='Alcoholes'
              text= 'Fabricados a partir del vino o los subproductos de la vinificación, los alcoholes abarcan desde los aguardientes a los utilizados por la industria química y farmacéutica, el sector sanitario o hasta el energético.'
              image={alcohol}
            />
            <ProductoCard 
              title='Pepita de uva'
              text= 'Fruto del secado del orujo de la uva y su posterior separación, la pepita de uva es la base del aceite de granilla, que contiene vitamina E y ácidos grasos esenciales omega 3 y omega 6.'
              image={pepitas}
            />
          </div>
        </div>

      </>
    )
  }
  const renderDonde = () => {
    return(
      <>
        <div className={classes.containerDonde}>
          <h2>Dónde estamos</h2>
          <div className={classes.cardDonde}>
            <div className={classes.containerDondeText}>
              <p className={classes.dondeDirecc}>ctra. Munera, 5 02600 Villarrobledo Albacete, España</p>
              <div>
                <p>Nos ubicamos en una localización estratégica: Castilla-La Mancha, una de las mayores regiones productoras de uva de alta calidad a escala mundial. Esta cercanía a la materia prima nos garantiza abundancia de suministro y una gran capacidad de producción, para responder a las demandas de nuestros clientes con la máxima rapidez. </p>
                <p>Además, contamos con una red logística de largo alcance por autovía, ferrocarril, transporte aéreo y marítimo, que nos permite llegar allí donde sea preciso. Desde donde estamos todo son ventajas.</p>
              </div>
            </div>
              <img className={classes.dondeImg} src={dondeImg} alt='Donde estamos' />
          </div>
        </div>
      </>
    )
  }

  return (
    <main>
      <Navbar width='451px' />
      <div className={classes.container}>
        {renderHeader()}
        <RenderTextCentered text='En Vinumar somos especialistas en productos derivados de la uva. Combinamos tecnología, agilidad y tradición, con el único objetivo de extraer la máxima calidad de un fruto excepcional: la uva de Castilla-La Mancha.' />
        {renderProductos()}
        {renderDonde()}
        <RenderTextCentered text='Más de 60 años haciendo historia en el mundo de la uva.' />
      </div>
        <Button text='SABER MÁS SOBRE VINUMAR' goTo='/nosotros/Valores' style='red' width='282px' />

      <Footer />
    </main>
  )
}

export default IndexPage