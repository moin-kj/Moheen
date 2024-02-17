import { createContext, useContext, useState } from 'react';

const FormStateContext = createContext();

export function FormStateContextProvider({ children }) {
    const [form, setForm] = useState({
        selectedIndex: 0,
        steps: {
            details: {
                valid: false,
                dirty: false,
                value: {
                    name: '',
                    dueDate: '',
                },
            },
            preferences: {
                valid: false,
                dirty: false,
                value: {
                    receiveEmails: false,
                    receiveNotifications: false,
                },
            },
        },
    });

    return (
        <FormStateContext.Provider value={{ form, setForm }}>
            {children}
        </FormStateContext.Provider>
    );
}

export function useFormStateContext() {
    return useContext(FormStateContext);
}
