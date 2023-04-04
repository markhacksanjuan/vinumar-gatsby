import React, { useEffect, useState } from "react"
import Button from '../button/Button'
import TextCentered from "../textCentered/TextCentered"
import Layout from "../Layout/Layout"
import ReadMore from "../readMore/ReadMore"
import Head from "../Head/Head"

// IMPORT STYLES
import '../../styles/index.css'
import '../../styles/pages/index-page.css'
import '../../styles/pages/mediaQueries/index-page-media.css'

// IMPORT PICTURES
import headerImg from '../../images/selected/DJI_0698 (principal).jpg'
import extPiel from '../../images/DEF/BL8A9509_1.jpg'
import extVino from '../../images/DEF/BL8A9953_1.jpg'
import taninosUva from '../../images/DEF/BL8A9520_1.jpg'
import alcohol from '../../images/DEF/BL8A9307.jpg'
import pepitas from '../../images/DEF/BL8A9093.jpg'
import dondeImg from '../../images/ilustraciones/Vinumar_Ilustraciones_Mapa_2.jpg'
import dondeImg_en from '../../images/ilustraciones/Vinumar_Ilustraciones_Mapa_3.jpg'
// import semillaImg from '../../images/DEF/productos/semillas/Recorte_pagina_inicio.png'
import semillaImg from '../../images/DEF/productos/semillas/BL8A9208_3.jpg'

import { langText } from '../../lang'

// markup
const IndexPage = ({ lang, location }) => {
//   const { lang } = useContext(LangStateContext)
  const [scroll, setScroll] = useState()
  const [scrollTextCentered_1, setScrollTextCentered_1] = useState(false)
  const [scrollTextCentered_2, setScrollTextCentered_2] = useState(false)
  const [scrollProductos, setScrollProductos] = useState(false)
  const [scrollPiel, setScrollPiel] = useState(false)
  const [scrollVino, setScrollVino] = useState(false)
  const [scrollTaninos, setScrollTaninos] = useState(false)
  const [scrollSemillas, setScrollSemillas] = useState(false)
  const [scrollAlcoholes, setScrollAlcoholes] = useState(false)
  const [scrollPepita, setScrollPepita] = useState(false)
  const [scrollButton, setScrollButton] = useState(false)
  const [scrollDonde, setScrollDonde] = useState(false)
  
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.screen.width : 1920)

  useEffect(() => {
    if(typeof window !== 'undefined'){
      window.addEventListener('resize', e => {
        setScreenWidth(window.screen.width)
      })
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
        if(factor > 1100) { setScrollSemillas(true)}
        if(factor > 1500) { setScrollAlcoholes(true) }
        if(factor > 1600) { setScrollPepita(true) }
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

  const onClickButtonHeader = () => {
    setScrollProductos(true)
    if(typeof window !== 'undefined') {
      if(screenWidth < 281) {
        window.scrollBy({
          top: 1260,
          left: 0,
          behavior: 'smooth'
        })
      }
      else if(screenWidth < 426) {
        window.scrollBy({
          top: 1580,
          left: 0,
          behavior: 'smooth'
        })
      }
      else if(screenWidth < 769) {
        window.scrollBy({
          top: 1380,
          left: 0,
          behavior: 'smooth'
        })
      }
      else if(screenWidth < 1025) {
        window.scrollBy({
          top: 1280,
          left: 0,
          behavior: 'smooth'
        })
      }
      else if(screenWidth < 1441) {
        window.scrollBy({
          top: 1460,
          left: 0,
          behavior: 'smooth'
        })
      }
      else {
        window.scrollBy({
          top: 1460,
          left: 0,
          behavior: 'smooth'
        })
      }
    }
  }

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
            <Button style='white-button-header' onClickButton={onClickButtonHeader}>{langText.index.button_view_products[lang]}</Button>
          </div>

        </div>
      </>
    )
  }
  const ProductoCard = ({ title, text, image, goTo, className }) => {
    return(
      <>
        {/* <div className={`index-card`}> */}
          <div className={`index-container-text-card`}>
            <p className='index-title-card'>{title}</p>
            <p className='index-text-card'>{text}</p>
          </div>
          <div className="view">
            <img src={image} className={`index-card-img ${className ? className : ''}`} alt={title} />
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
                goTo={lang === 'es' ? '/producto/extracto-piel-uva' : '/en/product/grape-skin-extracts'}
              />
            </div>
            <div className={`index-card ${scrollVino && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title={langText.index.products.wine_extracts.title[lang]}
                text={langText.index.products.wine_extracts.text[lang]}
                image={extVino}
                goTo={lang === 'es' ? '/producto/extracto-vino' : '/en/product/wine-extracts'}
                className={'index-card-vino'}
              />
            </div>
            <div className={`index-card ${scrollTaninos && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title={langText.index.products.grape_tannins.title[lang]}
                text={langText.index.products.grape_tannins.text[lang]}
                image={taninosUva}
                goTo={lang === 'es' ? '/producto/taninos-uva' : '/en/product/grape-tannins'}
                className={'index-card-tanino'}
              />
            </div>
            <div className={`index-card ${scrollSemillas && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title={langText.index.products.semillas.title[lang]}
                text={langText.index.products.semillas.text[lang]}
                image={semillaImg}
                goTo={lang === 'es' ? '/producto/extracto-de-semilla-de-uva' : '/en/product/grape-seed-extract'}
                className={'index-card-semillas'}
              />
            </div>
            <div className={`index-card ${scrollAlcoholes && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title={langText.index.products.alcohols.title[lang]}
                text={langText.index.products.alcohols.text[lang]}
                image={alcohol}
                goTo={lang === 'es' ? '/producto/alcoholes' : '/en/product/alcohols'}
                className={'index-card-alcohol'}
              />
            </div>
            <div className={`index-card ${scrollPepita && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title={langText.index.products.grape_seed.title[lang]}
                text={langText.index.products.grape_seed.text[lang]}
                image={pepitas}
                goTo={lang === 'es' ? '/producto/pepita-de-uva' : '/en/product/grape-seed'}
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
                <span>Albacete, {langText.common.country[lang]}</span>
              </p>
              <div className={`index-donde-text ${scrollDonde && 'index-donde-text-animated'}`}>
                <ReadMore width={screenWidth} lang={lang}>
                  <div>
                    {langText.index.where.text_top[lang]}
                    <span className='parrafo'>{langText.index.where.text_bottom[lang]}</span>
                  </div>
                </ReadMore>
              </div>
            </div>
              <div className="view-donde">
                <img className={`index-donde-img ${scrollDonde && 'index-donde-img-animated'}`} src={lang === 'es' ? dondeImg : dondeImg_en} alt='Donde estamos' />
                <div className="mask-donde">
                  <Button className='index-card-button' style='white-button'  width='164' goTo='/donde-estamos'>{langText.index.where.button_where[lang]}</Button>
                </div>
              </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head/>
      <Layout pageLocation={location}>
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
            <Button text='SABER MÁS SOBRE VINUMAR' goTo={lang === 'es' ? '/sobre-nosotros/valores' : '/en/about-us/values'} style='red-button' width='292px'>{langText.index.button_know_more[lang]}</Button>
          </div>
      </Layout>
    </>
  )
}

export default IndexPage