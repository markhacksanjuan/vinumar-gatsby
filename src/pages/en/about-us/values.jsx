import React, { useContext } from 'react'
import Valores from '../../../components/pages/Valores'
import { LangStateContext } from '../../../components/GlobalContextProvider/GlobalContextProvider'

const ValoresPage = ({ location }) => {
    const { lang } = useContext(LangStateContext)
    return (
        <>
            <Valores lang={lang} location={location} />
        </>
    )
}

export default ValoresPage