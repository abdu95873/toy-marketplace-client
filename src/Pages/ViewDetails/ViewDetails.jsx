import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const toy = useLoaderData();
    console.log(toy)
    return (
        <div>
            <h1>ViewDetails</h1>
        </div>
    );
};

export default ViewDetails;