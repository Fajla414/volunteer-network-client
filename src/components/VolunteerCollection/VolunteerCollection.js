import React from 'react';
import './VolunteerCollection.css';
import { Link } from 'react-router-dom';

const VolunteerCollection = ({volunteer}) => {
    const {id, name, image, description} = volunteer;
    return (
        <div className="col volunteerCollection-container">
            <div className="card h-100">
               <Link to={`/productDetail/${id}`}><img src={image}  className="card-img-top img-fluid" alt={name} /></Link>
                    <div className="card-body">
                        <h5 className="card-title">{description}</h5>
                    </div>
            </div>
        </div>
    );
};

export default VolunteerCollection;