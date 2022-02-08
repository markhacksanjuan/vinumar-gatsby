import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/img/VIN_Logo_V2.svg'
import useStyles from './navbarIndex.style'

const NavbarIndex = ({width}) => {
    const classes = useStyles()
    const [showProd, setShowProd] = useState(false)
    const [showNosotros, setShowNosotros] = useState(false)

    const renderLogo = () => {
        return(
            <div>
                <Link  to='/'><img className={classes.logo} src={logo} width={width} alt='Logo'/></Link>
            </div>
        )
    }
    const renderProd = () => {
        return(
            <>
              <ul className={classes.menu}>
                    <li>Extractos de piel de uva</li>
                    <li>Extractos de vino</li>
                    <li>Taninos de uva</li>
                    <li>Alcoholes de uso de boca</li>
                    <li>Alcoholes industriales</li>
                    <li>Pepita de uva</li>
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
                <ul className={classes.menu}>
                    <li>Recursos humanos y técnicos</li>
                    <li>Historia</li>
                    <li>Valores</li>
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
            <ul className={classes.listGeneral}>
                <li className={classes.listElement}><Link className={classes.listGeneralElement} to='/'>Inicio</Link></li>
                <li className={classes.listElement}>
                    <p className={classes.listGeneralElement} onClick={onClickProd}>Productos</p>
                    {showProd && renderProd()}
                </li>
                <li className={classes.listElement}>
                    <p className={classes.listGeneralElement} onClick={onClickNosotros} to='/Nosotros'>Sobre nosotros</p>
                    {showNosotros && renderNosotros()}
                </li>
                <li className={classes.listElement}><Link className={classes.listGeneralElement} to='/DondeEstamos'>Dónde estamos</Link></li>
                <li className={classes.listElement}><Link className={classes.listGeneralElement} to='/Sostenibilidad'>Sostenibilidad</Link></li>
                <li className={classes.listElementContact}><Link className={classes.listGeneralElement} to='/Contacto'>Contacto</Link></li>
                <li className={classes.listElementLang}><Link className={classes.listGeneralElement} to='/'>EN</Link></li>
            </ul>
        )
    }
    return(
        <>
            <div className={classes.container}>
                {renderLogo()}
                {renderListGeneral()}
            </div>
        </>
    )

}
export default NavbarIndex