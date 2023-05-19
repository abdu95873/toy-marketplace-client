import React from 'react';

const Mini = ({miniTrucks}) => {
    const threeLories = miniTrucks.slice(0, 3);
    console.log(threeLories)
    return (
        <div className="grid grid-cols-3 justify-between">
            {
                threeLories?.map(miniTruck => <>


                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={miniTruck?.pictureUrl} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{miniTruck?.toyName}</h2>
                            <p>Price:{miniTruck?.price} </p>
                            <p>Rating:{miniTruck?.rating} </p>
                            <div className="card-actions">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                </>)
            }
        </div>
    );
};

export default Mini;