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

export default MyToys;