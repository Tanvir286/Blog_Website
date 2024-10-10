import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    const errorPageStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8d7da',
        color: '#721c24',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
    };

    const headingStyle = {
        fontSize: '5rem',
        margin: '0',
    };

    const messageStyle = {
        fontSize: '1.5rem',
        marginTop: '20px',
    };

    const buttonStyle = {
        marginTop: '30px',
        padding: '10px 20px',
        fontSize: '1rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '0.1rem',
        textDecoration: 'none',
        color: '#fff',
        backgroundColor: '#721c24',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#fff', // This will ensure the link color is white
    };

    return (
        <div style={errorPageStyle}>
            <h1 style={headingStyle}>404</h1>
            <p style={messageStyle}>Oops! The page you're looking for doesn't exist.</p>
            <div style={buttonStyle}>
                <Link to="/" style={linkStyle}>Go to Home</Link>
            </div>
        </div>
    );
};

export default Error;
