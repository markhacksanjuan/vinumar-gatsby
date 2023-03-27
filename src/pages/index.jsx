import React, { useEffect, useState, useContext } from "react"
import Navbar from '../components/navbarIndex/NavbarIndex'
import Footer from '../components/footer/Footer'
import Button from '../components/button/Button'
import TextCentered from "../components/textCentered/TextCentered"
import { graphql, Link as GatsbyLink } from 'gatsby'
import Layout from "../components/Layout/Layout"
import ReadMore from "../components/readMore/ReadMore"
import Head from "../components/Head/Head"
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next'

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
import dondeImg_en from '../images/ilustraciones/Vinumar_Ilustraciones_Mapa_3.jpg'

import { LangStateContext } from '../components/GlobalContextProvider/GlobalContextProvider'

import { langText } from '../lang'

// markup
const IndexPage = () => {
  const { lang } = useContext(LangStateContext)
  const {t} = useTranslation()
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
            <h2 className="index-h2">{t('title')}</h2>
          </div>
          {/* <Button className='index-card-button button-fade-in' style='white-button' goTo='#productos'>VER PRODUCTOS</Button> */}
          <div className="button-fade-in">
            <Button style='white-button-header' onClickButton={onClickButtonHeader}>{t('ver_productos')}</Button>
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
              <Button className='index-card-button' style='white-button-product' width='164' goTo={goTo}>{t('descubre')}</Button>
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
          <h2>{t('productos.title')}</h2>
          <div className='index-container-cards'>
            <div className={`index-card ${scrollPiel && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title={t('productos.extractos_uva')}
                text={t('productos.extractos_uva_desc')}
                image={extPiel}
                goTo='/producto/extracto-piel-uva'
              />
            </div>
            <div className={`index-card ${scrollVino && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title={t('productos.extractos_vino')}
                text={t('productos.extractos_vino_desc')}
                image={extVino}
                goTo='/producto/extracto-vino'
                className={'index-card-vino'}
              />
            </div>
            <div className={`index-card ${scrollTaninos && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title={t('productos.taninos')}
                text={t('productos.taninos_desc')}
                image={taninosUva}
                goTo='/producto/taninos-uva'
                className={'index-card-tanino'}
              />
            </div>
            <div className={`index-card ${scrollSemillas && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title={t('productos.extractos_semilla')}
                text={t('productos.extractos_semilla_desc')}
                image={taninosUva}
                goTo='/producto/extracto-de-semilla-de-uva'
                className={'index-card-semillas'}
              />
            </div>
            <div className={`index-card ${scrollAlcoholes && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title={t('productos.alcoholes')}
                text={t('productos.alcoholes_desc')}
                image={alcohol}
                goTo='/producto/alcoholes'
                className={'index-card-alcohol'}
              />
            </div>
            <div className={`index-card ${scrollPepita && 'index-card-animated-bottom'}`}>
              <ProductoCard 
                title={t('productos.pepita')}
                text={t('productos.pepita_desc')}
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
          <h2>{t('donde_estamos.title')}</h2>
          <div className={`index-card-donde `}>
            <div className={`index-container-donde-text `}>
              <p className={`index-donde-direccion ${scrollDonde && 'index-donde-direccion-animated'}`}>ctra. Munera, 5
                <span>02600 Villarrobledo</span>
                <span>Albacete, {t('pais')}</span>
              </p>
              <div className={`index-donde-text ${scrollDonde && 'index-donde-text-animated'}`}>
                <ReadMore width={screenWidth} lang={lang}>
                  <div>
                    {t('donde_estamos.desc')}
                    <span className='parrafo'>{t('donde_estamos.desc_2')}</span>
                  </div>
                </ReadMore>
              </div>
            </div>
              <div className="view-donde">
                <img className={`index-donde-img ${scrollDonde && 'index-donde-img-animated'}`} src={lang === 'es' ? dondeImg : dondeImg_en} alt='Donde estamos' />
                <div className="mask-donde">
                  <Button className='index-card-button' style='white-button'  width='164' goTo='/donde-estamos'>{t('donde_estamos.title').toUpperCase()}</Button>
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
      <Layout>
        <div className='index-container'>
          {renderHeader()}
          <div className={`text-centered-bottom ${scrollTextCentered_1  ? 'text-centered-animated-bottom' : ''}`}>
            <TextCentered>{t('frase1')}</TextCentered>
          </div>
          {renderProductos()}
          {renderDonde()}
          <div className={`text-centered-fade-in ${scrollTextCentered_2 && 'fade-in'}`}>
            <TextCentered width='960px' margin='60px'>{t('frase2')}</TextCentered>
          </div>
        </div>
          <div className={`index-button-mas ${scrollButton && 'fade-in'}`}>
            <Button text='SABER MÁS SOBRE VINUMAR' goTo='/sobre-nosotros/valores' style='red-button' width='292px'>{t('saber_mas')}</Button>
          </div>
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: {ns: {in: ["index", "common"]}, language: {eq: $language}}) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`