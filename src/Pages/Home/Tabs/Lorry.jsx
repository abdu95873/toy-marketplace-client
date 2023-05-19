import React from 'react';
import { Link } from 'react-router-dom';

const Lorry = ({ lorries }) => {
    const threeLories = lorries.slice(0, 3);
    console.log(threeLories)
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-3 justify-between ">
            {
                threeLories?.map(lorry => <>


                    <div className="card w-96 bg-base-100 shadow-xl my-4">
                        <figure className="px-10 pt-10">
                            <img src={lorry?.pictureUrl} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{lorry?.toyName}</h2>
                            <p>Price:{lorry?.price} </p>
                            <p>Rating:{lorry?.rating} </p>
                            <div className="card-actions">
                                <button className="btn btn-primary"><Link to={`/toy/details/${lorry?._id}`}>View Details</Link></button>
                            </div>
                        </div>
                    </div>


                    
                </>)
            }
        </div>
    );
};

export default Lorry;