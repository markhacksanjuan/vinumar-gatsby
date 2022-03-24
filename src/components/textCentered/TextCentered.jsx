import React from 'react'
import './textCentered.css'

const TextCentered = ({ children, width, margin }) => {
    return(
        <h4 className='component-text-centered' style={{ width, marginBottom: margin && margin }}>{children}</h4>
      )
}
export default TextCentered