import React, { useContext } from 'react'
import Historia from '../../components/pages/Historia'
import { LangStateContext } from '../../components/GlobalContextProvider/GlobalContextProvider'

const HistoriaPage = ({ location }) => {
    const { lang } = useContext(LangStateContext)
    return (
        <>
            <Historia lang={lang} location={location} />
        </>
    )
}

export default HistoriaPage