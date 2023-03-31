import React, { useContext } from 'react'
import Instalaciones from '../../components/pages/Instalaciones'
import { LangStateContext } from '../../components/GlobalContextProvider/GlobalContextProvider'

const InstalacionesPage = ({ location }) => {
    const { lang } = useContext(LangStateContext)
    return (
        <>
            <Instalaciones lang={lang} location={location} />
        </>
    )
}

export default InstalacionesPage