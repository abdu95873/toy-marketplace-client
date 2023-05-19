import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProviders';
import { toast } from 'react-hot-toast';
import setTitle from '../../hooks/useTitle';

const AddToys = () => {
    setTitle('Add Toys')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);

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
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">

                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body grid md:grid-cols-2">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input {...register("toyName")} type="text" placeholder="Toy Name" className="input input-bordered" />
                                    </div>


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input {...register("price")} type="text" placeholder="Price" className="input input-bordered" />
                                    </div>


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input {...register("rating")} type="text" placeholder="Rating" className="input input-bordered" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Picture</span>
                                        </label>
                                        <input {...register("pictureUrl")} type="text" placeholder="Picture" className="input input-bordered" />
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




                                    <div className=' rounded mb-5'>
                                    <label className="label">
                                            <span className="label-text">Sub-Category</span>
                                        </label>
                                    <select {...register("subCategory")}>
                                        <option disabled selected>Select one</option>
                                        <option>Truck Lorry</option>
                                        <option>Dump Truck</option>
                                        <option>Mini Truck</option>
                                    </select>
                                    </div>

                                    <div className="form-control bg-green-500 h-10 font-bold text-white rounded-md my-6">
                                        
                                        <input value='Add Toy' type="submit" />

                                    </div>


                                   

                                </div>
                            </div>
                        </div>
                    </div>





            </form>
        </div>
    );
};

export default AddToys;