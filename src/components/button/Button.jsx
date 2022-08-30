import React from 'react'
import { Link, navigate } from 'gatsby'
import useStyles from './button.style'
import './button.css'
import './button-media.css'

const Button = ({ goTo, style, width, children, onClickButton }) => {
    const classes = useStyles()

    const onClick = () => {
        if(onClickButton) {
            onClickButton()
        } else {
            navigate(goTo)
        }
    }
    return(
        <>
            <div className='button-component'>
                <button  className={`${style}`}  onClick={() => onClick()}>{children}</button>
            </div>
        </>
    )
}
export default Button