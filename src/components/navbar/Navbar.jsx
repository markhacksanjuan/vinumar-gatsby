import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/img/VIN_Logo_V2.svg'
import useStyles from './navbar.style'

const Navbar = () => {
    const classes = useStyles()
    const renderLogo = () => {
        return(
            <div>
                <Link  to='/'><img className={classes.logo} src={logo} width='451px' alt='Logo'/></Link>
            </div>
        )
    }
    const renderListGeneral = () => {
        return(
            <ul className={classes.listGeneral}>
                <li className={classes.listElement}><Link className={classes.listGeneralElement} to='/'>Inicio</Link></li>
                <li className={classes.listElement}><Link className={classes.listGeneralElement} to='/Productos'>Productos</Link></li>
                <li className={classes.listElement}><Link className={classes.listGeneralElement} to='/Nosotros'>Sobre nosotros</Link></li>
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
export default Navbar