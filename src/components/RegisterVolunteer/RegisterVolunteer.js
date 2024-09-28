import React, { useState } from 'react';
import logo from '../../images/logo.png';
import './RegisterVolunteer.css';
import RegisterVolunteerForm from '../RegisterVolunteerForm/RegisterVolunteerForm';
import { useNavigate, useParams } from 'react-router-dom';


const RegisterVolunteer = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [alert, setAlert] = useState(false);


    let successAlert;
    if (alert) {
        successAlert = <div className='contanner alert-container'>
            <div className="row">
                <div className="col-md-6 m-auto alert alert-success">
                    <p>Volunteer Activities added successfully.</p>
                </div>
            </div>
        </div>
    }

    const handleAlert = () => {
        setAlert(true);
        setTimeout(() => {
            document.querySelector('.alert-container').remove();
            navigate('/');
        }, 2000)
    }


    return (
        <div className='container'>
            {successAlert}
            <div className="row mt-5">
                <div className="col-md-3 text-center m-auto">
                    <img src={logo} className='img-fluid registerVolunteer-logo ' alt="" />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-4 m-auto border rounded px-4 py-4">
                    <h4 className='fs-4 mb-4'>Register as a Volunteer</h4>
                    <RegisterVolunteerForm handleAlert={handleAlert} voulnteerId={id} />
                </div>
            </div>
        </div>
    );
};

export default RegisterVolunteer;