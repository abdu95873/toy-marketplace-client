import React from 'react';
import { useForm } from 'react-hook-form';

const AddToys = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();



    return (
        <div>
            <form>
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