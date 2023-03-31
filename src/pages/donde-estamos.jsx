import React, { useContext } from 'react'
import DondeEstamos from '../components/pages/DondeEstamos'
import { LangStateContext } from '../components/GlobalContextProvider/GlobalContextProvider'

const DondePage = ({ location }) => {
    const { lang } = useContext(LangStateContext)
    
    return(
        <>
            <DondeEstamos lang={lang} location={location} />
        </>
    )
}
export default DondePage