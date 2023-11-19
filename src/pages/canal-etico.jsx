import React from 'react'
import CanalEtico from '../components/pages/CanalEtico'
import { LangStateContext } from '../components/GlobalContextProvider/GlobalContextProvider'

const EthicPage = ({ location }) => {
    const { lang } = useContext(LangStateContext)
    return (
        <>
            <CanalEtico lang={lang} location={location} />
        </>
    )
}

export default EthicPage