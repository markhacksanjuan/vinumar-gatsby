import React, { useState, useEffect } from 'react'
import './readMore.css'

const ReadMore = ({ children, width, className }) => {
    const [isReadMore, setIsReadMore] = useState(false)
    const [isComplex, setIsComplex] = useState(false)
    const [isShort, setIsShort] = useState(false)
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
    }

    useEffect(() => {
        if(typeof children !== 'string'){
            setIsComplex(true)
        }
        console.log(children)
    }, [])
    useEffect(() => {
        if(width < 800) {
            setIsShort(true)
            setIsReadMore(true)
        }else {
            setIsShort(false)
            setIsReadMore(false)
        }
    }, [width])
    const renderIsShort = () => {
        return (
            <>
                <span onClick={toggleReadMore} className='read-more'> ...read more</span>
            </>
        )
    }
    const renderIsLess = () => {
        return (
            <>
                <br/>
                <span onClick={toggleReadMore} className='read-more'>show less</span>
            </>
        )
    }
    const renderComplexShort = () => {
        return (
            <>
                <p>
                    {children.props.children[0]}
                    {isReadMore ? renderIsShort() : renderIsLess()}
                </p>
            </>
        )
    }
    const renderComplexShortLess = () => {
        return (
            <>
                    {children}
                    {isReadMore ? renderIsShort() : renderIsLess()}
            </>
        )
    }
    if(!isComplex) {
        if(isShort) {
            return (
                <>
                    <p className={className && className}>
                        {isReadMore ? children.slice(0, 225) : children}
                        {isReadMore ? renderIsShort() : renderIsLess()}
                    </p>
                </>
            )
        }else {
            return (
                <>
                    <p className={className && className}>
                        {children}
                    </p>
                </>
            )
        }
    }else {
        if(isShort) {
            return (
                <>
                    <p>
                        {isReadMore ? children.props.children[0] : children}
                        {isReadMore ? renderIsShort() : renderIsLess()}
                    </p>
                </>
            )
        }
        return(
            <>
                <p>
                    {children}
                </p>
            </>
        )
    }
}
export default ReadMore