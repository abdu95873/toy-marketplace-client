import React from 'react';
import image from "./../../assets/Ryte-404-seite-1.jpg"
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center mb-8'>
            <img src={image} alt="" />
        </div>
        <div className='flex justify-center mb-16'>
        <button className='btn btn-success'><Link to="/"> Go to Home</Link></button>
        </div>
        </div>

    );
};

export default ErrorPage;