import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const toys = useLoaderData();

    return (

        <div>
            <h1 className='text-6xl font-bold text-center my-12'>Toy Details</h1>
            {
                toys?.map(toy => <>
                    <div className='bg-lime-200 py-16 px-8 my-8 text-center '>
                        <p className='font-bold text-3xl my-5'>
                            {toy?.toyName} Details </p>
                        <p > {toy?.toyDetails} </p>
                    </div>
                </>)
            }
        </div>
    );
};

export default ViewDetails;