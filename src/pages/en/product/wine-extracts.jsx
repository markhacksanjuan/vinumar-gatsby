import React, { useContext } from 'react'
import Vino from '../../../components/pages/Vino'
import { LangStateContext } from '../../../components/GlobalContextProvider/GlobalContextProvider'

const VinoPage = ({ location }) => {
    const { lang } = useContext(LangStateContext)
    return (
        <>
            <Vino lang={lang} location={location} />
        </>
    )
}

export default VinoPage