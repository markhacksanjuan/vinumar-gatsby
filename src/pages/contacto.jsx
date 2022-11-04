import React, { useContext, useEffect } from 'react'
import Navbar from '../components/navbarIndex/NavbarIndex'
import Footer from '../components/footer/Footer'
import Gmap from '../components/gmap/Gmap'
import Button from '../components/button/Button'
import Head from '../components/Head/Head'

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
    // useEffect(() => {
    //     if(typeof window !== 'undefined'){
    //         if(lang === 'en'){
    //             window.history.pushState({}, '', '/contact')
    //         }else {
    //             window.history.pushState({}, '', props.uri)
    //         }
    //     }
    // }, [lang])

    const onClick = e => {
        console.log('clic')
        e.preventDefault()
    }

    const renderForm = () => {
        return(
            <>
                <form method="POST" action='https://formspree.io/f/xqkjallg'>
                    <p>{langText.contact.form.title[lang]}</p>
                    <input type="text" name='name' placeholder={langText.contact.form.name[lang]} />
                    <input type="email" name='email' placeholder={langText.contact.form.email[lang]} />
                    <div>
                        <textarea name="message" id="mensaje" cols="48" rows="15" placeholder={langText.contact.form.message[lang]}></textarea>
                    </div>
                    <div id='checkbox' >
                        <div className='send-div'>
                            <input className='input-checkbox' type="checkbox" name='rgpd' />
                            <label for="rgpd">{langText.contact.form.accept[lang]}</label>
                        </div>
                        <Button type='submit' style='send-button' onClickButton={onClick}>{langText.contact.form.send[lang]}</Button>
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
                        <h4>{langText.contact.title[lang]}</h4>
                        {renderForm()}
                    </div>
                    <div >
                        <div className='contact-info'>
                            <p>ctra. Munera, 5<br/>02600 Villarrobledo Albacete, {langText.contact.spain[lang]}</p>
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
            <Head pageTitle={langText.head.contact[lang]}/>
            <Navbar width='214px' />
            {renderContent()}
            <Footer />
        </>
    )
}
export default ContactoPage