import React, { useState, useEffect, useContext } from 'react'
import { Link as GatsbyLink, graphql } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../../images/img/VIN_Logo_V2.svg'
import './navbarIndex.css'
import './navbarIndex-media.css'
import './navbarIndex-burger.css'
import {LangStateContext, LangDispatchContext} from '../GlobalContextProvider/GlobalContextProvider'

import { Link, useI18next, Trans, useTranslation } from 'gatsby-plugin-react-i18next'

import { langText } from '../../lang'

const NavbarIndex = ({ scrollPage }) => {
    const { languages, originalPath, language, t } = useI18next()
    // const { t } = useTranslation()
    console.log('languages:', languages)
    const dispatch = useContext(LangDispatchContext)
    const { lang } = useContext(LangStateContext)
    const [showProd, setShowProd] = useState(false)
    const [showNosotros, setShowNosotros] = useState(false)
    const [showLang, setShowLang] = useState(false)
    const [scroll, setScroll] = useState()
    const [size, setSize] = useState('415px')

    // const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.screen.width : 1920)
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' && window.screen.width)

    const scrollFunction = () => {
        setScroll(window.scrollY)
        if(window.scrollY > 215) {
            setSize('214px')
        }else {
            const factor = window.scrollY
            const newScroll = 415 - factor
            setSize(`${newScroll}px`)
        }
    }

    useEffect(() => {
        if(typeof window !== 'undefined'){
            window.addEventListener('resize', e => {
                setScreenWidth(window.screen.width)
                // if(window.screen.width < 1270) {
                //     setSize('214px')
                // }else {
                //     setSize('415px')
                // }
            })
        }
    }, [])
    
    useEffect(() => {
        // if(screenWidth < 1270) {
        //     setSize('214px')
        // }
        window.addEventListener('scroll', scrollFunction)
    }, [])

    // useEffect(() => {
    //     if(typeof window !== 'undefined') {
    //         if(screenWidth < 1270) {
    //             window.removeEventListener('scroll', scrollFunction)
    //         }
    //     }
    // }, [screenWidth])

    const renderLogo = () => {
        return(
            <div>
                <Link  to='/'>
                    <img className='navbar-logo' onScroll={onScroll}  src={logo} width={size} alt='Logo'/>
                </Link>
            </div>
        )
    }
    const onScroll = (e) => {
        console.log('on scroll')
        console.log(e)
        console.log(e.target)
    }
    const renderProd = () => {
        return(
            <>
              <ul className='navbar-menu' onMouseLeave={() => closeSubMenu()} onBlur={() => closeSubMenu()} >
                    {/* <li className='no-border'><Link className='navbar-list-sub-menu' to='/producto/extracto-piel-uva'>{t('Extractos de piel de uva')}</Link></li> */}
                    <li className='no-border'><Link className='navbar-list-sub-menu' to='/producto/extracto-piel-uva'>{t('extractos_piel')}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/producto/extracto-vino'>{t('extractos_vino')}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/producto/taninos-uva'>{t('taninos')}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/producto/extracto-de-semilla-de-uva'>{t('extractos_semilla')}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/producto/alcoholes'>{t('alcoholes')}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/producto/pepita-de-uva'>{t('pepita')}</Link></li>
                </ul>  
            </>
        )
    }
    const renderProdBurger = () => {
        return(
            <>
              <ul className='navbar-menu-burger' onMouseLeave={() => closeSubMenu()} onBlur={() => closeSubMenu()} >
                    <li className='no-border'><Link className='navbar-list-sub-menu-burger' to='/producto/extracto-piel-uva'>{t('extractos_piel')}</Link></li>
                    <li><Link className='navbar-list-sub-menu-burger' to='/producto/extracto-vino'>{t('extractos_vino')}</Link></li>
                    <li><Link className='navbar-list-sub-menu-burger' to='/producto/taninos-uva'>{t('taninos')}</Link></li>
                    <li><Link className='navbar-list-sub-menu-burger' to='/producto/taninos-uva'>{t('extractos_semilla')}</Link></li>
                    <li><Link className='navbar-list-sub-menu-burger' to='/producto/alcoholes'>{t('alcoholes')}</Link></li>
                    <li><Link className='navbar-list-sub-menu-burger' to='/producto/pepita-de-uva'>{t('pepita')}</Link></li>
                </ul>  
            </>
        )
    }
    const onHoverProd = () => {
        setShowProd(true)
        setShowNosotros(false)
        setShowLang(false)
    }
    const renderNosotros = () => {
        return(
            <>
                <ul className='navbar-menu' onMouseLeave={() => closeSubMenu()}>
                    <li className='no-border' ><Link className='navbar-list-sub-menu' to='/sobre-nosotros/instalaciones'>{t('recursos')}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/sobre-nosotros/nuestra-historia'>{t('historia')}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/sobre-nosotros/valores'>{t('valores')}</Link></li>
                </ul> 
            </>
        )
    }
    const renderNosotrosBurger = () => {
        return(
            <>
                <ul className='navbar-menu-burger' onMouseLeave={() => closeSubMenu()}>
                    <li className='no-border' ><Link className='navbar-list-sub-menu-burger' to='/sobre-nosotros/instalaciones'>{t('recursos')}</Link></li>
                    <li><Link className='navbar-list-sub-menu-burger' to='/sobre-nosotros/nuestra-historia'>{t('historia')}</Link></li>
                    <li><Link className='navbar-list-sub-menu-burger' to='/sobre-nosotros/valores'>{t('valores')}</Link></li>
                </ul> 
            </>
        )
    }
    const onClickNosotros = () => {
        setShowNosotros(true)
        setShowProd(false)
        setShowLang(false)
    }
    const closeSubMenu = () => {
        if(showProd){
            setShowProd(false)
        }
        if(showNosotros){
            setShowNosotros(false)
        }
        if(showLang){
            setShowLang(false)
        }
    }
    
    const onClickLang = (e) => {
        dispatch({ type: e.target.innerText})
    }
    const renderLang = () => {
        return(
            <>
                <ul className='navbar-menu' onMouseLeave={() => closeSubMenu()}>
                    {languages.map(lng => (
                        <li key={lng} className='no-border navbar-list-sub-menu li-lang'><Link to={originalPath} language={lng}>
                            {lng.toUpperCase()}
                        </Link></li>
                    ))}
                    {/* <li className='no-border navbar-list-sub-menu li-lang' onClick={onClickLang}>ES</li>
                    <li className='navbar-list-sub-menu li-lang' onClick={onClickLang}>EN</li> */}
                </ul> 
            </>
        )
    }
    const renderLangBurger = () => {
        return(
            <>
                <ul className='navbar-menu-burger' onMouseLeave={() => closeSubMenu()}>
                    <li className='no-border navbar-list-sub-menu-burger li-lang' onClick={onClickLang}>ES</li>
                    <li className='navbar-list-sub-menu-burger li-lang' onClick={onClickLang}>EN</li>
                </ul> 
            </>
        )
    }
    const onHoverLang = () => {
        setShowLang(true)
        setShowNosotros(false)
        setShowProd(false)
    }
    const renderListGeneral = () => {
        return(
            <ul id='page-wrap' className='navbar-list-general'>
                <li className='navbar-list-element'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/'>{t('Inicio')}</Link></li>
                <li className='navbar-list-element navbar-relative'>
                    <p className='navbar-list-general-element' tabIndex='0' onClick={onHoverProd} onMouseOver={onHoverProd} >{t('Productos')}</p>
                    {showProd && renderProd()}
                </li>
                <li className='navbar-list-element navbar-relative'>
                    <p className='navbar-list-general-element' tabIndex='0' onMouseOver={onClickNosotros} to='/Nosotros'>{t('nosotros')}</p>
                    {showNosotros && renderNosotros()}
                </li>
                <li className='navbar-list-element'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/donde-estamos'>{t('donde')}</Link></li>
                <li className='navbar-list-element'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/sostenibilidad'>{t('Sostenibilidad')}</Link></li>
                <li className='navbar-list-element-contact'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/contacto'>{t('Contacto')}</Link></li>
                <li className='navbar-list-element-lang'>
                    {/* <p className='navbar-list-general-element' onClick={onHoverLang} onMouseOver={onHoverLang} to='/'>{lang === 'es' ? 'ES' : 'EN'}</p> */}
                    <p className='navbar-list-general-element' onClick={onHoverLang} onMouseOver={onHoverLang} to='/'>{language.toUpperCase()}</p>
                        {showLang && renderLang()}
                </li>
            </ul>
        )
    }

    const onClickProdBurger = () => {
        setShowProd(!showProd)
    }
    const onClickNosotrosBurger = () => {
        setShowNosotros(!showNosotros)
    }
    const onClickLangBurger = () => {
        setShowLang(!showLang)
    }
    const renderBurger = () => {
        return(
            <>
                <Menu right pageWrapId={'page-wrap'} outerContainerId={"outer-container"}>
                    <ul id='page-wrap' className='navbar-burger-general'>
                        <li className='navbar-burger-element'><Link className='navbar-burger-general-element' onMouseOver={closeSubMenu} to='/'>{t('home')}</Link></li>
                        <li className='navbar-burger-element navbar-relative'>
                            <p className='navbar-burger-general-element' tabIndex='0' onClick={onClickProdBurger} >{t('productos')}</p>
                            {showProd && renderProdBurger()}
                        </li>
                        <li className='navbar-burger-element navbar-relative'>
                            <p className='navbar-burger-general-element' tabIndex='0' onClick={onClickNosotrosBurger} to='/Nosotros'>{t('nosotros')}</p>
                            {showNosotros && renderNosotrosBurger()}
                        </li>
                        <li className='navbar-burger-element'><Link className='navbar-burger-general-element' onMouseOver={closeSubMenu} to='/donde-estamos'>{t('donde')}</Link></li>
                        <li className='navbar-burger-element'><Link className='navbar-burger-general-element' onMouseOver={closeSubMenu} to='/sostenibilidad'>{t('sostenibilidad')}</Link></li>
                        <li className='navbar-burger-element navbar-burger-element-contact'><Link className='navbar-burger-general-element' onMouseOver={closeSubMenu} to='/contacto'>{t('Contacto')}</Link></li>
                        <li className='navbar-burger-element navbar-burger-element-lang'>
                            <p className='navbar-burger-general-element' onClick={onClickLangBurger} to='/'>{language.toUpperCase()}</p>
                                {showLang && renderLangBurger()}
                            </li>
                    </ul>  
                </Menu>
            </>
        )
    }

    if(screenWidth > 1270) {
        return(
            <>
                <div id="outer-container" className='navbar-container'>
                    {renderLogo()}
                    {renderListGeneral()}
                </div>
            </>
        )
    }else {
        return (
            <>
                <div id='outer-container' className='navbar-container'>
                    {renderLogo()}
                    {renderBurger()}
                </div>
            </>
        )
    }


}
export default NavbarIndex

export const query = graphql`
    query ($language: String!) {
        locale: allLocale(filter: {ns: {eq: "common"}, language: {eq: $language}}) {
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