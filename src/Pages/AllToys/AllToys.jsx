import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const allToyes = useLoaderData();
    console.log(allToyes)
    return (
        <div>
            <h1>alltoys</h1>
        </div>
    );
};

export default AllToys;