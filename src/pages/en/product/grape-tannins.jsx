import React, { useContext } from 'react'
import TaninosUva from '../../../components/pages/TaninosUva'
import { LangStateContext } from '../../../components/GlobalContextProvider/GlobalContextProvider'

const TaninosPage = ({ location }) => {
    const { lang } = useContext(LangStateContext)
    return (
        <>
            <TaninosUva lang={lang} location={location} />
        </>
    )
}

export default TaninosPage