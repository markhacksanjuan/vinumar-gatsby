import React from 'react'
import { Link, navigate } from 'gatsby'
import useStyles from './button.style'
import './button.css'

const Button = ({ goTo, style, width, children }) => {
    const classes = useStyles()

    const onClick = () => {
        navigate(goTo)
    }
    return(
        <>
            <div className='button-component'>
                <button className={`${style}`}  onClick={() => onClick()}>{children}</button>
            </div>
        </>
    )
}
export default Button