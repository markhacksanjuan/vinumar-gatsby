import React, { useContext } from 'react'
import PepitaUva from '../../../components/pages/PepitaUva'
import { LangStateContext } from '../../../components/GlobalContextProvider/GlobalContextProvider'

const PepitaPage = ({ location }) => {
    const { lang } = useContext(LangStateContext)
    return (
        <>
            <PepitaUva lang={lang} location={location} />
        </>
    )
}

export default PepitaPage