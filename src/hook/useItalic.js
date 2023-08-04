import React from 'react'

const useItalic = ({text, italic}) => {
    const arr = text.split(italic)
    if(arr.length === 1) {
        return text
    }
    else {
        return (
            <>{arr[0]}<i>{italic}</i>{arr[1]}</>
        )
    }
}
export default useItalic