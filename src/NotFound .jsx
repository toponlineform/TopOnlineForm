import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
      textAlign: 'center',
      padding: '20px'
    },
    box: {
      background: 'white',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
      width: '100%'
    },
    h1: {
      fontSize: '80px',
      margin: '0',
      color: '#ab1e1e'
    },
    h2: {
      color: '#333',
      marginTop: '10px'
    },
    p: {
      color: '#666',
      marginBottom: '20px'
    },
    button: {
      backgroundColor: '#004080',
      color: 'white',
      textDecoration: 'none',
      padding: '12px 25px',
      borderRadius: '5px',
      fontWeight: 'bold',
      transition: 'background 0.3s',
      display: 'inline-block',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.h1}>404</h1>
        <h2 style={styles.h2}>Page Not Found</h2>
        <p style={styles.p}>Oops! The page you are looking for does not exist or has been moved.</p>
        <Link to="/" style={styles.button}>Go to Home Page</Link>
      </div>
    </div>
  );
};

export default NotFound;
