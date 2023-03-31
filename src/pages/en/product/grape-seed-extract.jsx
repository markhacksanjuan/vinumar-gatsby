import React, { useContext } from 'react'
import SemillaUva from '../../../components/pages/SemillaUva'
import { LangStateContext } from '../../../components/GlobalContextProvider/GlobalContextProvider'

const SemillaUvaPage = ({ location }) => {
    const { lang } = useContext(LangStateContext)
    return (
        <>
            <SemillaUva lang={lang} location={location} />
        </>
    )
}

export default SemillaUvaPage