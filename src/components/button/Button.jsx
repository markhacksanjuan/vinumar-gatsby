import React from 'react'
import { Link, navigate } from 'gatsby'
import useStyles from './button.style'

const Button = ({ text, goTo, style, width }) => {
    const classes = useStyles()

    const onClick = () => {
        navigate(goTo)
    }
    return(
        <>
            <div className={classes.button}>
                <button className={classes[style]} style={{ width }} onClick={() => onClick()}>{text}</button>
            </div>
        </>
    )
}
export default Button