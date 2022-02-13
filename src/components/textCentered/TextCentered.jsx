import React from 'react'
import './textCentered.css'

const TextCentered = ({ children }) => {
    return(
        <p className='component-text-centered'>{children}</p>
      )
}
export default TextCentered