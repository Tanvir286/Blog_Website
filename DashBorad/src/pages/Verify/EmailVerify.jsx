import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EmailVerify.css'; 

const EmailVerify = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState('');
    const [info, setInfo] = useState('');

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.post(`http://localhost:14261/user/emailVerify/${token}`);
    
                if (response.data) {
                    setInfo(response.data.message);
                    setTimeout(() => {
                        navigate("/login");
                    }, 2000);
                } else {
                    setError('Verification failed. Please try again.');
                }
            } catch (err) {
                setError('Verification failed. Please try again.');
            } finally {
                setLoading(false); 
            }
        };
      /*<============================
            This is token and call
       =============================>*/
        if (token) {
            verifyEmail();
        } else {
            setError('Token is missing.');
            setLoading(false);
        }
        /*<============================
            This is token and call
        =============================>*/
    }, []); 

     /*<============================
           This is Loading start
     =============================>*/
      if (loading) {
        // If still loading, show a "Verifying your email..." 
        return (
            <div className="container">
              <div className="loading-box">
                <div className="spinner"></div>
                <div className="loading-text">Verifying your email...</div>
              </div>
            </div>
        );
    }
    /*<============================
           This is Loading end
    =============================>*/

    return (
        <div className="container">
            <div className={`message ${info ? 'success-box' : 'error-box'}`}>
                {info && <div className="success">{info}</div>}
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
};

export default EmailVerify;
