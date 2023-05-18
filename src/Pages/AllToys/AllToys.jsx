import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AllToys = () => {
    const allToyes = useLoaderData();
    const [toys, setToys] = useState(allToyes);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSearch = (data) => {
        fetch(`http://localhost:5000/trucks?toyName=${data?.toyName}`)
            .then(res=>res.json())
            .then(data=>setToys(data))
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
                            </tr>
                        </>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;