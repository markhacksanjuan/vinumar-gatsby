import React, { useContext } from 'react'
import ExtractosNutricionAnimal from '../../components/pages/ExtractosNutricionAnimal'
import { LangStateContext } from '../../components/GlobalContextProvider/GlobalContextProvider'

const ExtractoNutricionAnimalPage = ({ location }) => {
    const { lang } = useContext(LangStateContext)
    return (
        <>
            <ExtractosNutricionAnimal lang={lang} location={location} />
        </>
    )
}

export default ExtractoNutricionAnimalPage