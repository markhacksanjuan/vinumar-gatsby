import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/img/VIN_Logo_V2.svg'
import './navbarIndex.css'
import {LangStateContext, LangDispatchContext} from '../GlobalContextProvider/GlobalContextProvider'

import { langText_navbar } from '../../lang/lang_navbar'

const NavbarIndex = ({ scrollPage }) => {
    const dispatch = useContext(LangDispatchContext)
    const lang = useContext(LangStateContext)
    const [showProd, setShowProd] = useState(false)
    const [showNosotros, setShowNosotros] = useState(false)
    const [showLang, setShowLang] = useState(false)
    const [scroll, setScroll] = useState('451px')

    useEffect(() => {
        window.addEventListener('scroll', e => {
            if(window.scrollY > 215 ){
                setScroll('214px')
            }else {
                const factor = window.scrollY
                const newScroll = 451 - factor
                setScroll(`${newScroll}px`)
            }
        })
        // if(typeof window !== 'undefined'){
        //     console.log('hola')
        //         window.onscroll = () => {
        //             console.log('hola')
        //             if(window.scrollY > 215 ){
        //                 setScroll('214px')
        //             }else {
        //                 console.log(window.scrollY)
        //                 const factor = window.scrollY
        //                 const newScroll = 451 - factor
        //                 setScroll(`${newScroll}px`)
        //             }
        //         }
        // }
    }, [])

    const renderLogo = () => {
        return(
            <div>
                <Link  to='/'>
                    <img className='navbar-logo' onScroll={onScroll}  src={logo} width={scroll} alt='Logo'/>
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
                    <li className='no-border'><Link className='navbar-list-sub-menu' to='/productos/ExtractosPiel'>{langText_navbar.products.grape_skin[lang.lang]}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/ExtractosVino'>{langText_navbar.products.wine_extracts[lang.lang]}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/Taninos'>{langText_navbar.products.tannins[lang.lang]}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/Alcoholes'>{langText_navbar.products.alcohols[lang.lang]}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/Pepita'>{langText_navbar.products.grape_seed[lang.lang]}</Link></li>
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
                    <li className='no-border' ><Link className='navbar-list-sub-menu' to='/nosotros/Recursos'>{langText_navbar.about.resources[lang.lang]}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/nosotros/Historia'>{langText_navbar.about.history[lang.lang]}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/nosotros/Valores'>{langText_navbar.about.values[lang.lang]}</Link></li>
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
    
    const renderLang = () => {
        const onClickLang = () => {
            dispatch({ type: 'TOGGLE_LANG'})
        }
        return(
            <>
                <ul className='navbar-menu' onMouseLeave={() => closeSubMenu()}>
                    <li className='no-border navbar-list-sub-menu li-lang' onClick={onClickLang}>ES</li>
                    <li className='navbar-list-sub-menu li-lang' onClick={onClickLang}>EN</li>
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
            <ul className='navbar-list-general'>
                <li className='navbar-list-element'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/'>{langText_navbar.home[lang.lang]}</Link></li>
                <li className='navbar-list-element navbar-relative'>
                    <p className='navbar-list-general-element' tabIndex='0' onClick={onHoverProd} onMouseOver={onHoverProd} >{langText_navbar.products.title[lang.lang]}</p>
                    {showProd && renderProd()}
                </li>
                <li className='navbar-list-element navbar-relative'>
                    <p className='navbar-list-general-element' tabIndex='0' onMouseOver={onClickNosotros} to='/Nosotros'>{langText_navbar.about.title[lang.lang]}</p>
                    {showNosotros && renderNosotros()}
                </li>
                <li className='navbar-list-element'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/DondeEstamos'>{langText_navbar.where[lang.lang]}</Link></li>
                <li className='navbar-list-element'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/Sostenibilidad'>{langText_navbar.sustainability[lang.lang]}</Link></li>
                <li className='navbar-list-element-contact'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/Contacto'>{langText_navbar.contact[lang.lang]}</Link></li>
                <li className='navbar-list-element-lang'>
                    <p className='navbar-list-general-element' onClick={onHoverLang} onMouseOver={onHoverLang} to='/'>{lang.lang === 'es' ? 'ES' : 'EN'}</p>
                        {showLang && renderLang()}
                    </li>
            </ul>
        )
    }

    return(
        <>
            <div className='navbar-container'>
                {renderLogo()}
                {renderListGeneral()}
            </div>
        </>
    )

}
export default NavbarIndex