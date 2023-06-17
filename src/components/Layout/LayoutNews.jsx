import React, { useState, createContext, useReducer, useContext } from 'react'
import NavbarNews from '../navbarIndex/NavbarNews'
import Footer from '../footer/Footer'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import { useLocation } from '@reach/router'
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import { } from 'gatsby-plugin-google-gtag'
import { graphql } from 'gatsby'
import { usePrefix } from '../../hook/usePathname'
import { useLang } from '../../hook/useLang'
import { LangDispatchContext, LangStateContext } from '../GlobalContextProvider/GlobalContextProvider'

import cookiesPolicy from '../../legal/spanish/Política_de_cookies_PDF_2.pdf'

const LayoutNews = ({ children, pageLocation }) => {
    const location = useLocation()
    const lang = useLang(location)

    const renderCookiesText = () => {
        return (
            <>
                <div className='consent-container'>
                    <p className='consent-title'>Esta página web usa cookies</p>
                    <p>Utilizamos cookies propias para fines estrictamente funcionales (navegar por la página, visitar secciones), así como cookies analíticas propias y de terceros para reconocerte, conocer tus preferencias y ofrecerte información personalizada. 
                        Algunas de estas cookies de terceros son utilizadas para personalizar el contenido y los anuncios.  Si nos otorgas tu consentimiento a través del botón aceptar, se almacenarán en tu dispositivo. Además, puedes rechazarlas a través del botón Rechazar. 
                        Dispones de más información en nuestra <a href={cookiesPolicy} target='_blank'>Política de Cookies</a>.
                    </p>
                    <br />
                    <p>
                    Este banner se mantendrá activo hasta que indiques o decidas su aceptación o deshabilitación. Al rechazar, solo se aceptan las cookies funcionales.
                    </p>
                </div>
            </>
        )
    }
    const onAccept = () => {
        initializeAndTrack(location)
        // Cookies.set("gatsby-gdpr-google-tagmanager", true)
    }
    const onDecline = () => {

    }
    return(
        <>
            <NavbarNews location={pageLocation} lang={lang} />
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
            cookieName='gatsby-gdpr'
            // setDeclineCookie={false}
            onDecline={onDecline}
            >{renderCookiesText()}</CookieConsent>
            <main>{children}</main>
            <Footer lang={lang} />
        </>
    )
}
export default LayoutNews