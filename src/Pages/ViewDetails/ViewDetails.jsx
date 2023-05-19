import React from 'react';
import { useLoaderData } from 'react-router-dom';
import setTitle from '../../hooks/useTitle';

const ViewDetails = () => {
    setTitle('Details');
    const toys = useLoaderData();

    return (

        <div>
            <h1 className='text-6xl font-bold text-center my-12'>Toy Details</h1>
            {
                toys?.map(toy => <>

                   

                    <div className='bg-lime-200 py-16 px-8 my-8 text-center '>
                    <p className='font-bold text-3xl my-5'>{toy?.toyName} Details </p>
                        <figure className="px-10 pt-10 flex justify-center">
                            <img src={toy?.pictureUrl} alt="Image" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{toy?.toyName}</h2>

                            <p>Seller: {toy?.sellerName} </p>

                            <p>Sub-category: {toy?.subCategory} </p>

                            <p>Price: {toy?.price} </p>

                            <p>Available Quantity: {toy?.quantity} </p>

                            <p>Rating: {toy?.rating} </p>
                            <p>Details: {toy?.toyDetails} </p>

                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default ViewDetails;