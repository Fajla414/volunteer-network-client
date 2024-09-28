import React, { useContext } from 'react';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const CollectionSingleItem = ({ volunteer, date }) => {
    const navigate = useNavigate()
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    const time = date;
    const { image, description, name } = volunteer;

    const handleDeleteCollectionSingleItem = (item) => {
        const itemId = item.id;
        const deleteInfo = { itemId, ...loggedInUser }
        fetch(`http://localhost:5000/deleteVolunteer`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(deleteInfo),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    navigate('/');
                }
            })
    }


    


    return (
        <div className="col volunteerCollection-container">
            <div className="card h-100">
                <img src={image} className="card-img-top img-fluid" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{description}</h5>
                    <p className="card-text">{time}</p>
                    <button onClick={() => handleDeleteCollectionSingleItem(volunteer)} className='btn btn-danger d-flex justify-content-end fw-bold'>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default CollectionSingleItem;