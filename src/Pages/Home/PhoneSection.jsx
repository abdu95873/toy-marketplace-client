import React from 'react';
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom';

const PhoneSection = () => {
    return (
        <div className='flex content-center my-12'>
            <div className="mockup-phone ">
            <div className="camera"></div>
            <div className="display">
                <div className="artboard artboard-demo phone-1">
                    <img src={logo} alt="logo" />
                    <div className='text-center'>
                    <p>To Buy your truck visit</p>
                    <Link className='text-orange-700'>KID TOYS</Link> 
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PhoneSection;