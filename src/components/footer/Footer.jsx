import React from 'react'
import { Link } from 'gatsby'
import useStyles from './footer.style'

const Footer = () => {
    const classes = useStyles()
    return(
        <>
            <div className={classes.container}>
                <div className={classes.block}>
                    <p className={classes.title}>Contacto</p>
                    <div>
                        <ul className={classes.listContact}>
                            <li>ctra. Munera, 5</li>
                            <li>02600 Villarrobledo</li>
                            <li>Albacete, España</li>
                        </ul>
                        <ul className={classes.listContact}>
                            <li>T +34 967141500</li>
                            <li>F +34 967144111</li>
                        </ul>
                        <p className={classes.email}>vinumar@vinumar.es</p>
                    </div>
                </div>
                <div className={classes.block}>
                    <p className={classes.title}>Productos</p>
                    <div>
                        <ul className={classes.list}>
                            <li>Extracto de piel de uva</li>
                            <li>Extracto de vino</li>
                            <li>Taninos de uva</li>
                            <li>Alcoholes</li>
                            <li>Pepita de uva</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.block}>
                    <p className={classes.title}>Sobre Nosotros</p>
                    <div>
                        <ul className={classes.list}>
                            <li>Recursos técnicos y humanos</li>
                            <li>Historia</li>
                            <li>Valores</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.block}>
                    <p className={classes.titleNoBottom}>Dónde Estamos</p>
                </div>
                <div className={classes.block}>
                    <p className={classes.titleNoBottom}>Sostenibilidad</p>
                </div>
                <div className={classes.block}>
                    <p className={classes.title}>Política de Privacidad</p>
                    <div>
                        <ul className={classes.list}>
                            <li>Política de cookies</li>
                            <li>Política de privacidad</li>
                            <li>Aviso legal</li>
                            <li>Fondo Europeo de Desarrollo Regional</li>
                            <li>2022 Vinumar</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer