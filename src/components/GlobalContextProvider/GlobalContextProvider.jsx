import React, { createContext, useReducer } from 'react'

export const LangStateContext = createContext()
export const LangDispatchContext = createContext()

const initialState = {
    lang: 'es'
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'ES':
            return {
                ...state,
                lang: 'es'
            }
        case 'EN':
            return {
                ...state,
                lang: 'en'
            }
        default:
            return state
    }
}

const GlobalContextProvider = ({ children }) => {
    const [lang, dispatch] = useReducer(reducer, initialState)
    return(
        <LangStateContext.Provider value={lang}>
            <LangDispatchContext.Provider value={dispatch}>
                {children}
            </LangDispatchContext.Provider>
        </LangStateContext.Provider>
    )
}
export default GlobalContextProvider