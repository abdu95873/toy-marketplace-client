import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const EditToys = () => {
    const toy = useLoaderData()[0];
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleEditData = (data) => {
        data.id = toy._id;
        fetch(`http://localhost:5000/toy`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Toy Updated');
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleEditData)}>
                <input {...register("price")} defaultValue={toy?.price} type="text" placeholder="Enter price" />
                <input {...register("quantity")} defaultValue={toy?.quantity} type="text" placeholder="Enter quantity" />
                <input {...register("toyDetails")} defaultValue={toy?.toyDetails} type="text" placeholder="Enter toyDetails" />
                <input value='REGISTER' type="submit" />
            </form>
        </div>
    );
};

export default EditToys;