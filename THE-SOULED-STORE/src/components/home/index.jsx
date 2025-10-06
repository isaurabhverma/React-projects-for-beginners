import React from 'react'
import { useAuth } from '../../contexts/authContext'
import Header from '../header'
import Homepage from '../Homepage';

const Home = () => {
    const { currentUser } = useAuth()
    return (
        <div style={{ margin: 0, padding: 0 }}>
        <Homepage />
    </div>
    )
}

export default Home