import React from 'react'
import GlobalContextProvider from './src/components/GlobalContextProvider/GlobalContextProvider'

export const wrapRootElement = ({ element, props }) => {
    return <GlobalContextProvider {...props}>{element}</GlobalContextProvider>
}
export const onRouteUpdate = ({ location, prevLocation }) => {
    if(location && location.state){
        location.state.referrer = prevLocation ? prevLocation.pathname : null
    }
}