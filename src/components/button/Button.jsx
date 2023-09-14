import React from 'react'
import { Link, navigate } from 'gatsby'
import './button.css'
import './button-media.css'

const Button = ({ goTo, style, width, children, onClickButton, type }) => {

    const onClick = (e) => {
        if(onClickButton) {
            onClickButton(e)
        } else {
            navigate(goTo)
        }
    }
    return(
        <>
            <div className='button-component'>
                {type 
                ? <button type={type}  className={`${style}`}>{children}</button>
                : <button  className={`${style}`}  onClick={(e) => onClick(e)}>{children}</button> }
                {/* <button  className={`${style}`}  onClick={(e) => onClick(e)}>{children}</button> */}
            </div>
        </>
    )
}
export default Button