import React, { useState, useEffect } from 'react'
import './readMore.css'

const ReadMore = ({ children, width, className, lang }) => {
    const [isReadMore, setIsReadMore] = useState(false)
    const [isComplex, setIsComplex] = useState(false)
    const [isShort, setIsShort] = useState(false)
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
    }
    const textMore = {
        es: '...ver más',
        en: '... read more'
    }
    const textLess = {
        es: 'ver menos',
        en: 'show less'
    }

    useEffect(() => {
        if(typeof children !== 'string'){
            setIsComplex(true)
        }
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
                <span onClick={toggleReadMore} className='read-more'> {textMore[lang]}</span>
            </>
        )
    }
    const renderIsLess = () => {
        return (
            <>
                <br/>
                <span onClick={toggleReadMore} className='read-more'>{textLess[lang]}</span>
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