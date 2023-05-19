import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import EditToys from './EditToys';
import { toast } from 'react-hot-toast';
import setTitle from '../../hooks/useTitle';

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext);
    setTitle('MyToys')
    useEffect(() => {
        fetch(`http://localhost:5000/trucks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);
    const handleConfirmDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this toy?')) {
            handleDetele(id);
        }
      };
    const handleDetele = id => {
        fetch(`http://localhost:5000/toy/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('Toy Deleted');
                }
            })
    }

    const ascending = () => {
        const sortedData = [...toys].sort((a, b) => parseInt(a.price) - parseInt(b.price));
        setToys(sortedData);
        console.log(toys)
    }
    return (
        <div>
            <button onClick={ascending}>Ascending</button>
            <table className='table w-full'>
                <thead >
                    <tr className='text-center'>
                    <th>Toy Picture</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys?.map(toy => <>
                            <tr >
                                <td><img className='w-16 h-16' src={toy?.pictureUrl} alt="photo" /></td>
                                <td>{toy?.toyName}</td>
                                <td>$ {toy?.price}</td>
                                <td className='space-x-5'>
                                    <button className="btn btn-warning">
                                    <Link to={`/edit/${toy?._id}`}>Edit</Link>
                                    </button>
                                    <button className="btn btn-error" onClick={() => handleConfirmDelete(toy?._id)}>Delete</button>
                                </td>
                                <td>
                                    <button className="btn btn-active btn-primary">
                                    <Link to={`/toy/details/${toy?._id}`}>Details</Link>
                                    </button>
                                    
                                </td>
                            </tr>
                        </>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyToys;