import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/img/VIN_Logo_V2.svg'
import './navbarIndex.css'
import {LangStateContext, LangDispatchContext} from '../GlobalContextProvider/GlobalContextProvider'

import { langText } from '../../lang'

const NavbarIndex = ({ scrollPage }) => {
    const dispatch = useContext(LangDispatchContext)
    const { lang } = useContext(LangStateContext)
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
                    <li className='no-border'><Link className='navbar-list-sub-menu' to='/productos/ExtractosPiel'>{langText.navbar.products.grape_skin[lang]}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/ExtractosVino'>{langText.navbar.products.wine_extracts[lang]}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/Taninos'>{langText.navbar.products.tannins[lang]}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/Alcoholes'>{langText.navbar.products.alcohols[lang]}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/Pepita'>{langText.navbar.products.grape_seed[lang]}</Link></li>
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
                    <li className='no-border' ><Link className='navbar-list-sub-menu' to='/nosotros/Recursos'>{langText.navbar.about.resources[lang]}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/nosotros/Historia'>{langText.navbar.about.history[lang]}</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/nosotros/Valores'>{langText.navbar.about.values[lang]}</Link></li>
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
        const onClickLang = (e) => {
            dispatch({ type: e.target.innerText})
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
                <li className='navbar-list-element'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/'>{langText.navbar.home[lang]}</Link></li>
                <li className='navbar-list-element navbar-relative'>
                    <p className='navbar-list-general-element' tabIndex='0' onClick={onHoverProd} onMouseOver={onHoverProd} >{langText.navbar.products.title[lang]}</p>
                    {showProd && renderProd()}
                </li>
                <li className='navbar-list-element navbar-relative'>
                    <p className='navbar-list-general-element' tabIndex='0' onMouseOver={onClickNosotros} to='/Nosotros'>{langText.navbar.about.title[lang]}</p>
                    {showNosotros && renderNosotros()}
                </li>
                <li className='navbar-list-element'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/DondeEstamos'>{langText.navbar.where[lang]}</Link></li>
                <li className='navbar-list-element'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/Sostenibilidad'>{langText.navbar.sustainability[lang]}</Link></li>
                <li className='navbar-list-element-contact'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/Contacto'>{langText.navbar.contact[lang]}</Link></li>
                <li className='navbar-list-element-lang'>
                    <p className='navbar-list-general-element' onClick={onHoverLang} onMouseOver={onHoverLang} to='/'>{lang === 'es' ? 'ES' : 'EN'}</p>
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