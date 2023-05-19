import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import setTitle from '../../hooks/useTitle';

const AllToys = () => {
    setTitle('All Toys')
    const allToyes = useLoaderData();
    const tweentyToys = allToyes.slice(0, 5);

    const [toys, setToys] = useState(tweentyToys);
    const [click, setClick] = useState(false);
    const [searched, setSearched] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSearch = (data) => {
        console.log(data)
        if (data?.toyName != '') {
            setSearched(true)
            fetch(`http://localhost:5000/trucks?toyName=${data?.toyName}`)
                .then(res => res.json())
                .then(data => {
                    setToys(data);
                })
        }
        else {
            setSearched(false)
            setToys(tweentyToys)
        }
    }
    const seeAll = () => {
        setClick(true)
        setToys(allToyes);
    }
    const seeLess = () => {
        setClick(false)
        setToys(tweentyToys)
    }
    return (
        <div>
            <form className='flex justify-end' onSubmit={handleSubmit(handleSearch)}>
                <input className="input input-bordered input-success w-full max-w-xs" {...register("toyName")} type="text" placeholder="Enter pName" />
                <input className="btn btn-success ms " value='Search' type="submit" />
            </form>

            <div className="grid grid-cols-3 justify-between space-y-5 my-5">

                {
                    toys?.map(toy => <>
                       
                        <div className="card w-96 bg-base-100 shadow-xl ">
                            <figure className="px-10 pt-10">
                                <img src={toy?.pictureUrl} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{toy?.toyName}</h2>

                                <p>Seller:{toy?.sellerName} </p>

                                <p>Sub-category
                                    :{toy?.subCategory} </p>

                                <p>Price:{toy?.price} </p>

                                <p>Available Quantity
                                    :{toy?.quantity} </p>



                                <p>Rating:{toy?.rating} </p>
                                <div className="card-actions">

                                    <button className="btn btn-primary"> <Link to={`/toy/details/${toy?._id}`}>Details</Link></button>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
            <div className='flex justify-center'>
            {
                click && !searched ?
                    <button className="btn btn-primary my-10" onClick={seeLess}>See Less</button>
                    :
                    <></>
            }
            {
                !click && !searched ?
                    <button className="btn btn-primary my-10" onClick={seeAll}>See All</button>
                    :
                    <></>
            }
            </div>
        </div>
    );
};

export default AllToys;