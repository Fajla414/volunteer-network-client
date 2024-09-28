import React, { useContext, useState } from 'react';
import { MyContext } from '../../App';

const Collection = () => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    const [registeredUser, setRegisteredUser] = useState([]);

    fetch(`http://localhost:5000/collection?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            setRegisteredUser(data);
        })
    return (
        <div className='container'>
           
        </div>
    );
};

export default Collection;