import React, {} from "react"
import { navigate } from "gatsby"
import { navigateTo } from "../helpers/navigateTo"

const NotFoundPage = (props) => {
  navigateTo(props.location.pathname, navigate)

  return (
    <main>
      <title>Not found</title>
      <h2>Not Found</h2>

    </main>
  )
}

export default NotFoundPage
