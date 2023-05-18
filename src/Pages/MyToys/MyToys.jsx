import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import EditToys from './EditToys';

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        fetch(`http://localhost:5000/trucks?email=${user?.email}`)
            .then(res=>res.json())
            .then(data=>setToys(data))
    },[]);
    console.log(toys)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys?.map(toy=><>
                            <tr>
                                <td>{toy?.toyName}</td>
                                <td>
                                    <Link to={`/edit/${toy?._id}`}>Edit</Link>
                                    <button>Delete</button>
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