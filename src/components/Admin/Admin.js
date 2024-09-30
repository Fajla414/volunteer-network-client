import React, { useEffect, useState } from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import AdminRegisterListTbody from '../AdminRegisterListTbody/AdminRegisterListTbody';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';



const Admin = () => {
    const navigate = useNavigate();
    const [adminPanelList, setAdminPanelList] = useState([]);
    const [succAlert, setAlert] = useState(false);
    const [newVolunteerListId, setNewVolunteerListId] = useState(0);
    const handleToggleAdminPanelInfo = (event) => {
        if (event.target.innerText === ' Volunteer register list') {
            const show = document.getElementById('volunteer-register-list');
            const hide = document.getElementById('add-event');
            hide.style.display = 'none';
            show.style.display = 'block';
        }
        if (event.target.innerText === ' Add event') {
            const show = document.getElementById('add-event');
            const hide = document.getElementById('volunteer-register-list');
            show.style.display = 'block';
            hide.style.display = 'none';
        }
    }

    useEffect(() => {
        fetch('http://localhost:5000/adminCollection')
            .then(res => res.json())
            .then(data => {
                setAdminPanelList(data);
            });


            fetch(`http://localhost:5000/newVolunteerListId`)
            .then(res => res.json())
            .then(data => {
               setNewVolunteerListId(data.length);
            })
    }, [])

    let successAlert;
    if (succAlert) {
        successAlert = <div className='contanner alert-container'>
            <div className="row">
                <div className="col-md-6 m-auto alert alert-success">
                    <p>Volunteer Activities deleted successfully.</p>
                </div>
            </div>
        </div>
    }

    const handleAlert = () => {
        setAlert(true);
        setTimeout(() => {
            document.querySelector('.alert-container').remove();
            navigate('/')
        }, 2000)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        const name = data.eventName;
        const description = data.description;
        const image = "";
        const id = newVolunteerListId;
        const addData = { id, image, name, description };
        fetch(`http://localhost:5000/addNewVolunteerNetwork`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                   navigate('/')
                }
            })
    }

    return (
        <div className='mt-2 bg-body-tertiary d-flex'>
            <div id="admin-control-panel" className='shadow col-md-3'>
                <p onClick={handleToggleAdminPanelInfo} id='admin-register' style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faUsers} /> Volunteer register list</p>
                <p onClick={handleToggleAdminPanelInfo} id='admin-event' style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faPlus} /> Add event</p>
            </div>


            <div id="volunteer-register-list" className='shadow mx-5 col-md-8 p-4  bg-light rounded border-secondary'>
                {successAlert}
                <table className="table">
                    <thead className="table table-secondary">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">EmailID</th>
                            <th scope="col">Registating Date</th>
                            <th scope="col">Volunteer list</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody id='tbody'>
                        {adminPanelList.map(td => <AdminRegisterListTbody handleAlert={handleAlert} user={td} key={td._id} />)}
                    </tbody>
                </table>
            </div>



            <div id="add-event" className='shadow mx-5 col-md-7 p-4  bg-light rounded border-secondary'>
                <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
                    <h6>Event Name</h6>
                    <input name='eventName' className='form-control'   {...register("eventName", { required: true })} placeholder='Event Name' />
                    <br />
                    <h6>Description</h6>
                    <textarea name='decription' className='form-control'   {...register("description", { required: true })} placeholder='Enter Description..' />
                    <br />
                    <h6>Banner</h6>
                    <input name='image' className='form-control' type='file'   {...register("image")} placeholder='Event Name' />
                    <br />
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Admin;