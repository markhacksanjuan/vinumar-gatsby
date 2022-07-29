import React, { useState, createContext, useReducer } from 'react'
import Navbar from '../navbarIndex/NavbarIndex'
import Footer from '../footer/Footer'

const Layout = ({ children }) => {
    return(
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout