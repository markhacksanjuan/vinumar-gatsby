import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/img/VIN_Logo_V2.svg'
import './navbarIndex.css'
import useStyles from './navbarIndex.style'

const NavbarIndex = ({width}) => {
    const classes = useStyles()
    const [showProd, setShowProd] = useState(false)
    const [showNosotros, setShowNosotros] = useState(false)

    const renderLogo = () => {
        return(
            <div>
                <Link  to='/'><img className='navbar-logo' src={logo} width={width} alt='Logo'/></Link>
            </div>
        )
    }
    const renderProd = () => {
        return(
            <>
              <ul className='navbar-menu'>
                    <li><Link className='navbar-list-sub-menu' to='/productos/ExtractosPiel'>Extractos de piel de uva</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/ExtractosVino'>Extractos de vino</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/Taninos'>Taninos de uva</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/AlcoholesBoca'>Alcoholes de uso de boca</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/AlcoholesIndustriales'>Alcoholes industriales</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/productos/Pepita'>Pepita de uva</Link></li>
                </ul>  
            </>
        )
    }
    const onClickProd = () => {
        setShowProd(!showProd)
        setShowNosotros(false)
    }
    const renderNosotros = () => {
        return(
            <>
                <ul className='navbar-menu'>
                    <li><Link className='navbar-list-sub-menu' to='/nosotros/Recursos'>Recursos humanos y técnicos</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/nosotros/Historia'>Historia</Link></li>
                    <li><Link className='navbar-list-sub-menu' to='/nosotros/Valores'>Valores</Link></li>
                </ul> 
            </>
        )
    }
    const onClickNosotros = () => {
        setShowNosotros(!showNosotros)
        setShowProd(false)
    }
    const renderListGeneral = () => {
        return(
            <ul className='navbar-list-general'>
                <li className='navbar-list-element'><Link className='navbar-list-general-element' to='/'>Inicio</Link></li>
                <li className='navbar-list-element'>
                    <p className='navbar-list-general-element' onClick={onClickProd}>Productos</p>
                    {showProd && renderProd()}
                </li>
                <li className='navbar-list-element'>
                    <p className='navbar-list-general-element' onClick={onClickNosotros} to='/Nosotros'>Sobre nosotros</p>
                    {showNosotros && renderNosotros()}
                </li>
                <li className='navbar-list-element'><Link className='navbar-list-general-element' to='/DondeEstamos'>Dónde estamos</Link></li>
                <li className='navbar-list-element'><Link className='navbar-list-general-element' to='/Sostenibilidad'>Sostenibilidad</Link></li>
                <li className='navbar-list-element-contact'><Link className='navbar-list-general-element' to='/Contacto'>Contacto</Link></li>
                <li className='navbar-list-element-lang'><Link className='navbar-list-general-element' to='/'>EN</Link></li>
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