import React, { useContext } from 'react'
import Sostenibilidad from '../components/pages/Sostenibilidad'
import { LangStateContext } from '../components/GlobalContextProvider/GlobalContextProvider'

const SostenibilidadPage = ({ location }) => {
    const { lang } = useContext(LangStateContext)
    
    return(
        <>
            <Sostenibilidad lang={lang} location={location} />
        </>
    )
}
export default SostenibilidadPage