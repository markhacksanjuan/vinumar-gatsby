import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/img/VIN_Logo_V2.svg'
import './navbarIndex.css'

const NavbarIndex = ({ width }) => {
    const [showProd, setShowProd] = useState(false)
    const [showNosotros, setShowNosotros] = useState(false)
    const [scroll, setScroll] = useState('451px')

    useEffect(() => {
        if(typeof window !== 'undefined'){
            window.onscroll = () => {
                if(window.scrollY > 215 ){
                    setScroll('214px')
                }else {
                    const factor = window.scrollY
                    const newScroll = 451 - factor
                    setScroll(`${newScroll}px`)
                }
            }
        }
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
                    <li><Link className='navbar-list-sub-menu' to='/productos/ExtractosPiel'>Extractos de piel de uva</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/ExtractosVino'>Extractos de vino</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/Taninos'>Taninos de uva</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/Alcoholes'>Alcoholes</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/Pepita'>Pepita de uva</Link></li>
                </ul>  
            </>
        )
    }
    const onHoverProd = () => {
        setShowProd(true)
        setShowNosotros(false)
    }
    const renderNosotros = () => {
        return(
            <>
                <ul className='navbar-menu' onMouseLeave={() => closeSubMenu()}>
                    <li className='no-border' ><Link className='navbar-list-sub-menu' to='/nosotros/Recursos'>Recursos técnicos y humanos</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/nosotros/Historia'>Historia</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/nosotros/Valores'>Valores</Link></li>
                </ul> 
            </>
        )
    }
    const onClickNosotros = () => {
        setShowNosotros(true)
        setShowProd(false)
    }
    const closeSubMenu = () => {
        if(showProd){
            setShowProd(false)
        }
        if(showNosotros){
            setShowNosotros(false)
        }
    }
    const renderListGeneral = () => {
        return(
            <ul className='navbar-list-general'>
                <li className='navbar-list-element'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/'>Inicio</Link></li>
                <li className='navbar-list-element navbar-relative'>
                    <p className='navbar-list-general-element' tabIndex='0' onClick={onHoverProd} onMouseOver={onHoverProd} >Productos</p>
                    {showProd && renderProd()}
                </li>
                <li className='navbar-list-element navbar-relative'>
                    <p className='navbar-list-general-element' tabIndex='0' onMouseOver={onClickNosotros} to='/Nosotros'>Sobre nosotros</p>
                    {showNosotros && renderNosotros()}
                </li>
                <li className='navbar-list-element'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/DondeEstamos'>Dónde estamos</Link></li>
                <li className='navbar-list-element'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/Sostenibilidad'>Sostenibilidad</Link></li>
                <li className='navbar-list-element-contact'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/Contacto'>Contacto</Link></li>
                <li className='navbar-list-element-lang'><Link className='navbar-list-general-element' onMouseOver={closeSubMenu} to='/'>EN</Link></li>
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