import React from 'react'
import GlobalContextProvider from './src/components/GlobalContextProvider/GlobalContextProvider'

export const wrapRootElement = ({ element, props }) => {
    return <GlobalContextProvider {...props}>{element}</GlobalContextProvider>
}
export const onRouteUpdate = ({ location, prevLocation }) => {
    console.log(prevLocation?.pathname)
    if(location && location.state){
        location.state.referrer = prevLocation ? prevLocation.pathname : null
    }
}

// export const onRouteUpdate = ({ location }) => {
//     window.location = window.location || [document.referrer]
//     location.push(window.location.href)
//     window.previousPath = location[location.length - 2]
//   }