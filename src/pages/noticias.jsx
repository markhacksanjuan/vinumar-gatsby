import React, { useContext } from 'react'
import NoticiasIndex from '../components/pages/Noticias/NoticiasIndex'
import { LangStateContext } from '../components/GlobalContextProvider/GlobalContextProvider'

const NoticiasPage = ({ location }) => {
    const { lang } = useContext(LangStateContext)

    return (
        <>
            <NoticiasIndex lang={lang} location={location} />
        </>
    )
}
export default NoticiasPage