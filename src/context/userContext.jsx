/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react'


// 1. this export is used for actually providing the context by importing in the file where the data is needed
export const UserDataContext = createContext()

function UserContext( {children} ){
    const user = {
        'name' : 'Vikram Pandey',
        'age' : 23,
        'city' : 'Varanasi',
        'profession' : 'Teacher',
        'role' : 'ADMIN'
    };

    return (
        <UserDataContext.Provider value={user}>
                {children}
        </UserDataContext.Provider>
    )
}

// 2. This is used for wrapping The App in main.jsx
export default UserContext
