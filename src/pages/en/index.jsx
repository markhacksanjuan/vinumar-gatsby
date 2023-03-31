import React, { useContext } from "react"
import { graphql } from "gatsby"
import Index from '../../components/pages/Index'
import { LangStateContext } from '../../components/GlobalContextProvider/GlobalContextProvider'

const IndexPage = ({ location }) => {
  const { lang } = useContext(LangStateContext)
  
  return (
    <>
      <Index lang={lang} location={location} />
    </>
  )
}

export default IndexPage