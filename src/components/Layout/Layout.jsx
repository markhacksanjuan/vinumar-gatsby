import React, { useState, createContext } from 'react'
import Navbar from '../navbarIndex'
import Footer from '../footer'

export const LangStateContext = createContext()

const Layout = ({ children }) => {
    return(
        <LangStateContext.Provider>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </LangStateContext.Provider>
    )
}
export default Layout