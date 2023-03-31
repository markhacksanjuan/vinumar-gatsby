import React, { useContext } from 'react'
import Alcoholes from '../../components/pages/Alcoholes'
import { LangStateContext } from '../../components/GlobalContextProvider/GlobalContextProvider'

const AlcoholesPage = ({ location }) => {
    const { lang } = useContext(LangStateContext)
    return (
        <>
            <Alcoholes lang={lang} location={location} />
        </>
    )
}

export default AlcoholesPage