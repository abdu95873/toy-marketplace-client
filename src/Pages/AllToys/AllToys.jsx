import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AllToys = () => {
    const allToyes = useLoaderData();
    const tweentyToys = allToyes.slice(0,5);

    const [toys, setToys] = useState(tweentyToys);
    const [click, setClick] = useState(false);
    const [searched, setSearched] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSearch = (data) => {
        console.log(data)
        if(data?.toyName != ''){
            setSearched(true)
            fetch(`http://localhost:5000/trucks?toyName=${data?.toyName}`)
            .then(res=>res.json())
            .then(data=>{
                setToys(data);
            })
        }
        else{
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
            <form onSubmit={handleSubmit(handleSearch)}>
                <input {...register("toyName")} type="text" placeholder="Enter price" />
                <input value='REGISTER' type="submit" />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys?.map(toy => <>
                            <tr>
                                <td>{toy?.toyName}</td>
                                <td>{toy?.price}</td>
                                <td>
                                    <Link to={`/edit/${toy?._id}`}>Edit</Link>
                                    <button onClick={() => handleConfirmDelete(toy?._id)}>Delete</button>
                                </td>
                                <td>
                                    <Link to={`/toy/details/${toy?._id}`}>Details</Link>
                                </td>
                            </tr>
                        </>)
                    }
                </tbody>
            </table>
            {
                click && !searched?
                <button onClick={seeLess}>See Less</button>
                :
                <></>
            }
            {
                !click && !searched?
                <button onClick={seeAll}>See All</button>
                :
                <></>
            }
        </div>
    );
};

export default AllToys;