import React, { createContext, useState, useContext } from 'react';

// Create a new context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
    const [data, setData] = useState({
        title: '',
        description: '',
        category: '',
        selectedObjectives: [],
        selectedInterests: [], // New field for Step 2 data
        selectedAgeGroups: [], // New field for Step 2 data
        selectedStyles: [], // New field for Step 3 data
        selectedPreferences: '', // New field for Step 3 data
        selectedFormats: [], // New field for Step 3 data
        startDate: "", // New field for Step 5 data
        endDate: "", // New field for Step 5 data
        budget: " ", // New field for Step 5 data
        selectedFrequency: [], // New field for Step 5 data

    });


    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook to consume the context
export const useData = () => useContext(DataContext);
