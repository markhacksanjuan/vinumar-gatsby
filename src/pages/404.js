import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { navigateTo } from "../helpers/navigateTo"

const NotFoundPage = (props) => {

  // return navigate('/')

  if(props.location.pathname === '/productos/avialsa/enocianina'){
      return navigate('/producto/extracto-piel-uva')
  }else {
    return (
      <main>
        <title>Not found</title>
      </main>
    )
  }
}

export default NotFoundPage
