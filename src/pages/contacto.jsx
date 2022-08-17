import React, { useContext, useEffect } from 'react'
import Navbar from '../components/navbarIndex/NavbarIndex'
import Footer from '../components/footer/Footer'
import Gmap from '../components/gmap/Gmap'
import Button from '../components/button/Button'

import '../styles/pages/contacto.css'
import '../styles/pages/mediaQueries/contacto-media.css'

import { LangStateContext, LangDispatchContext } from '../components/GlobalContextProvider/GlobalContextProvider'
import { langText } from '../lang'
import { historyState } from '../helpers/historyState'

const ContactoPage = (props) => {
    const { lang } = useContext(LangStateContext)
    const dispatch = useContext(LangDispatchContext)

    useEffect(() =>{
        historyState(window.location.state, dispatch)
    }, [])
    useEffect(() => {
        if(typeof window !== 'undefined'){
            if(lang === 'en'){
                window.history.pushState({}, '', '/contact')
            }else {
                window.history.pushState({}, '', props.uri)
            }
        }
    }, [lang])

    const renderForm = () => {
        return(
            <>
                <form action="submit">
                    <p>Formulario</p>
                    <input type="text" name='name' placeholder="Nombre y Apellidos" />
                    <input type="email" placeholder="correo@electronico.com" />
                    <div>
                        <textarea name="mensaje" id="mensaje" cols="48" rows="15" placeholder='Mensaje...'></textarea>
                    </div>
                    <div id='checkbox' >
                        <div className='send-div'>
                            <input type="checkbox" name='rgpd' />
                            <label for="rgpd">Acepto RGPD</label>
                        </div>
                        <Button style='send-button'>ENVIAR</Button>
                    </div>
                </form>
            </>
        )
    }
    const renderContent = () => {
        return(
            <>
                <div className='contact-content-container'>
                    <div>
                        <h4>Contacta con nosotros</h4>
                        {renderForm()}
                    </div>
                    <div>
                        <div>
                            <p>ctra. Munera, 5<br/>02600 Villarrobledo Albacete, España</p>
                            <p>T +34 967141500<br/> F +34 967144111</p>
                            <p>vinumar@vinumar.es</p>
                        </div>
                        <Gmap />

                    </div>

                </div>
            </>
        )
    }
    return(
        <>
            <Navbar width='214px' />
            {renderContent()}
            <Footer />
        </>
    )
}
export default ContactoPage