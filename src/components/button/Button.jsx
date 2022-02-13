import React from 'react'
import { Link, navigate } from 'gatsby'
import useStyles from './button.style'
import './button.css'

const Button = ({ text, goTo, style, width }) => {
    const classes = useStyles()

    const onClick = () => {
        navigate(goTo)
    }
    return(
        <>
            <div className='button-component'>
                <button className={`${style}`} style={{ width }} onClick={() => onClick()}>{text}</button>
            </div>
        </>
    )
}
export default Button