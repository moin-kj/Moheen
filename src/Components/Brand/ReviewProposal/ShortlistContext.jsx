import React, { createContext, useState, useContext } from 'react';

// Create a new context
export const ShortlistContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
    const [data, setData] = useState({
        shortlistedProposals: [],
        shortlistcount: 0,
        proposalcount: 0,
    });


    return (
        <ShortlistContext.Provider value={{ data, setData }}>
            {children}
        </ShortlistContext.Provider>
    );
};

// Custom hook to consume the context
export const useData = () => useContext(ShortlistContext);
