import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'
import './heder.css';

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <div className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center bg-gray-200'>
            {
                userLoggedIn
                    ?
                    <>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='logoutbutton'>Logout</button>
                    </>
                    :
                    <>
                        <Link className='logoutbutton' to={'/login'}>Login</Link>
                        <Link className='logoutbutton' to={'/register'}>Register New Account</Link>
                    </>
            }

        </div>
    )
}

export default Header