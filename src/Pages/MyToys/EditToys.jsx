import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import setTitle from '../../hooks/useTitle';

const EditToys = () => {
    setTitle('My Toys || Update Toy')
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
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body grid md:grid-cols-2">


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input {...register("price")} type="text" placeholder="Price" className="input input-bordered" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input {...register("quantity")} type="text" placeholder="Quantity" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input {...register("toyDetails")} type="text-area" placeholder="Details" className="input input-bordered" />
                                </div>


                                <div className="form-control bg-green-500 h-10 font-bold text-white rounded-md my-10">

                                    <input value='Update' type="submit" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </form>
        </div>

    );
};

export default EditToys;