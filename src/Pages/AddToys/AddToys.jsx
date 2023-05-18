import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProviders';
import { toast } from 'react-hot-toast';

const AddToys = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext);

    const handleAddData = (data) => {
        console.log(data);
        const toy = {
            toyName: data?.toyName,
            price: data?.price,
            rating: data?.rating,
            pictureUrl: data?.pictureUrl,
            subCategory: data?.subCategory,
            sellerName: user?.displayName,
            sellerEmail: user?.email,
            quantity: data?.quantity,
            toyDetails: data?.toyDetails,
        };
        fetch('http://localhost:5000/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Toys Added');
            })

    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleAddData)}>
                    <input {...register("toyName")} type="text" placeholder="Enter toyName"/>
                    <input {...register("price")} type="text" placeholder="Enter price"/>
                    <input {...register("rating")} type="text" placeholder="Enter rating"/>
                    <input {...register("pictureUrl")} type="text" placeholder="Enter pictureUrl"/>
                    <input {...register("quantity")} type="text" placeholder="Enter quantity"/>
                    <input {...register("toyDetails")} type="text" placeholder="Enter toyDetails"/>

                <div>
                    <label>
                        
                    </label>
                    <select {...register("subCategory")}>
                        <option disabled selected>Select one</option>
                        <option>Truck Lorry</option>
                        <option>Dump Truck</option>
                        <option>Mini Truck</option>
                    </select>
                </div>

                <input value='REGISTER' type="submit" />
            </form>
        </div>
    );
};

export default AddToys;