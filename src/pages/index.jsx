import React, { useEffect, useState, useContext } from "react"
import Navbar from '../components/navbarIndex/NavbarIndex'
import Footer from '../components/footer/Footer'
import Button from '../components/button/Button'
import TextCentered from "../components/textCentered/TextCentered"
import { Link } from 'gatsby'
import Layout from "../components/Layout/Layout"

// IMPORT STYLES
import '../styles/index.css'
import '../styles/pages/index-page.css'
import '../styles/pages/mediaQueries/index-page-media.css'

// IMPORT PICTURES
import headerImg from '../images/selected/DJI_0698 (principal).jpg'
import extPiel from '../images/DEF/BL8A9509_1.jpg'
import extVino from '../images/DEF/BL8A9953_1.jpg'
import taninosUva from '../images/DEF/BL8A9520_1.jpg'
import alcohol from '../images/DEF/BL8A9307.jpg'
import pepitas from '../images/DEF/BL8A9093.jpg'
import dondeImg from '../images/ilustraciones/Vinumar_Ilustraciones_Mapa_2.jpg'

import { LangStateContext } from '../components/GlobalContextProvider/GlobalContextProvider'

import { langText } from '../lang'

// markup
const IndexPage = () => {
  const { lang } = useContext(LangStateContext)
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
  
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.screen.width : 1920)

  useEffect(() => {
    if(typeof window !== 'undefined'){
      console.log(window.screen)
    }
  }, [])

  useEffect(() => {
    if(typeof window !== 'undefined'){
      window.onscroll = () => {
        const factor = window.scrollY
        setScroll(factor)
        if(factor > 100) { setScrollTextCentered_1(true) }
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
            <h2 className="index-h2">{langText.index.head_title[lang]}</h2>
          </div>
          {/* <Button className='index-card-button button-fade-in' style='white-button' goTo='#productos'>VER PRODUCTOS</Button> */}
          <div className="button-fade-in">
            <Button style='white-button-header' goTo='#productos'>{langText.index.button_view_products[lang]}</Button>
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
              <Button className='index-card-button' style='white-button-product' width='164' goTo={goTo}>{langText.index.products.button_more[lang]}</Button>
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
          <h2>{langText.index.products.title[lang]}</h2>
          <div className='index-container-cards'>
            <div className={`index-card ${scrollPiel && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title={langText.index.products.grape_skin.title[lang]}
                text={langText.index.products.grape_skin.text[lang]}
                image={extPiel}
                goTo='/producto/extracto-piel-uva'
              />
            </div>
            <div className={`index-card ${scrollVino && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title={langText.index.products.wine_extracts.title[lang]}
                text={langText.index.products.wine_extracts.text[lang]}
                image={extVino}
                goTo='/producto/extracto-vino'
              />
            </div>
            <div className={`index-card ${scrollTaninos && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title={langText.index.products.grape_tannins.title[lang]}
                text={langText.index.products.grape_tannins.text[lang]}
                image={taninosUva}
                goTo='/producto/taninos-uva'
              />
            </div>
            <div className={`index-card ${scrollAlcoholes && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title={langText.index.products.alcohols.title[lang]}
                text={langText.index.products.alcohols.text[lang]}
                image={alcohol}
                goTo='/producto/alcoholes'
              />
            </div>
            <div className={`index-card ${scrollPepita && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title={langText.index.products.grape_seed.title[lang]}
                text={langText.index.products.grape_seed.text[lang]}
                image={pepitas}
                goTo='/producto/pepita-de-uva'
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
          <h2>{langText.index.where.title[lang]}</h2>
          <div className={`index-card-donde `}>
            <div className={`index-container-donde-text `}>
              <p className={`index-donde-direccion ${scrollDonde && 'index-donde-direccion-animated'}`}>ctra. Munera, 5
                <span>02600 Villarrobledo</span>
                <span>Albacete, España</span>
              </p>
              <div className={`index-donde-text ${scrollDonde && 'index-donde-text-animated'}`}>
                <p>{langText.index.where.text_top[lang]}
                <span className="parrafo">{langText.index.where.text_bottom[lang]}</span>
                </p>
              </div>
            </div>
              <div className="view-donde">
                <img className={`index-donde-img ${scrollDonde && 'index-donde-img-animated'}`} src={dondeImg} alt='Donde estamos' />
                <div className="mask-donde">
                  <Button className='index-card-button' style='white-button'  width='164' goTo='/DondeEstamos'>{langText.index.where.button_where[lang]}</Button>
                </div>
              </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Layout>
        <div className='index-container'>
          {renderHeader()}
          <div className={`text-centered-bottom ${scrollTextCentered_1  ? 'text-centered-animated-bottom' : ''}`}>
            <TextCentered>{langText.index.text_centered_top[lang]}</TextCentered>
          </div>
          {renderProductos()}
          {renderDonde()}
          <div className={`text-centered-fade-in ${scrollTextCentered_2 && 'fade-in'}`}>
            <TextCentered width='960px' margin='60px'>{langText.index.text_centered_bottom[lang]}</TextCentered>
          </div>
        </div>
          <div className={`index-button-mas ${scrollButton && 'fade-in'}`}>
            <Button text='SABER MÁS SOBRE VINUMAR' goTo='/sobre-nosotros/valores' style='red-button' width='292px'>{langText.index.button_know_more[lang]}</Button>
          </div>
      </Layout>
    </>
  )
}

export default IndexPage
