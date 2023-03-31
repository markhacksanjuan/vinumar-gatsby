import React, { useContext } from 'react'
import PielUva from '../../../components/pages/PielUva'
import { LangStateContext } from '../../../components/GlobalContextProvider/GlobalContextProvider'

const PielPage = ({ location }) => {
    const { lang } = useContext(LangStateContext)
    return (
        <>
            <PielUva lang={lang} location={location} />
        </>
    )
}

export default PielPage