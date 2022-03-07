import React from 'react'
import './textCentered.css'

const TextCentered = ({ children, width }) => {
    return(
        <h4 className='component-text-centered' style={{ width }}>{children}</h4>
      )
}
export default TextCentered