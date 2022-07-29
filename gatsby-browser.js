import React from 'react'
import GlobalContextProvider from './src/components/GlobalContextProvider/GlobalContextProvider'

export const wrapRootElement = ({ element, props }) => {
    return <GlobalContextProvider {...props}>{element}</GlobalContextProvider>
}