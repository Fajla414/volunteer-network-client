import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import CollectionItem from '../CollectionItem/CollectionItem';
import { Link } from 'react-router-dom';

const Collection = () => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    const [registeredUser, setRegisteredUser] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/collection?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setRegisteredUser(data);
            })
    }, [])




    return (
        <div className='container my-5'>
            {registeredUser.length > 0 ?
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {registeredUser.map(user => <CollectionItem key={user.id} user={user} />)}
                </div>
                :
                <div className="row">
                    <div className="col-md-4 border rounded border-secondary d-flex flex-column m-auto py-4 px-4">
                        <p className='text-center text-secondary'>You have noting Volunteer activities.</p>
                        <Link to={'/'} className='text-center'><button className='btn btn-primary'>Add activities</button></Link>
                    </div>
                </div>}
        </div>
    );
};

export default Collection;