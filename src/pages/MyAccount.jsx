
import { useContext } from 'react'
import { UserDataContext } from '../context/userContext'

function MyAccount() {
    const userData = useContext(UserDataContext)

    return (
        <div>
            <h1>MY ACCOUNT PAGE</h1>

            <div>
                <h2>YOUR NAME: {userData.name}</h2>
                <h2>YOUR City: {userData.city}</h2>
                <h2>YOUR Role: {userData.role}</h2>
            </div>
        </div>
    )
}

export default MyAccount
