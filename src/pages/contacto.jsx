import React, { useContext } from 'react'
import Contacto from '../components/pages/Contacto'
import { LangStateContext } from '../components/GlobalContextProvider/GlobalContextProvider'

const ContactoPage = ({ location }) => {
    const { lang } = useContext(LangStateContext)
    return (
        <>
            <Contacto lang={lang} location={location} />
        </>
    )
}

export default ContactoPage