import React from 'react';
import logo from '../../images/logo.png';
import './RegisterVolunteer.css';
import RegisterVolunteerForm from '../RegisterVolunteerForm/RegisterVolunteerForm';
import { useParams } from 'react-router-dom';


const RegisterVolunteer = () => {
    const { id } = useParams();

    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-md-3 text-center m-auto">
                    <img src={logo} className='img-fluid registerVolunteer-logo ' alt="" />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-4 m-auto border rounded px-4 py-4">
                    <h4 className='fs-4 mb-4'>Register as a Volunteer</h4>
                    <RegisterVolunteerForm voulnteerId={id} />
                </div>
            </div>
        </div>
    );
};

export default RegisterVolunteer;