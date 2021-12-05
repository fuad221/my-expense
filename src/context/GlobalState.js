import React, { createContext, useReducer } from 'react';
import { AppReducer } from '../Reference-import'

// Initial state
const initialState = {
    transactions: []
}
// create context
export const GlobalContext = createContext(initialState);

// Provider  component
export const GlobalProvider = ({ Children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider>
            {Children}
        </GlobalContext.Provider>

    )

}
