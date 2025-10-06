import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase'; // Ensure you have the correct path to your Firebase config
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div style={styles.container}>
      {user ? (
        <div style={styles.profileCard}>
          <h2 style={styles.title}>Profile</h2>
          <p style={styles.name}>Welcome, {user.displayName || user.email}!</p>
          <button style={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <>
        <p style={styles.message}>No user is logged in.</p>
        <button style={styles.logoutButton}><Link style={styles.logoutButton} to="/login">Login</Link></button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  profileCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  title: {
    fontSize: '28px',
    marginBottom: '10px',
    color: '#333',
  },
  name: {
    fontSize: '20px',
    marginBottom: '20px',
    color: '#555',
  },
  logoutButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#d9534f',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
    textDecoration: "none"
  },
  message: {
    fontSize: '20px',
    color: '#555',
  },
};

// Hover and focus effects for the button
styles.logoutButton[':hover'] = {
  backgroundColor: '#c9302c',
  transform: 'scale(1.05)',
  
};

styles.logoutButton[':focus'] = {
  outline: 'none',
  boxShadow: '0 0 5px rgba(217, 83, 79, 0.5)',
};

export default Profile;
