import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { navigateTo } from "../helpers/navigateTo"

const NotFoundPage = (props) => {
  const redirection = navigateTo(props.location.pathname, navigate)

  useEffect(() => {
    if(props.location.pathname === '/productos/avialsa/enocianina') {
      navigate('/producto/extracto-piel-uva/')
    }
  }, [])
  if(props.location.pathname === '/productos/avialsa/enocianina') {
    navigate('/producto/extracto-piel-uva/')
  }

    return (
      <main>
        <title>Not found</title>
        {/* <h2>Not Found</h2> */}
  
      </main>
    )
}

export default NotFoundPage
