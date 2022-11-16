import React, { useState, createContext, useReducer } from 'react'
import Navbar from '../navbarIndex/NavbarIndex'
import Footer from '../footer/Footer'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import { useLocation } from '@reach/router'
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import { } from 'gatsby-plugin-google-gtag'

const Layout = ({ children }) => {
    const location = useLocation()
    const renderCookiesText = () => {
        return (
            <>
                <h4>Esta página web usa cookies</h4>
                <p>Utilizamos cookies propias para fines estrictamente funcionales (navegar por la página, visitar secciones), así como cookies analíticas propias y de terceros para reconocerte, conocer tus preferencias y ofrecerte información personalizada. 
                    Algunas de estas cookies de terceros son utilizadas para personalizar el contenido y los anuncios.  Si nos otorgas tu consentimiento a través del botón aceptar, se almacenarán en tu dispositivo. Además, puedes rechazarlas a través del botón Rechazar. 
                    Dispones de más información en nuestra Política de Cookies.
                </p>
                <br />
                <p>
                   Este banner se mantendrá activo hasta que indiques o decidas su aceptación o deshabilitación. 
                </p>
            </>
        )
    }
    const onAccept = () => {
        initializeAndTrack(location)
        // Cookies.set("gatsby-gdpr-google-tagmanager", true)
    }
    return(
        <>
            <Navbar />
            <CookieConsent
            declineButtonText='Rechazar'
            enableDeclineButton
            buttonText='Aceptar'
            style={{
                backgroundColor: 'rgba(160, 46, 51, 0.7)'
            }}
            onAccept={onAccept}
            buttonWrapperClasses='consent-container-btn'
            buttonClasses='consent-btn-accept'
            declineButtonClasses='consent-btn-decline'
            >{renderCookiesText()}</CookieConsent>
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout